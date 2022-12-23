import styles from "./button.styles";
import { ButtonPreset } from "./button.types";

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
