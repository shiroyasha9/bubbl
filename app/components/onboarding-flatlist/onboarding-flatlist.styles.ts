import { Dimensions, StyleSheet } from "react-native"
import { spacing } from "@theme"
import { hp, wp } from "@utils"

const width = Dimensions.get("window").width

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
    textAlign: "center",
  },
  subtitleContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: spacing[6],
    paddingHorizontal: spacing[8],
  },
  title: {
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
