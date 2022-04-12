import { Dimensions, StyleSheet } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp, wp } from "@utils"

const width = Dimensions.get("window").width

export default StyleSheet.create({
  flatList: {
    flex: 1,
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: spacing[8],
    minHeight: hp(200),
  },
  slide: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  slideContainer: {
    flex: 1,
    marginTop: spacing[8],
    width,
  },
  subtitle: {
    color: color.palette.peacock,
    flex: 1,
    flexWrap: "wrap",
    fontSize: fontSize.regular,
    textAlign: "center",
  },
  subtitleContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: spacing[6],
    paddingHorizontal: spacing[8],
  },
  title: {
    ...textStyle.semiBold,
    color: color.palette.peacock,
    flexWrap: "wrap",
    fontSize: fontSize.h2,
    textAlign: "center",
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: spacing[4],
    paddingHorizontal: wp(40),
    paddingTop: "10%",
  },
})
