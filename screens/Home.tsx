import { Button, Screen } from "@components";
import { GOOGLE_FETCH_USER_DATA_URL, IS_EXPO_GO } from "@constants";
import { ANDROID_OAUTH_ID, EXPO_OAUTH_ID, IOS_OAUTH_ID } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TFetchUserDataResponse } from "@types";
import type { TokenResponse } from "expo-auth-session";

import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";

export const Home = () => {
  const [userInfo, setUserInfo] = useState<TFetchUserDataResponse | null>(null);
  const [auth, setAuth] = useState<TokenResponse | null>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_OAUTH_ID,
    iosClientId: IOS_OAUTH_ID,
    expoClientId: EXPO_OAUTH_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAuth(response.authentication);

      const persistAuth = async () => {
        await AsyncStorage.setItem(
          "auth",
          JSON.stringify(response.authentication),
        );
      };
      persistAuth();
    }
  }, [response]);

  useEffect(() => {
    const getPersistedAuth = async () => {
      const auth = await AsyncStorage.getItem("auth");
      if (auth !== null) {
        setAuth(JSON.parse(auth));
      }
    };
    getPersistedAuth();
  }, []);

  const getUserData = async () => {
    let data = await fetch(GOOGLE_FETCH_USER_DATA_URL, {
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`,
      },
    });
    setUserInfo((await data.json()) as TFetchUserDataResponse);
  };

  return (
    <Screen style={styles.root}>
      <Text>Home</Text>
      {userInfo && (
        <>
          <Image source={{ uri: userInfo.picture }} style={styles.image} />
          <Text>
            {userInfo.name} {userInfo.email}
          </Text>
        </>
      )}
      <Button
        text={auth ? "Get User Data" : "Sign In"}
        onPress={
          auth
            ? getUserData
            : () => promptAsync({ useProxy: IS_EXPO_GO, showInRecents: true })
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
