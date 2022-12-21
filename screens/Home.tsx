import { Button, Screen } from "@components";
import {
  GOOGLE_FETCH_USER_DATA_URL,
  GOOGLE_REFRESH_TOKEN_URL,
  GOOGLE_REVOKE_TOKEN_URL,
  IS_EXPO_GO,
} from "@constants";
import { ANDROID_OAUTH_ID, EXPO_OAUTH_ID, IOS_OAUTH_ID } from "@env";
import { useAppDispatch, useAppSelector } from "@hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetAuthInfo, saveAuthInfo } from "@stores";
import { TOAuthUserData } from "@types";
import { TokenResponse, refreshAsync, revokeAsync } from "expo-auth-session";

import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { Image, Platform, StyleSheet, Text } from "react-native";

export const Home = () => {
  const { auth, userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [_, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_OAUTH_ID,
    iosClientId: IOS_OAUTH_ID,
    expoClientId: EXPO_OAUTH_ID,
  });

  const fetchGoogleUserData = async (accessToken: string) => {
    let data = await fetch(GOOGLE_FETCH_USER_DATA_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return (await data.json()) as TOAuthUserData;
  };

  useEffect(() => {
    if (response?.type === "success") {
      const persistAuth = async () => {
        await AsyncStorage.setItem(
          "auth",
          JSON.stringify(response.authentication),
        );

        const userData = await fetchGoogleUserData(
          response.authentication?.accessToken!,
        );

        dispatch(
          saveAuthInfo({
            userInfo: userData,
            auth: response.authentication!,
          }),
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

        if (!TokenResponse.isTokenFresh(authObj)) {
          refreshToken(authObj.refreshToken!);
        } else {
          const userData = await fetchGoogleUserData(authObj.accessToken);

          dispatch(saveAuthInfo({ userInfo: userData, auth: authObj }));
        }
      }
    };
    getPersistedAuth();
  }, []);

  const refreshToken = async (refreshToken: string) => {
    const clientId = getClientId();
    const tokenResult = await refreshAsync(
      {
        clientId,
        refreshToken,
      },
      { tokenEndpoint: GOOGLE_REFRESH_TOKEN_URL },
    );
    const userData = await fetchGoogleUserData(tokenResult.accessToken);

    dispatch(saveAuthInfo({ userInfo: userData, auth: tokenResult }));

    await AsyncStorage.setItem("auth", JSON.stringify(tokenResult));
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

  const logoutHandler = async () => {
    await revokeAsync(
      {
        token: auth?.accessToken!,
      },
      {
        revocationEndpoint: GOOGLE_REVOKE_TOKEN_URL,
      },
    );
    dispatch(resetAuthInfo());
    await AsyncStorage.removeItem("auth");
  };

  return (
    <Screen style={styles.root}>
      {userInfo && (
        <>
          <Image source={{ uri: userInfo.picture }} style={styles.image} />
          <Text>
            {userInfo.name} {userInfo.email}
          </Text>
        </>
      )}
      {auth ? (
        <Button text="Sign Out" onPress={logoutHandler} style={styles.button} />
      ) : (
        <Button
          text="Sign In"
          style={styles.button}
          onPress={() =>
            promptAsync({ useProxy: IS_EXPO_GO, showInRecents: true })
          }
        />
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
