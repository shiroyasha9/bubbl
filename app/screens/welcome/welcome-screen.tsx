import React, { FC } from "react"
import { View, SafeAreaView, Image } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"

import { Button, Screen, Text } from "@components"
import { color } from "@theme"
import { NavigatorParamList } from "@navigators"
import { useStores } from "@models"

import styles from "./welcome-screen.styles"

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("onboarding")
    const introScreen = () => navigation.navigate("intro")

    const {
      authStore: { authUser },
    } = useStores()

    return (
      <View testID="WelcomeScreen" style={styles.full}>
        <Screen style={styles.container} preset="scroll" backgroundColor={color.palette.snowWhite}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Hi, {authUser.firstName}</Text>
              <Image source={{ uri: authUser.photoURL }} style={styles.profilePic} />
            </View>

            <View style={styles.body}>
              <Text style={styles.detailsText}>Details from OAuth:</Text>
              <Text>Display Name: {authUser.displayName}</Text>
              <Text>First Name: {authUser.firstName}</Text>

              <Text>Last Name: {authUser.lastName}</Text>
              <Text>Email: {authUser.email}</Text>
            </View>
          </View>
        </Screen>
        <SafeAreaView style={styles.footer}>
          <View style={styles.footerContent}>
            <Button
              testID="next-screen-button"
              style={styles.continue}
              textStyle={styles.continueText}
              text="Intro Screen"
              onPress={introScreen}
            />
          </View>
        </SafeAreaView>

        <SafeAreaView style={styles.footer}>
          <View style={styles.footerContent}>
            <Button
              testID="next-screen-button"
              style={styles.continue}
              textStyle={styles.continueText}
              text="Back to Onboarding"
              onPress={nextScreen}
            />
          </View>
        </SafeAreaView>
      </View>
    )
  },
)
