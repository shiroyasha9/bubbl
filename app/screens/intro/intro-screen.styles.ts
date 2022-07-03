import { StyleSheet } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp, wp } from "@utils"

export default StyleSheet.create({
  inputContainer: {
    marginTop: spacing[6],
    marginBottom: spacing[5],
  },
  root: {
    flex: 1,
    padding: spacing[6],
  },
  label: {
    ...textStyle.semiBold,
    fontSize: fontSize.small,
  },
  textInput: {
    ...textStyle.semiBold,
    fontSize: fontSize.small,
    textAlignVertical: "bottom",
    borderWidth: 1.5,
    borderColor: color.palette.lighterGrey,
    borderRadius: 12,
    padding: spacing[2],
    marginVertical: spacing[2],
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: fontSize.h2,
    width: fontSize.h2,
    marginLeft: spacing[1],
  },
  smallIcons: {},
  focusedTextInput: {
    borderColor: color.palette.frenchViolet,
  },
  goalContainer: {},
  goalSubtitleText: {
    ...textStyle.semiBold,
    fontSize: fontSize.regular,
    textAlign: "center",
    marginBottom: spacing[3],
  },
  goal: {
    borderWidth: 1,
    padding: spacing[5],
    marginVertical: spacing[3],
    borderRadius: 12,
    borderColor: color.palette.frenchViolet,
  },
  goal1: {
    backgroundColor: color.palette.chewingGum,
  },
  goal2: {
    backgroundColor: color.palette.faintViolet,
  },
  goal3: {
    backgroundColor: color.palette.journalListPink,
  },
  goal4: {
    backgroundColor: color.palette.faintPink,
  },
  primaryButton: {
    marginTop: spacing[4],
    width: "100%",
  },
})
