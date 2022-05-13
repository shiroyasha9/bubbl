import { StyleSheet } from "react-native"
import { color, spacing } from "@theme"
import { hp, wp } from "@utils"

export default StyleSheet.create({
  card: {
    backgroundColor: color.palette.nightSnow,
    borderColor: color.palette.mutedGrey,
    borderRadius: 15,
    borderWidth: 1,
    height: hp(125),
    marginRight: spacing[2],
    width: wp(200),
  },
  horizontalScrollContainer: {
    height: hp(130),
    marginTop: spacing[3],
    maxHeight: hp(130),
  },
  image: {
    borderRadius: 15,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
  },
})
