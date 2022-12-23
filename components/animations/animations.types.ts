import { Animated as RNAnimated } from "react-native";

export type SpringAnimationProps = {
  initialOffset?: number;
  animationOffset?: number;
  finalOffset?: number;
  axis?: "x" | "y";
  animationConfig?: never;
};

export type PopAnimationProps = {
  initialOffset?: number;
  finalOffset?: number;
  animationOffset?: number;
  animationConfig?: RNAnimated.SpringAnimationConfig;
  axis?: never;
};
