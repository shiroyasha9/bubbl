import { GOOGLE_REFRESH_TOKEN_URL, IS_EXPO_GO } from "@constants";
import { useAppDispatch, useAppSelector } from "@hooks";
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
  };

  useEffect(() => {
    const getPersistedAuth = async () => {
      if (auth !== null) {
        if (!IS_EXPO_GO && !TokenResponse.isTokenFresh(auth)) {
          refreshToken(auth.refreshToken!);
        } else {
          const userData = await fetchGoogleUserData(auth.accessToken);

          dispatch(saveAuthInfo({ userInfo: userData, auth: auth }));
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
