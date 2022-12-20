import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  ViewProps,
} from "react-native";

import { Colors } from "@themes";

type ScreenProps = {
  children: React.ReactNode;
};

export const Screen: React.FC<ScreenProps & ViewProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <SafeAreaView style={[styles.root, style]} {...props}>
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
