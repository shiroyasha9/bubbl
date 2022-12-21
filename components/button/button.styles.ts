import { color, fontSize, spacing, textStyle } from "@themes";
import { hp, wp } from "@utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderRadius: hp(12),
    justifyContent: "center",
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[3],
    width: wp(200),
  },
  text: {
    ...textStyle.bold,
    fontSize: fontSize.medium,
    textAlign: "center",
  },
  baseContainer: {
    backgroundColor: color.frenchViolet,
  },
  baseText: {
    color: color.white,
  },
  basePressed: {
    backgroundColor: color.darkFrenchViolet,
  },
  invertedContainer: {
    backgroundColor: color.white,
    borderColor: color.frenchViolet,
    borderWidth: 2,
  },
  invertedText: {
    color: color.fontDarkBlue,
  },
  invertedPressed: {
    opacity: 0.5,
    borderColor: color.darkFrenchViolet,
  },
  buttonInsideContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
