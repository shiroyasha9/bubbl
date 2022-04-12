import * as React from "react"
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import styles from "./primary-button.styles"

export interface PrimaryButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  text?: string
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  onPress?: () => void
}

export const PrimaryButton = observer(function PrimaryButton(props: PrimaryButtonProps) {
  const { style, text, children, onPress } = props
  const overrideStyles = Object.assign({}, styles.container, style)

  return (
    <TouchableOpacity onPress={() => onPress && onPress()}>
      <View style={overrideStyles}>
        {text ? <Text style={styles.TEXT}>{text}</Text> : children}
      </View>
    </TouchableOpacity>
  )
})
