import { StyleSheet } from "react-native"
import { color, spacing, fontSize } from "@theme"
// import { hp, wp } from "@utils"

export default StyleSheet.create({
  container: {
    marginHorizontal: spacing[3],
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
