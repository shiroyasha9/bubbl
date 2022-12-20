import { color, fontSize, spacing, textStyle } from "@themes";
import { hp, wp } from "@utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: color.frenchViolet,
    borderRadius: hp(12),
    justifyContent: "center",
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[3],
    width: wp(200),
  },
  text: {
    ...textStyle.bold,
    color: color.white,
    fontSize: fontSize.medium,
    textAlign: "center",
  },
});
