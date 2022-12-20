import { fp } from "@utils";
import { TextStyle as RNTextStyle } from "react-native";

import { Colors } from "./colors";

const typography = {
  primary: "Poppins-Regular",
  bold: "Poppins-Bold",
  semiBold: "Poppins-SemiBold",
  italic: "Poppins-Italic",
};

const fontSize = {
  h1: fp(28),
  h2: fp(24),
  h3: fp(20),
  h4: fp(18),
  h5: fp(16),
  h6: fp(19),
  input: fp(15),
  medium: fp(16),
  regular: fp(14),
  small: fp(14),
  tiny: fp(12),
  title: fp(18),
  cta: fp(18),
  icon: fp(24),
  iconLarge: fp(26),
};

const BASE: RNTextStyle = {
  fontFamily: typography.primary,
  color: Colors.black,
  fontSize: fontSize.medium,
};

const BOLD: RNTextStyle = {
  ...BASE,
  fontFamily: typography.bold,
};

const SEMIBOLD: RNTextStyle = {
  ...BASE,
  fontFamily: typography.semiBold,
};

const ITALIC: RNTextStyle = {
  ...BASE,
  fontFamily: typography.italic,
};

const textStyle = {
  /**
   * The default text styles.
   */
  default: BASE,
  normal: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BOLD } as RNTextStyle,
  /**
   * A semibold version of the default text.
   */
  semiBold: { ...SEMIBOLD } as RNTextStyle,
  /**
   * An italic version of the default text.
   */
  italic: { ...ITALIC } as RNTextStyle,

  /**
   * Large headers.
   */
  header: { ...BOLD, fontSize: fontSize.h2 } as RNTextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: {
    ...BOLD,
    fontSize: fontSize.tiny,
    color: Colors.lightGrey,
  } as RNTextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: {
    ...BASE,
    fontSize: fontSize.small,
    color: Colors.lightGrey,
  } as RNTextStyle,
  secondaryBold: {
    ...BOLD,
    fontSize: fontSize.small,
    color: Colors.lightGrey,
  } as RNTextStyle,
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof textStyle;

export { fontSize, textStyle, typography };
