import { StyleSheet } from "react-native"
import { color, fontSize, spacing, textStyle } from "@theme"
import { hp } from "@utils"

export default StyleSheet.create({
  container: {
    height: hp(600),
    justifyContent: "center",
    marginHorizontal: spacing[2],
    marginVertical: spacing[3],
    maxHeight: hp(600),
  },
  image: {
    borderColor: color.palette.mutedGrey,
    borderRadius: 15,
    borderWidth: 1,
    height: hp(250),
    marginBottom: spacing[4],
  },
  music: {
    alignSelf: "center",
    width: hp(250),
  },
  playPauseIcon: {
    alignSelf: "center",
  },
  slider: {
    alignSelf: "center",
    height: 50,
    width: hp(270),
  },
  timerText: {
    fontSize: fontSize.tiny,
    marginTop: spacing[6],
  },
  timers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    ...textStyle.bold,
    fontSize: fontSize.medium,
    textAlign: "center",
  },
})
