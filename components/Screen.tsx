import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  ViewProps,
} from "react-native";

import { Colors } from "@themes";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

type ScreenProps = {
  children: React.ReactNode;
};

SplashScreen.preventAutoHideAsync();

export const Screen: React.FC<ScreenProps & ViewProps> = ({
  children,
  style,
  ...props
}) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Italic": require("@assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Bold": require("@assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("@assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={[styles.root, style]}
      {...props}
      onLayout={onLayoutRootView}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    padding: 10,
  },
});
