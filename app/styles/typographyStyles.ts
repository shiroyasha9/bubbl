import { color, fontSize, textStyle } from "@theme"
import { StyleSheet } from "react-native"

export const typographyStyles = StyleSheet.create({
  title: {
    ...textStyle.semiBold,
    color: color.palette.peacock,
    flexWrap: "wrap",
    fontSize: fontSize.h2,
  },
  subtitle: {
    color: color.palette.peacock,
    flexWrap: "wrap",
    fontSize: fontSize.regular,
  },
})
