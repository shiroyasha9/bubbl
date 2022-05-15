import { StyleSheet } from "react-native"
import { hp } from "@utils"
import { color, fontSize, spacing } from "@theme"

export default StyleSheet.create({
  button: {
    alignItems: "center",
    height: hp(65),
    justifyContent: "center",
    width: hp(88),
  },
  dividerLine: {
    backgroundColor: color.palette.lighterGrey,
    height: 100,
    marginTop: 14,
    width: 1.2,
  },
  homeIcon: {
    height: hp(25),
    width: hp(24),
  },
  mediaIcon: {
    height: hp(25),
    width: hp(19),
  },
  moodIcon: {
    height: hp(25),
    width: hp(22),
  },

  moodListContainer: {
    backgroundColor: color.palette.journalListPink,
    borderRadius: 20,
    flexDirection: "row",
    height: hp(110),
    marginVertical: spacing[2],
  },
  moodListDate: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  moodListEmotion: {
    alignItems: "center",
    display: "flex",
    flex: 3,
    justifyContent: "center",
  },
  moodListEmotionContainer: {
    alignContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: color.transparent,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    padding: spacing[0],
  },
  moodListText: {
    color: color.palette.journalListTextColor,
    fontSize: fontSize.h4,
  },
  moodListTextContainer: {
    flex: 2,
    justifyContent: "center",
    padding: spacing[4],
  },
  moodListTime: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
})
