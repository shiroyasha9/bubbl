import { StyleSheet } from "react-native"
import { color, spacing, fontSize } from "@theme"
import { hp, wp } from "@utils"

export default StyleSheet.create({
  selectButton: {
    backgroundColor: color.transparent,
    height: hp(25),
    width: wp(120),
  },
  selectButtonText: {
    color: color.palette.frenchViolet,
    fontSize: fontSize.regular,
    textAlign: "left",
  },
  selectDropdown: {
    backgroundColor: color.palette.white,
    borderBottomLeftRadius: hp(20),
    borderBottomRightRadius: hp(20),
    borderColor: color.palette.lightGrey,
    borderRadius: hp(7),
    borderWidth: 1,
    minHeight: hp(180),
    padding: spacing[2],
  },
  selectedItemText: {
    color: color.palette.frenchViolet,
    fontSize: fontSize.regular,
  },
})
