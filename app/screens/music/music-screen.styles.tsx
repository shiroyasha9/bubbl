import { StyleSheet } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp } from "@utils"

export default StyleSheet.create({
  header: {
    padding: spacing[6],
    paddingLeft: spacing[8],
  },
  headerText: {
    ...textStyle.bold,
    color: color.palette.fontDarkBlue,
    fontSize: fontSize.h1,
  },
  ROOT: {
    backgroundColor: color.palette.white,
    flex: 1,
  },
})
