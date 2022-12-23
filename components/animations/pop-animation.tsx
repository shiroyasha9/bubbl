import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { PopAnimationProps } from "./animations.types";

type Props = {
  children: (onPress: () => void) => React.ReactNode;
} & PopAnimationProps;

export const PopAnimation = (props: Props): JSX.Element => {
  const {
    children,
    initialOffset = 0,
    finalOffset = 1,
    animationOffset = 0.8,
    animationConfig = {
      toValue: 1,
      bounciness: 18,
      speed: 20,
      useNativeDriver: true,
    },
  } = props;
  const animatedScale = useRef(new Animated.Value(initialOffset)).current;

  useEffect(() => {
    animatedScale.setValue(finalOffset);
  }, []);

  const handlePopAnimation = () => {
    animatedScale.setValue(animationOffset);
    Animated.spring(animatedScale, animationConfig).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
      {children(handlePopAnimation)}
    </Animated.View>
  );
};
