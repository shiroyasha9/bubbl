import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Image, TouchableOpacity, TextInput } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

import { NavigatorParamList } from "@navigators"
import { PrimaryButton, Screen, Text } from "@components"
import { useStores } from "@models"
import styles from "./intro-screen.styles"
import { typographyStyles } from "@styles"
import { color } from "@theme"

export const IntroScreen: FC<StackScreenProps<NavigatorParamList, "intro">> = observer(
  function IntroScreen({ navigation }) {
    const {
      userStore: { updateUserGoal, createUser },
    } = useStores()

    const [isFocused, setIsFocused] = useState(false)

    // TODO: use createUser here by asking user his name

    const handleUpdateUserGoal = (goalFromButton: number) => {
      updateUserGoal(goalFromButton)
      navigation.navigate("home")
    }

    return (
      <Screen style={styles.root} preset="scroll">
        <View style={styles.iconContainer}>
          <Text style={typographyStyles.title}>Hey</Text>
          <Image source={require("@assets/images/wave.png")} style={styles.icon} />
        </View>
        <Text style={typographyStyles.title}>Let's Begin.</Text>
        <Text style={typographyStyles.subtitle}>Let's Create your Bubbl</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Display Name</Text>
          <TextInput
            placeholder="John Doe"
            style={[styles.textInput, isFocused && styles.focusedTextInput]}
            maxLength={20}
            selectionColor={color.palette.frenchViolet}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <View style={styles.goalContainer}>
          <Text style={styles.goalSubtitleText}>What are your goals?🎯</Text>
          <View style={styles.goal}>
            <Text>😴 Sleep better</Text>
          </View>
          <View style={styles.goal}>
            <Text>😫 Manage stress and anxiety</Text>
          </View>
          <View style={styles.goal}>
            <Text>🤗 Relax and feel rested</Text>
          </View>
          <View style={styles.goal}>
            <Text>🥰 Self love</Text>
          </View>
        </View>
        <PrimaryButton text="Let's begin" style={styles.primaryButton} />

        {/* <TouchableOpacity
            onPress={() => handleUpdateUserGoal(0)}
            style={{
              ...styles.reasonBox,
              ...styles.goal1,
            }}
          >
            <Text style={styles.reasonBoxText}>Sleep better</Text>
          </TouchableOpacity> */}
      </Screen>
    )
  },
)
