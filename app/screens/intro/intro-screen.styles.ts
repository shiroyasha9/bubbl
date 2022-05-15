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
  mainLine: {
    ...textStyle.bold,
    alignItems: "center",
    color: color.palette.fontDarkBlue,
    flex: 1,
    fontSize: fontSize.h2,
    justifyContent: "center",
    lineHeight: hp(30),
    marginVertical: spacing[2],
    textAlign: "center",
  },
  mainLineContainer: {
    alignItems: "center",
    flex: 0.25,
    justifyContent: "center",
    padding: spacing[1],
  },
  mascotImage: {
    height: wp(180),
  },
  mascotImageContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  reasonBox: {
    aspectRatio: 1 / 1,
    borderRadius: 12,
    justifyContent: "center",
    margin: spacing[1],
    padding: spacing[2],
    width: wp(130),
  },
  reasonBoxText: {
    color: color.palette.fontDarkBlue,
    fontSize: fontSize.title,
    textAlign: "center",
  },
  root: {
    alignItems: "center",
    backgroundColor: color.palette.snowWhite,
    color: color.palette.white,
    flex: 1,
    justifyContent: "center",
    padding: spacing[5],
  },
})
