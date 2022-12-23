import { Button, Screen } from "@components";
import { GOOGLE_REVOKE_TOKEN_URL } from "@constants";
import { useAppDispatch, useAppSelector } from "@hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { resetAuthInfo } from "@stores";
import { NavigatorParamList } from "@types";
import { revokeAsync } from "expo-auth-session";

import { Image, StyleSheet, Text } from "react-native";

type HomeProps = NativeStackScreenProps<NavigatorParamList, "Home">;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { auth, userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

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
        <Button
          title="Sign Out"
          onPress={logoutHandler}
          style={styles.button}
        />
      ) : (
        <>
          <Text>You ain't logged in bud</Text>
          <Button
            title="Back to Onboarding"
            onPress={() =>
              navigation.reset({ index: 0, routes: [{ name: "Onboarding" }] })
            }
            style={styles.button}
          />
        </>
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
