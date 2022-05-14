import { StyleSheet, Dimensions } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp } from "@utils"
const DeviceWidth = Dimensions.get("window").width
const OneFourthDeviceWidth = DeviceWidth / 4
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
    fontSize: fontSize.title,
    letterSpacing: 2,
  },
  detailsText: {
    ...textStyle.semiBold,
  },
  feelingBox: {
    width: OneFourthDeviceWidth,
    height: OneFourthDeviceWidth,
    backgroundColor: color.palette.lightBlue,
    margin: spacing[2],
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderWidth: 2,
    borderColor: color.palette.transparent,
  },
  feelingBoxEmoji: {
    fontSize: fontSize.h1 * 1.2,
  },
  feelingBoxText: {
    ...textStyle.semiBold,
    fontSize: fontSize.h4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    color: color.palette.fontDarkBlue,
  },
  footer: {
    backgroundColor: color.palette.snowWhite,
  },
  footerContent: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  gridContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  updateButton: {
    backgroundColor: color.palette.purpleAction,
  },
})
