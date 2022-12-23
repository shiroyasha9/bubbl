import {
  PopAnimationProps,
  SpringAnimationProps,
} from "components/animations/animations.types";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { TButtonPresets } from "./button.presets";

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
