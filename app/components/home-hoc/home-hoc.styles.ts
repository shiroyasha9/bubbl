import { StyleSheet } from "react-native"
import { spacing, fontSize, textStyle, color } from "@theme"
import { hp } from "@utils"

export default StyleSheet.create({
  alternateHeader: {
    alignItems: "center",
    flexDirection: "row",
  },
  alternateHeaderText: {
    ...textStyle.bold,
    flex: 1,
    textAlign: "center",
  },
  bottomNavigation: {
    alignSelf: "center",
    bottom: hp(20),
    position: "absolute",
    width: "100%",
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: spacing[1],
  },
  headerText: {
    justifyContent: "center",
    lineHeight: 2,
  },
  homeWrapper: {
    backgroundColor: color.palette.snowWhite,
    flex: 1,
    paddingHorizontal: spacing[4],
    paddingTop: hp(20),
    position: "relative",
  },
  profilePic: {
    borderRadius: hp(50),
    height: hp(45),
    marginBottom: spacing[3],
    width: hp(45),
  },
  subtitle: {
    ...textStyle.semiBold,
    fontSize: fontSize.h3,
  },
  title: {
    fontSize: fontSize.medium,
  },
})
