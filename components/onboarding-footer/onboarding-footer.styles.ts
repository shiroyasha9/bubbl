import { color, spacing } from "@themes";
import { hp, wp } from "@utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  activeFooterIndicator: {
    backgroundColor: color.frenchViolet,
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
    backgroundColor: color.lightGrey,
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
    backgroundColor: color.transparent,
    borderColor: color.frenchViolet,
    borderWidth: 2,
    width: wp(150),
  },
  skipButtonText: {
    color: color.fontDarkBlue,
  },
  startButtonContainer: {
    alignItems: "center",
    alignSelf: "center",
    height: hp(150),
    justifyContent: "center",
    width: "50%",
  },
});
