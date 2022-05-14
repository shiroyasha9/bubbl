import { StyleSheet, Dimensions } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp } from "@utils"
const height = Dimensions.get("screen").height
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
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  noJournals: {
    ...textStyle.semiBold,
    fontSize: fontSize.h1,
    textAlign: "center",
    color: color.palette.fontDarkBlue,
  },
  profilePic: {
    borderRadius: hp(50),
    height: hp(40),
    width: hp(40),
  },
  scrollContainer: {
    display: "flex",
    // height: hp(400),
    marginTop: spacing[3],
    maxHeight: height - 350,
  },
  title: {
    ...textStyle.bold,
    fontSize: fontSize.h3,
    lineHeight: 38,
  },
  updateButton: {
    backgroundColor: color.palette.purpleAction,
    fontSize: fontSize.h3,
    marginVertical: spacing[3],
  },
  updateButtonText: {
    ...textStyle.semiBold,
    fontSize: fontSize.h3,
    color: color.palette.white,
  },
})
