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
    width: 1.2,
    height: 100,
    marginTop: 14,
    backgroundColor: " 1px solid rgba(179, 179, 179, 0.3)",
  },
  homeIcon: {
    height: hp(25),
    width: hp(24),
  },
  journalIcon: {
    height: hp(25),
    width: hp(22),
  },
  mediaIcon: {
    height: hp(25),
    width: hp(19),
  },
  journalListContainer: {
    backgroundColor: color.palette.journalListPink,
    flexDirection: "row",
    marginVertical: spacing[2],
    borderRadius: 20,
    height: 128,
  },
  journalListEmotionContainer: {
    backgroundColor: color.transparent,
    flex: 1,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    aspectRatio: 1,
    padding: spacing[0],
  },
  journalListEmotion: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
  },
  journalListDate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  journalListTime: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  journalListTextContainer: {
    flex: 2,
    padding: spacing[4],
  },
  journalListText: {
    color: color.palette.journalListTextColor,
    fontSize: fontSize.h3,
  },
})
