import {
  StyleProp,
  TextProps as TextProperties,
  TextStyle,
} from "react-native";
import { TextPresets } from "./text.presets";

export interface TextProps extends TextProperties {
  children?: React.ReactNode;
  text?: string;
  style?: StyleProp<TextStyle>;
  preset?: TextPresets;
}
