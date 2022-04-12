import { StyleSheet } from "react-native"
import { color, spacing, fontSize, textStyle } from "@theme"
import { hp } from "@utils"

export default StyleSheet.create({
    root: {
        alignItems: "center",
        backgroundColor: color.palette.bgGrey,
        color: color.palette.white,
        flex: 1,
        justifyContent: "center",
        padding: spacing[7],
    },
    body: {
        marginTop: spacing[6],
    },
    container: {
        paddingHorizontal: spacing[5],
    },
    content: {
        marginVertical: spacing[6],
    },
    skip: {
        backgroundColor: color.palette.transparent,

        // paddingHorizontal: spacing[4],
        // paddingVertical: spacing[4],
    },
    skipText: {

        color: color.palette.lighterBlack,
        fontSize: fontSize.regular,

    },
    detailsText: {
        ...textStyle.semiBold,
    },
    footer: {
        backgroundColor: color.palette.snowWhite,
    },
    footerContent: {
        paddingHorizontal: spacing[2],
        paddingVertical: spacing[2],
        color: "#636363",
        position: "absolute",
        right: spacing[2],
        top: spacing[2]
    },
    full: { flex: 1 },
    header: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    profilePic: {
        borderRadius: hp(50),
        height: hp(40),
        width: hp(40),
    },
    title: {
        ...textStyle.bold,
        fontSize: fontSize.h3,
        lineHeight: 38,
    },
})
