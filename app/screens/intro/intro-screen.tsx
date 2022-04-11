import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text, } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"

const ROOT: any = {
  alignItems: "center",
  backgroundColor: color.palette.bgGrey,
  color: color.palette.white,
  flex: 1,
  justifyContent: "center",
  padding: spacing[7],
}


export const IntroScreen: FC<StackScreenProps<NavigatorParamList, "intro">> = observer(function IntroScreen() {

  // const navigation = useNavigation();
  // console.log(navigation);
  return (
    <Screen style={ROOT} preset="scroll">
      {/* <Text preset="header" text="intro" /> */}
      {/* <Text>IntroScreen</Text> */}
      {/* @ts-ignore */}
      <View style={{ color: "#636363", position: "absolute", right: spacing[5], top: spacing[5] }}>
        <Text>skip</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#ccc", width: "100%" }}>
        {/* <Image source={bowserLogo} style={BOWSER} /> */}
      </View>

      <View style={{
        flexDirection: "row", flex: 0.5, justifyContent: "center", alignItems: "center",
      }}>
        <Text style={{ flex: 1, color: color.palette.fontDarkBlue, fontFamily: "Poppins-Bold", fontSize: 20, justifyContent: "center", }}>
          What are you looking to improve?
        </Text>
      </View >

      {/* @ts-ignore */}
      < View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap', width: "100%", gap: 16, color: color.palette.fontDarkBlue }}>
        <View style={{ flexBasis: 'calc(46%)', flex: 1, backgroundColor: "#EDD0FF", borderRadius: 12, height: "45%", padding: spacing[3], textAlign: "center", justifyContent: "center", fontSize: 16 }}>
          <Text>Sleep better</Text>
        </View>
        <View style={{ flexBasis: 'calc(46%)', flex: 1, backgroundColor: "#F4E1FF", borderRadius: 12, height: "45%", padding: spacing[3], textAlign: "center", justifyContent: "center", fontSize: 16 }}>
          <Text>Manage stress and anxiety</Text>
        </View>
        {/* </View> */}

        {/* <View style={{ flex: 1, backgroundColor: "blue", flexDirection: "row", flexWrap: 'wrap', width: "100%", gap: 10 }}> */}
        <View style={{ flexBasis: 'calc(46%)', flex: 1, backgroundColor: "#FFD9FF", borderRadius: 12, height: "45%", padding: spacing[3], textAlign: "center", justifyContent: "center", fontSize: 16 }}>
          <Text>Relax and feel rested</Text>
        </View>
        <View style={{ flexBasis: 'calc(46%)', flex: 1, backgroundColor: "#FFCEFF", borderRadius: 12, height: "45%", padding: spacing[3], textAlign: "center", justifyContent: "center", fontSize: 16 }}>
          <Text>Self love</Text>
        </View>
      </View >
      {/* <View style={{ flex: 1, backgroundColor: "blue", flexDirection: "row", flexWrap: 'wrap', }}>
        <View style={{ flex: 1, backgroundColor: "gray", borderRadius: 12, flexBasis: "calc(50% - 40px)" }}>
          <Text>1</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "gray", borderRadius: 12, flexBasis: "calc(50% - 40px)" }}>
          <Text>2</Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "blue", flexDirection: "row", flexWrap: 'wrap', }}>

        <View style={{ flex: 1, backgroundColor: "gray", borderRadius: 12, flexBasis: "calc(50% - 40px)" }}>
          <Text>3</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "gray", borderRadius: 12, flexBasis: "calc(50% - 40px)" }}>
          <Text>4</Text>
        </View>
      </View> */}
    </Screen >
  )
})
