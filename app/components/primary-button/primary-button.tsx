import * as React from "react"
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import styles from "./primary-button.styles"

export interface PrimaryButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  text?: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  children?: React.ReactNode
  onPress?: () => void
}

export const PrimaryButton = observer(function PrimaryButton(
  props: PrimaryButtonProps,
) {
  const { style, textStyle, text, children, onPress } = props
  const overrideStyles = Object.assign({}, styles.container, style)
  const overrideTextStyles = Object.assign({}, styles.text, textStyle)

  return (
    <TouchableOpacity onPress={() => onPress && onPress()}>
      <View style={overrideStyles}>
        {text ? <Text style={overrideTextStyles}>{text}</Text> : children}
      </View>
    </TouchableOpacity>
  )
})
