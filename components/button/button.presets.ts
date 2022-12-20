import { TextStyle, ViewStyle } from "react-native";
import styles from "./button.styles";

type ButtonPreset = {
  container: ViewStyle;
  pressed: ViewStyle;
  text: TextStyle;
};

const BASE: ButtonPreset = {
  container: styles.baseContainer,
  pressed: styles.basePressed,
  text: styles.baseText,
};

const INVERTED: ButtonPreset = {
  container: styles.invertedContainer,
  pressed: styles.invertedPressed,
  text: styles.invertedText,
};

export const presets = {
  default: BASE,
  inverted: INVERTED,
};

export type TButtonPresets = keyof typeof presets;
