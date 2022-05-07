import React, { FC } from "react"
import { View, SafeAreaView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"

import { Button, HomeHoc, Screen, Text } from "@components"
import { color } from "@theme"
import { NavigatorParamList } from "@navigators"
import { useStores } from "@models"

import styles from "./welcome-screen.styles"

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("onboarding")
    const introScreen = () => navigation.navigate("intro")
    // const musicScreen = () => navigation.navigate("music")
    const homeScreen = () => navigation.navigate("home")
    const musicScreen = () => navigation.navigate("music")

    const {
      authStore: { authUser },
    } = useStores()

    return (
      <Screen backgroundColor={color.palette.snowWhite}>
        <HomeHoc testID="" title={`Hello, ${authUser.firstName}`} subtitle="Welcome Back">
          <View style={styles.content}>
            <View style={styles.body}>
              <Text style={styles.detailsText}>Details from OAuth:</Text>
              <Text>Display Name: {authUser.displayName}</Text>
              <Text>First Name: {authUser.firstName}</Text>

              <Text>Last Name: {authUser.lastName}</Text>
              <Text>Email: {authUser.email}</Text>
            </View>
          </View>

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
        </HomeHoc >
      </Screen>
    )
  },
)
