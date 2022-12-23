import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { SpringAnimationProps } from "./animations.types";

type Props = {
  children: React.ReactNode;
} & SpringAnimationProps;

export const SpringAnimation = (props: Props): JSX.Element => {
  const {
    children,
    initialOffset = 1,
    animationOffset,
    axis = "y",
    finalOffset = 0,
  } = props;

  const offset = useSharedValue(initialOffset);

  const animatedStyles = useAnimatedStyle(() => {
    const offsetValue = offset.value * (animationOffset || 255);
    return {
      transform: [
        axis === "x"
          ? { translateX: offsetValue }
          : { translateY: offsetValue },
      ],
    };
  });

  useFocusEffect(
    useCallback(() => {
      offset.value = withSpring(finalOffset);
    }, []),
  );

  return <Animated.View style={animatedStyles}>{children}</Animated.View>;
};
