import { StyleSheet } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp } from "@utils"

export default StyleSheet.create({
  ROOT: {
    backgroundColor: color.palette.snowWhite,
    flex: 1,
    justifyContent: "center",
  },
  activeDotStyle: {
    backgroundColor: color.palette.frenchViolet,
    height: hp(14),
    width: hp(14),
  },
  dot: {
    borderRadius: 10,
    height: hp(10),
    marginHorizontal: spacing[4],
    width: hp(10),
  },
  dotStyle: {
    backgroundColor: color.palette.lighterGrey,
  },
  googleIcon: {
    marginBottom: spacing[1],
    marginLeft: spacing[2],
  },
  paginationContainer: {
    alignContent: "center",
    flex: 0.01,
    justifyContent: "center",
    marginTop: spacing[8],
  },
  paginationDots: {
    alignItems: "center",
    flexDirection: "row",
    height: hp(16),
    justifyContent: "center",
    margin: spacing[4],
  },
  signInButton: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  signInButtonContainer: {
    alignSelf: "center",
    flex: 0.3,
    justifyContent: "center",
    paddingBottom: 10,
    paddingHorizontal: "10%",
  },
  signInButtonText: {
    ...textStyle.bold,
    color: color.palette.white,
    fontSize: fontSize.medium,
    textAlign: "center",
  },
})
