import { Button, Screen } from "@components";
import {
  GOOGLE_FETCH_USER_DATA_URL,
  GOOGLE_REFRESH_TOKEN_URL,
  GOOGLE_REVOKE_TOKEN_URL,
  IS_EXPO_GO,
} from "@constants";
import { ANDROID_OAUTH_ID, EXPO_OAUTH_ID, IOS_OAUTH_ID } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TFetchUserDataResponse } from "@types";
import { TokenResponse, refreshAsync, revokeAsync } from "expo-auth-session";

import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import { Image, Platform, StyleSheet, Text } from "react-native";

export const Home = () => {
  const [userInfo, setUserInfo] = useState<TFetchUserDataResponse | null>(null);
  const [auth, setAuth] = useState<TokenResponse | null>(null);
  const [requireRefresh, setRequireRefresh] = useState(false);

  const [_, response, promptAsync] = Google.useAuthRequest({
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
        const authObj = JSON.parse(auth) as TokenResponse;
        setAuth(authObj);

        setRequireRefresh(!TokenResponse.isTokenFresh(authObj));
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

  const getClientId = () => {
    if (IS_EXPO_GO) {
      return EXPO_OAUTH_ID;
    }
    if (Platform.OS === "ios") {
      return IOS_OAUTH_ID;
    }
    return ANDROID_OAUTH_ID;
  };

  const refreshToken = async () => {
    const clientId = getClientId();
    const refreshToken = auth?.refreshToken;
    const tokenResult = await refreshAsync(
      {
        clientId,
        refreshToken,
      },
      { tokenEndpoint: GOOGLE_REFRESH_TOKEN_URL },
    );

    setAuth(tokenResult);
    await AsyncStorage.setItem("auth", JSON.stringify(tokenResult));
    setRequireRefresh(false);
  };

  const logoutHandler = async () => {
    await revokeAsync(
      {
        token: auth?.accessToken!,
      },
      {
        revocationEndpoint: GOOGLE_REVOKE_TOKEN_URL,
      },
    );
    setAuth(null);
    setUserInfo(null);
    await AsyncStorage.removeItem("auth");
  };

  if (requireRefresh) {
    return (
      <Screen style={styles.root}>
        <Text>Needs Refresh</Text>
        <Button text="Refresh token" onPress={refreshToken} />
      </Screen>
    );
  }

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
        style={styles.button}
        onPress={
          auth
            ? getUserData
            : () => promptAsync({ useProxy: IS_EXPO_GO, showInRecents: true })
        }
      />
      {auth && (
        <Button text="Sign Out" onPress={logoutHandler} style={styles.button} />
      )}
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
  button: {
    marginVertical: 10,
  },
});
