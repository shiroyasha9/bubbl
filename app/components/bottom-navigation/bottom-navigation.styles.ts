import { StyleSheet } from "react-native"
import { hp } from "@utils"
import { color } from "@theme"

export default StyleSheet.create({
  button: {
    alignItems: "center",
    height: hp(65),
    justifyContent: "center",
    width: hp(88),
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
  navigationBar: {
    alignSelf: "center",
    backgroundColor: color.palette.cottonWhite,
    borderRadius: 30,
    elevation: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: color.palette.transparentBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    width: "92.5%",
  },
})
