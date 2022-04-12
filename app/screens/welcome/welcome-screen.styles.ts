import { StyleSheet } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp } from "@utils"

export default StyleSheet.create({
  body: {
    marginTop: spacing[6],
  },
  container: {
    paddingHorizontal: spacing[5],
  },
  content: {
    marginVertical: spacing[6],
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
  detailsText: {
    ...textStyle.semiBold,
  },
  footer: {
    backgroundColor: color.palette.snowWhite,
  },
  footerContent: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  full: { flex: 1 },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profilePic: {
    borderRadius: hp(50),
    height: hp(40),
    width: hp(40),
  },
  title: {
    ...textStyle.bold,
    fontSize: fontSize.h3,
    lineHeight: 38,
  },
})
