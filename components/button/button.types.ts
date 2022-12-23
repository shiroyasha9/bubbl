import type {
  PopAnimationProps,
  SpringAnimationProps,
} from "components/animations/animations.types";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import type { TButtonPresets } from "./button.presets";

export type ButtonPreset = {
  container: ViewStyle;
  pressed: ViewStyle;
  text: TextStyle;
};

type ButtonCommonProps = {
  preset?: TButtonPresets;
  title?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export type ButtonProps = ButtonCommonProps &
  (
    | ({
        animation?: "spring";
      } & SpringAnimationProps)
    | ({
        animation?: "pop";
      } & PopAnimationProps)
  );
