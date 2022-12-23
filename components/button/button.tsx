import { Pressable, PressableProps, View } from "react-native";
import { PopAnimation } from "../animations/pop-animation";
import { SpringAnimation } from "../animations/spring-animation";
import { Text } from "../text/text";
import { presets } from "./button.presets";
import styles from "./button.styles";
import { ButtonProps } from "./button.types";

export const Button = (props: PressableProps & ButtonProps) => {
  const {
    preset = "default",
    style,
    textStyle,
    title,
    children,
    onPress,
    animation,
    initialOffset,
    finalOffset,
    animationOffset,
    animationConfig,
    axis,
    ...rest
  } = props;

  const presetStyles = presets[preset];

  const commonAnimationProps = {
    initialOffset,
    finalOffset,
    animationOffset,
  };

  const springAnimationProps = {
    ...commonAnimationProps,
    axis,
  };

  const popAnimationProps = {
    ...commonAnimationProps,
    animationConfig,
  };

  let content = (animationOnPress?: () => void) => (
    <Pressable
      onPress={(e) => {
        animationOnPress && animationOnPress();
        onPress && onPress(e);
      }}
      style={({ pressed }) => [
        styles.container,
        presetStyles.container,
        style,
        pressed && presetStyles.pressed,
      ]}
      {...rest}
    >
      {title ? (
        <View style={styles.buttonInsideContainer}>
          {props.leftIcon && props.leftIcon}
          <Text style={[styles.text, presetStyles.text, textStyle]}>
            {title}
          </Text>
          {props.rightIcon && props.rightIcon}
        </View>
      ) : (
        children
      )}
    </Pressable>
  );

  if (animation === "pop") {
    return <PopAnimation {...popAnimationProps}>{content}</PopAnimation>;
  }

  if (animation === "spring") {
    return (
      <SpringAnimation {...springAnimationProps}>{content()}</SpringAnimation>
    );
  }

  return content();
};
