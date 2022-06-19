import { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, FlatList, View, SafeAreaView, TouchableOpacity, Image } from "react-native"

import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { OnboardingFlatlist, PrimaryButton, Screen, Text } from "@components"

import { AppIntroSliderItem } from "./onboarding-screen.types"
import styles from "./onboarding-screen.styles"
import { useStores } from "@models"

const onboardingData: ReadonlyArray<AppIntroSliderItem> = [
  {
    title: "Hello",
    subtitle: "I am bubbl, your companion.",
    //  TODO: Replace this png with SVG
    icon: <Image source={require("@assets/images/normal.png")} />,
  },
  {
    title: "Helping you out is our goal",
    subtitle: "Bubbl 🥰 privacy - all of your data stays with you. ",
    icon: <Image source={require("@assets/images/normal.png")} />,
  },
  {
    title: "Mood Tracker",
    subtitle: "Journals and mood tracker help you track your progress⌛",
    icon: <Image source={require("@assets/images/mood.png")} />,
  },
  {
    title: "Calming Media",
    subtitle: "White noise and meditation media to soothe you 😴",
    icon: <Image source={require("@assets/images/music.png")} />,
  },
  {
    title: "Physical Wellbeing",
    subtitle: "Reminding you of drinking enough water and stretching 💧",
    icon: <Image source={require("@assets/images/water.png")} />,
  },
]

export const OnboardingScreen: FC<StackScreenProps<NavigatorParamList, "onboarding">> = observer(
  function OnboardingScreen({ navigation }) {
    const flatListRef: React.RefObject<FlatList<AppIntroSliderItem>> = useRef()
    const width = Dimensions.get("window").width
    const [activeIndex, setActiveIndex] = useState(0)
    const {
      userStore: { updateUser },
    } = useStores()

    // TODO: Fix animation when navigating through the flatlist.

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

    const startButtonHandler = () => {
      updateUser()
      navigation.navigate("intro")
    }

    return (
      <Screen style={styles.ROOT} preset="scroll">
        <OnboardingFlatlist
          data={onboardingData}
          activeIndex={activeIndex}
          setActiveIndex={(index: number) => setActiveIndex(index)}
          flatListRef={flatListRef}
        />
        {renderPaginationDots()}
        <View style={styles.signInButtonContainer}>
          <PrimaryButton onPress={startButtonHandler}>
            <View style={styles.signInButton}>
              <Text style={styles.signInButtonText}>Start Your Journey</Text>
            </View>
          </PrimaryButton>
        </View>
      </Screen>
    )
  },
)
