import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, Image, TouchableOpacity } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

import { NavigatorParamList } from "@navigators"
import { Screen, Text } from "@components"
import { useStores } from "@models"
import { GOAL } from "@constants"
import styles from "./intro-screen.styles"

export const IntroScreen: FC<StackScreenProps<NavigatorParamList, "intro">> = observer(
  function IntroScreen({ navigation }) {
    const skipToOnboarding = () => navigation.navigate("onboarding")

    const {
      authStore: { updateUserGoal, userGoal },
    } = useStores()

    const handleUpdateUserGoal = (goalFromButton: number) => {
      updateUserGoal(goalFromButton)
    }

    return (
      <Screen style={styles.root} preset="scroll">
        <View style={styles.skip}>
          <TouchableOpacity onPress={skipToOnboarding}>
            <Text style={styles.skipText}>skip</Text>
          </TouchableOpacity>
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
          <Text style={styles.mainLine}>What are you looking to improve?{userGoal}</Text>
        </View>
        <View style={styles.buttonContainer}>
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
      </Screen>
    )
  },
)
