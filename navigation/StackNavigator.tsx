import { GOOGLE_REFRESH_TOKEN_URL } from "@constants";
import { useAppDispatch, useAppSelector } from "@hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Onboarding } from "@screens";
import { saveAuthInfo } from "@stores";
import { fetchGoogleUserData, getClientId } from "@utils";
import { TokenResponse, refreshAsync } from "expo-auth-session";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigatorParamList } from "types";

const Stack = createNativeStackNavigator<NavigatorParamList>();

const StackNavigator = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state.auth);

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

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
      initialRouteName={auth ? "Home" : "Onboarding"}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
