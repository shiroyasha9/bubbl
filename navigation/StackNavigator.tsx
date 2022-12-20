import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Onboarding } from "@screens";
import { NavigatorParamList } from "@types";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator<NavigatorParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
