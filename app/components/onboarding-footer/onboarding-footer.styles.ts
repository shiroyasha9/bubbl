import { StyleSheet } from "react-native"
import { color, spacing } from "@theme"
import { hp, wp } from "@utils"

export default StyleSheet.create({
  activeFooterIndicator: {
    backgroundColor: color.palette.frenchViolet,
    width: wp(20),
    height: hp(4),
  },
  footerButton: {
    width: wp(150),
  },
  footerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    height: hp(150),
    alignItems: "center",
  },
  footerIndicator: {
    backgroundColor: "grey",
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
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing[5],
    alignItems: "center",
  },
  skipButton: {
    backgroundColor: color.palette.transparent,
    width: wp(150),
    borderWidth: 2,
    borderColor: color.palette.frenchViolet,
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
