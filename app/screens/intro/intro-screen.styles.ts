import { StyleSheet } from "react-native"
import {
  color,
  spacing,
  fontSize,
  // textStyle
} from "@theme"
// import { hp } from "@utils"

export default StyleSheet.create({
  mainLineContainer: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing[1],
  },
  mainLine: {
    flex: 1,
    color: color.palette.fontDarkBlue,
    fontFamily: "Poppins-Bold",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 22,
    lineHeight: 30,
    paddingHorizontal: spacing[2],
  },
  reasonBox: {
    height: 135,
    width: 160,
    borderRadius: 12,
    padding: spacing[2],
    justifyContent: "center",
    margin: spacing[1],
  },
  mascotImageContainer: { flex: 1, width: "100%", justifyContent: "center", alignItems: "center" },
  mascotImage: {
    height: "75%",
  },
  reasonBoxText: { color: color.palette.fontDarkBlue, textAlign: "center", fontSize: 16 },
  root: {
    alignItems: "center",
    backgroundColor: color.palette.bgGrey,
    color: color.palette.white,
    flex: 1,
    justifyContent: "center",
    padding: spacing[5],
  },
  body: {
    marginTop: spacing[6],
  },
  container: {
    paddingHorizontal: spacing[5],
  },
  content: {
    marginVertical: spacing[6],
  },
  skip: {
    backgroundColor: color.palette.transparent,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[2],
    color: "#636363",
    position: "absolute",
    right: spacing[2],
    top: spacing[2],
  },
  skipText: {
    color: color.palette.lighterBlack,
    fontSize: fontSize.cta,
  },
})
