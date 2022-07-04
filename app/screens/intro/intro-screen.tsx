import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, Image, TouchableOpacity } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

import { NavigatorParamList } from "@navigators"
import { Screen, Text } from "@components"
import { useStores } from "@models"
import styles from "./intro-screen.styles"

export const IntroScreen: FC<StackScreenProps<NavigatorParamList, "intro">> =
  observer(function IntroScreen({ navigation }) {
    const {
      userStore: { updateUserGoal, createUser },
    } = useStores()

    // TODO: use createUser here by asking user his name

    const handleUpdateUserGoal = (goalFromButton: number) => {
      updateUserGoal(goalFromButton)
      navigation.navigate("home")
    }

    return (
      <Screen style={styles.root} preset="scroll">
        <View style={styles.mascotImageContainer}>
          <Image
            source={require("@assets/images/normal.png")}
            style={styles.mascotImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.mainLineContainer}>
          <Text style={styles.mainLine}>What are you looking to improve?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleUpdateUserGoal(0)}
            style={{
              ...styles.reasonBox,
              ...styles.goal1,
            }}
          >
            <Text style={styles.reasonBoxText}>Sleep better</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleUpdateUserGoal(1)}
            style={{
              ...styles.reasonBox,
              ...styles.goal2,
            }}
          >
            <Text style={styles.reasonBoxText}>Manage stress and anxiety</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleUpdateUserGoal(2)}
            style={{
              ...styles.reasonBox,
              ...styles.goal3,
            }}
          >
            <Text style={styles.reasonBoxText}>Relax and feel rested</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleUpdateUserGoal(3)}
            style={{
              ...styles.reasonBox,
              ...styles.goal4,
            }}
          >
            <Text style={styles.reasonBoxText}>Self love</Text>
          </TouchableOpacity>
        </View>
      </Screen>
    )
  })
