import { StyleSheet } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp } from "@utils"

export default StyleSheet.create({
  body: {
    marginTop: spacing[6],
  },

  container: {
    height: hp(600),
    maxHeight: hp(600),
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  continue: {
    backgroundColor: color.palette.frenchViolet,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  continueText: {
    ...textStyle.bold,
    color: color.palette.white,
    fontSize: fontSize.regular,
    letterSpacing: 2,
  },
  moodHistory: {
    height: hp(350),
    marginTop: spacing[2],
  },
  updateButton: {
    backgroundColor: color.palette.purpleAction,
  },
})
