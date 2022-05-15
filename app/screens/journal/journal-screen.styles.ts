import { StyleSheet, Dimensions } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"

const height = Dimensions.get("screen").height

export default StyleSheet.create({
  container: {
    marginTop: spacing[5],
  },
  noJournals: {
    ...textStyle.semiBold,
    color: color.palette.fontDarkBlue,
    fontSize: fontSize.h1,
    textAlign: "center",
  },
  scrollContainer: {
    display: "flex",
    marginTop: spacing[3],
    maxHeight: height - 350,
  },
  updateButton: {
    backgroundColor: color.palette.frenchViolet,
    borderRadius: 20,
    fontSize: fontSize.h3,
    marginVertical: spacing[3],
  },
  updateButtonText: {
    ...textStyle.semiBold,
    color: color.palette.white,
    fontSize: fontSize.h3,
  },
})
