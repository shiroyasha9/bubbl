import { StyleSheet } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"

export default StyleSheet.create({
  alternateHeader: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: spacing[6],
  },
  alternateHeaderText: {
    ...textStyle.bold,
    flex: 1,
    fontSize: fontSize.h4,
    textAlign: "center",
  },
  container: {
    alignItems: "stretch",
    flex: 1,
    justifyContent: "space-between",
    marginBottom: spacing[6],
    paddingHorizontal: spacing[5],
  },
  continue: {
    backgroundColor: color.palette.frenchViolet,
    borderRadius: 12,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  continueText: {
    ...textStyle.bold,
    color: color.palette.white,
    fontSize: fontSize.regular,
    letterSpacing: 2,
  },
  journalTextInputBox: {
    backgroundColor: color.palette.journalListPink,
    borderRadius: 32,
    color: color.palette.lighterBlack,
    marginVertical: spacing[4],
    padding: spacing[4],
    ...textStyle.default,
    fontSize: fontSize.h2,
  },
})
