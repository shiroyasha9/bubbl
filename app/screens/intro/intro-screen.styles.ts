import { StyleSheet } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp, wp } from "@utils"

export default StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  mainLine: {
    ...textStyle.bold,
    alignItems: "center",
    color: color.palette.fontDarkBlue,
    flex: 1,
    fontSize: fontSize.h3,
    justifyContent: "center",
    lineHeight: hp(30),
    paddingHorizontal: spacing[2],
  },
  mainLineContainer: {
    alignItems: "center",
    flex: 0.25,
    justifyContent: "center",
    padding: spacing[1],
  },
  mascotImage: {
    height: "75%",
  },
  mascotImageContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  reasonBox: {
    borderRadius: 12,
    height: hp(135),
    justifyContent: "center",
    margin: spacing[1],
    padding: spacing[2],
    width: wp(140),
  },
  reasonBoxText: {
    color: color.palette.fontDarkBlue,
    fontSize: fontSize.medium,
    textAlign: "center",
  },
  root: {
    alignItems: "center",
    backgroundColor: color.palette.bgGrey,
    color: color.palette.white,
    flex: 1,
    justifyContent: "center",
    padding: spacing[5],
  },
  skip: {
    backgroundColor: color.palette.transparent,
    color: color.palette.smallGray,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[2],
    position: "absolute",
    right: spacing[2],
    top: spacing[2],
  },
  skipText: {
    color: color.palette.lighterBlack,
    fontSize: fontSize.cta,
  },
})
