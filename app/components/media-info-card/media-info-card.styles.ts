import { StyleSheet } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp, wp } from "@utils"

export default StyleSheet.create({
  card: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: spacing[2],
  },
  cardText: {
    borderLeftColor: color.palette.offWhite,
    borderLeftWidth: 2,
    margin: spacing[1],
    padding: spacing[1],
    width: wp(200),
  },
  cardTitle: {
    ...textStyle.semiBold,
    fontSize: fontSize.regular,
    marginBottom: spacing[2],
  },
  image: {
    borderColor: color.palette.mutedGrey,
    borderRadius: 15,
    borderWidth: 1,
    height: hp(70),
    width: wp(120),
  },
  mutedText: {
    ...textStyle.semiBold,
    color: color.palette.mutedGrey,
    fontSize: fontSize.tiny,
  },
})
