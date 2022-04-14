import { StyleSheet } from "react-native"
import {
  color,
  spacing,
  fontSize,
  // textStyle
} from "@theme"
// import { hp } from "@utils"

export default StyleSheet.create({
  mainLine: {
    alignItems: "center",
    color: color.palette.fontDarkBlue,
    flex: 1,
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    justifyContent: "center",
    lineHeight: 30,
    paddingHorizontal: spacing[2],
  },
  mainLineContainer: {
    alignItems: "center",
    flex: 0.25,
    justifyContent: "center",
    padding: spacing[1],
  },
  mascotImageContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mascotImage: {
    height: "75%",
  },
  reasonBox: {
    borderRadius: 12,
    height: 135,
    justifyContent: "center",
    margin: spacing[1],
    padding: spacing[2],
    width: 160,
  },

  reasonBoxText: {
    color: color.palette.fontDarkBlue,
    fontSize: 16,
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
