import { color, fontSize, spacing, textStyle } from "@themes";
import { hp, wp } from "@utils";
import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

export default StyleSheet.create({
  flatList: {
    flex: 1,
    flexDirection: "row",
  },
  flatListContainer: {
    height: "100%",
  },
  icon: {
    height: hp(200),
    width: wp(226),
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
    width,
  },
  subtitle: {
    color: color.peacock,
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
    color: color.peacock,
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
});
