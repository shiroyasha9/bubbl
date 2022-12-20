import { fontSize, spacing, textStyle } from "@themes";
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
});
