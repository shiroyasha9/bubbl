import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    // Montserrat: require("./Montserrat-Regular.ttf"),
    "Poppins-Regular": require("./Poppins-Regular.ttf"),
    "Poppins-Italic": require("./Poppins-Italic.ttf"),
    "Poppins-Bold": require("./Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./Poppins-SemiBold.ttf"),
  })
}
