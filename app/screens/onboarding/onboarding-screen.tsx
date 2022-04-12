import React, { FC, useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  Dimensions,
  FlatList,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native"
import * as GoogleSignIn from "expo-google-sign-in"

import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { OnboardingFlatlist, PrimaryButton, Screen, Text } from "@components"
import { GoogleLogo } from "@theme"
import { useStores } from "@models"
import { GOOGLE_LOGIN_CANCELLED, NO_PLAY_SERVICES } from "@constants"

import { AppIntroSliderItem } from "./onboarding-screen.types"
import styles from "./onboarding-screen.styles"

const { OAUTH_CLIENT_ID, IS_OAUTH_ENABLED } = require("config/env")

const onboardingData: ReadonlyArray<AppIntroSliderItem> = [
  {
    title: "Hello",
    subtitle: "I am bubbl, your companion.",
    //  TODO: Replace this png with SVG
    icon: <Image source={require("@assets/images/normal.png")} />,
  },
  {
    title: "Physical Wellbeing",
    subtitle: "Reminding you of drinking enough water and stretching",
    icon: <Image source={require("@assets/images/water.png")} />,
  },
  {
    title: "Calming Media",
    subtitle: "White noise and meditation media to soothe you",
    icon: <Image source={require("@assets/images/music.png")} />,
  },
  {
    title: "Mood Tracker",
    subtitle: "Journals and mood tracker help you track your progress",
    icon: <Image source={require("@assets/images/mood.png")} />,
  },
  {
    title: "Helping you out is our goal",
    subtitle:
      "Just a quick login will get started with your wellbeing. And no, we won't save any data 😁",
    icon: <Image source={require("@assets/images/normal.png")} />,
  },
]

export const OnboardingScreen: FC<StackScreenProps<NavigatorParamList, "onboarding">> = observer(
  function OnboardingScreen({ navigation }) {
    const flatListRef: React.RefObject<FlatList<AppIntroSliderItem>> = useRef()
    const width = Dimensions.get("window").width
    const [activeIndex, setActiveIndex] = useState(0)

    const {
      authStore: { fetchOAuthUser, authUser },
    } = useStores()

    useEffect(() => {
      const init = async () => {
        // fetch the details from OAuth only if we dont have authUser saved in MobX
        if (!authUser && !authUser?.displayName) {
          if (IS_OAUTH_ENABLED) {
            await GoogleSignIn.initAsync({
              clientId: OAUTH_CLIENT_ID,
            })
          }
          await fetchOAuthUser()
        }
      }
      init()
    })

    // used by pagination dots to navigate
    const goToSlide = (slideNum: number) => () => {
      setActiveIndex(slideNum)
      flatListRef.current?.scrollToOffset({
        offset: slideNum * width,
      })
    }

    // the pagination dots
    const renderPaginationDots = () => {
      return (
        <View style={styles.paginationContainer}>
          <SafeAreaView>
            <View style={styles.paginationDots}>
              {onboardingData.length > 1 &&
                onboardingData.map((_, i) => (
                  <TouchableOpacity
                    hitSlop={{ left: 15, right: 15, top: 15, bottom: 15 }}
                    key={i}
                    style={[
                      styles.dot,
                      i === activeIndex ? styles.activeDotStyle : styles.dotStyle,
                    ]}
                    onPress={goToSlide(i)}
                  />
                ))}
            </View>
          </SafeAreaView>
        </View>
      )
    }

    const nextScreen = () => navigation.navigate("welcome")

    const handleSignIn = async () => {
      try {
        if (IS_OAUTH_ENABLED) {
          // check if play services exist
          await GoogleSignIn.askForPlayServicesAsync()
          const { type } = await GoogleSignIn.signInAsync()
          if (type === "success") {
            await fetchOAuthUser()
            nextScreen()
          } else {
            Alert.alert(
              GOOGLE_LOGIN_CANCELLED.title,
              GOOGLE_LOGIN_CANCELLED.body,
              [
                {
                  text: "Okay",
                  onPress: () => null,
                },
              ],
              { cancelable: true },
            )
          }
        } else {
          await fetchOAuthUser()
          nextScreen()
        }
      } catch ({ message }) {
        console.log(message)
        Alert.alert(
          NO_PLAY_SERVICES.title,
          NO_PLAY_SERVICES.body,
          [
            {
              text: "Okay",
              onPress: () => null,
            },
          ],
          { cancelable: true },
        )
      }
    }

    return (
      <Screen style={styles.ROOT} preset="scroll">
        {/* the flatlist with the icons and text */}
        <OnboardingFlatlist
          data={onboardingData}
          activeIndex={activeIndex}
          setActiveIndex={(index: number) => setActiveIndex(index)}
          flatListRef={flatListRef}
        />
        {/* the pagination dots */}
        {renderPaginationDots()}
        {/* sign in with google button */}
        <View style={styles.signInButtonContainer}>
          <PrimaryButton onPress={handleSignIn}>
            <View style={styles.signInButton}>
              <Text style={styles.signInButtonText}>Sign In With</Text>
              <GoogleLogo style={styles.googleIcon} />
            </View>
          </PrimaryButton>
        </View>
      </Screen>
    )
  },
)
