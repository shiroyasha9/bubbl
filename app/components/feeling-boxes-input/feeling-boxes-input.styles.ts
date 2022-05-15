import { StyleSheet, Dimensions } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp, wp } from "@utils"
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
    borderRadius: hp(12),
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    width: wp(290),
  },
  continueText: {
    ...textStyle.bold,
    color: color.palette.white,
    fontSize: fontSize.medium,
    letterSpacing: 2,
  },
  detailsText: {
    ...textStyle.semiBold,
  },
  feelingBox: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: color.palette.lightBlue,
    borderColor: color.palette.transparent,
    borderRadius: 20,
    borderWidth: 2,
    display: "flex",
    height: OneFourthDeviceWidth,
    justifyContent: "center",
    margin: spacing[2],
    width: OneFourthDeviceWidth,
  },
  feelingBoxEmoji: {
    fontSize: fontSize.h1 * 1.2,
  },
  feelingBoxText: {
    ...textStyle.semiBold,
    alignContent: "center",
    alignItems: "center",
    color: color.palette.fontDarkBlue,
    display: "flex",
    fontSize: fontSize.regular,
    justifyContent: "center",
  },
  footer: {
    backgroundColor: color.palette.snowWhite,
  },
  footerContent: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  gridContainer: {
    alignItems: "center",
    marginTop: spacing[6],
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moodRow: {
    flexDirection: "row",
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
