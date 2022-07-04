import { StyleSheet } from "react-native"
import { color, spacing } from "@theme"
import { hp, wp } from "@utils"

export default StyleSheet.create({
  activeFooterIndicator: {
    backgroundColor: color.palette.frenchViolet,
    height: hp(4),
    width: wp(20),
  },
  footerButton: {
    width: wp(150),
  },
  footerButtonContainer: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    height: hp(150),
    justifyContent: "space-between",
    width: "90%",
  },
  footerIndicator: {
    backgroundColor: color.palette.lightGrey,
    borderRadius: 6,
    height: hp(4),
    marginHorizontal: spacing[1],
    width: hp(4),
  },
  paginationContainer: {
    height: hp(50),
    justifyContent: "space-between",
    paddingHorizontal: spacing[4],
  },
  paginationItem: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing[5],
  },
  skipButton: {
    backgroundColor: color.palette.transparent,
    borderColor: color.palette.frenchViolet,
    borderWidth: 2,
    width: wp(150),
  },
  skipButtonText: {
    color: color.palette.fontDarkBlue,
  },
  startButtonContainer: {
    alignItems: "center",
    alignSelf: "center",
    height: hp(150),
    justifyContent: "center",
    width: "50%",
  },
})
