import { Button, Screen } from "@components";
import { GOOGLE_FETCH_USER_DATA_URL, IS_EXPO_GO } from "@constants";
import { ANDROID_OAUTH_ID, EXPO_OAUTH_ID, IOS_OAUTH_ID } from "@env";
import { TAuthResponse } from "@types";

import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";

export const Home = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<TAuthResponse | null>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_OAUTH_ID,
    iosClientId: IOS_OAUTH_ID,
    expoClientId: EXPO_OAUTH_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication?.accessToken ?? null);
    }
  }, [response]);

  const getUserData = async () => {
    let data = await fetch(GOOGLE_FETCH_USER_DATA_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    setUserInfo((await data.json()) as TAuthResponse);
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
        text={accessToken ? "Get User Data" : "Sign In"}
        onPress={
          accessToken
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
