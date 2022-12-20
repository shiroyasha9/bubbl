import {
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Text } from "../text/text";
import { TButtonPresets, presets } from "./button.presets";
import styles from "./button.styles";

type ButtonProps = {
  preset?: TButtonPresets;
  text?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

export const Button = (props: PressableProps & ButtonProps) => {
  const {
    preset = "default",
    style,
    textStyle,
    text,
    children,
    onPress,
    ...rest
  } = props;

  const presetStyles = presets[preset];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        presetStyles.container,
        style,
        pressed && presetStyles.pressed,
      ]}
      {...rest}
    >
      {text ? (
        <Text style={[styles.text, presetStyles.text, textStyle]}>{text}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
};
