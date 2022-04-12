import { StyleSheet } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp, wp } from "@utils"

export default StyleSheet.create({
  TEXT: {
    ...textStyle.bold,
    color: color.palette.white,
    fontSize: fontSize.medium,
    textAlign: "center",
  },
  container: {
    backgroundColor: color.palette.frenchViolet,
    borderRadius: hp(12),
    justifyContent: "center",
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[3],
    width: wp(200),
  },
})
