import { StyleSheet } from "react-native"
import { color, spacing, fontSize } from "@theme"
import { hp } from "@utils"

export default StyleSheet.create({
  container: {
    marginHorizontal: spacing[2],
    marginTop: spacing[7],
  },
  emoji: {
    fontSize: fontSize.h2,
  },
  goalHeader: {
    alignItems: "center",
    flexDirection: "row",
  },
  moodCard: {
    alignItems: "center",
    backgroundColor: color.palette.nightSnow,
    borderRadius: 25,
    height: hp(100),
    justifyContent: "center",
    marginRight: spacing[4],
    width: hp(100),
  },
  moodList: {
    marginVertical: spacing[4],
  },
  mutedText: {
    color: color.palette.mutedGrey,
    fontSize: fontSize.regular,
  },
  primarySection: {
    marginTop: spacing[7],
  },
  secondarySection: {
    marginTop: spacing[8],
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: fontSize.regular,
  },
})
