import { color } from "@themes";
import { TextStyle, ViewStyle } from "react-native";

type ButtonPreset = {
  container: ViewStyle;
  pressed: ViewStyle;
  text: TextStyle;
};

const BASE_CONTAINER: ViewStyle = {
  backgroundColor: color.frenchViolet,
};

const BASE_TEXT: TextStyle = {
  color: color.white,
};

const BASE_PRESSED: ViewStyle = {
  backgroundColor: color.darkFrenchViolet,
};

const INVERTED_CONTAINER: ViewStyle = {
  backgroundColor: color.white,
  borderColor: color.frenchViolet,
  borderWidth: 2,
};

const INVERTED_TEXT: TextStyle = {
  color: color.fontDarkBlue,
};

const INVERTED_PRESSED: ViewStyle = {
  opacity: 0.5,
  borderColor: color.darkFrenchViolet,
};

const BASE: ButtonPreset = {
  container: BASE_CONTAINER,
  pressed: BASE_PRESSED,
  text: BASE_TEXT,
};

const INVERTED: ButtonPreset = {
  container: INVERTED_CONTAINER,
  pressed: INVERTED_PRESSED,
  text: INVERTED_TEXT,
};

export const presets = {
  default: BASE,
  inverted: INVERTED,
};

/**
 * A list of preset names.
 */
export type TButtonPresets = keyof typeof presets;
