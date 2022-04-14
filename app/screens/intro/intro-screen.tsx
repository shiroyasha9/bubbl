import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import {
  // ViewStyle,
  View,
  Image,
  TouchableOpacity,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { GOAL } from "@constants"
import // color,

//  spacing
"../../theme"
import styles from "./intro-screen.styles"

export const IntroScreen: FC<StackScreenProps<NavigatorParamList, "intro">> = observer(
  function IntroScreen({ navigation }) {
    const skipToOnboarding = () => navigation.navigate("welcome")
    const {
      authStore: { updateUserGoal, userGoal },
    } = useStores()
    const handleUpdateUserGoal = (goalFromButton: number) => {
      updateUserGoal(goalFromButton)
    }
    return (
      <Screen style={styles.root} preset="scroll">
        <View style={styles.skip}>
          <Button
            testID="skip-screen-button"
            style={styles.skip}
            textStyle={styles.skipText}
            text="skip"
            onPress={skipToOnboarding}
          />
        </View>

        <View style={styles.mascotImageContainer}>
          <Text style={styles.mainLine}>User Goal is {GOAL[userGoal]}</Text>

          <Image
            source={require("@assets/images/normal.png")}
            style={styles.mascotImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.mainLineContainer}>
          <Text style={styles.mainLine}>What are you looking to improve? {userGoal}</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => handleUpdateUserGoal(0)}
            style={{
              ...styles.reasonBox,
              backgroundColor: "#EDD0FF",
            }}
          >
            <Text style={styles.reasonBoxText}>Sleep better</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleUpdateUserGoal(1)}
            style={{
              ...styles.reasonBox,
              backgroundColor: "#F4E1FF",
            }}
          >
            <Text style={styles.reasonBoxText}>Manage stress and anxiety</Text>
          </TouchableOpacity>
          {/* </View> */}

          <TouchableOpacity
            onPress={() => handleUpdateUserGoal(2)}
            style={{
              ...styles.reasonBox,
              backgroundColor: "#FFD9FF",
            }}
          >
            <Text style={styles.reasonBoxText}>Relax and feel rested</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleUpdateUserGoal(3)}
            style={{
              ...styles.reasonBox,
              backgroundColor: "#FFCEFF",
            }}
          >
            <Text style={styles.reasonBoxText}>Self love</Text>
          </TouchableOpacity>
        </View>
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
      </Screen>
    )
  },
)
