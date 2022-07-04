import React, { FC, useRef, useState } from "react"
import { Dimensions, FlatList } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"

import { OnboardingFlatlist, OnboardingFooter, Screen } from "@components"
import { NormalMascot, MoodMascot, MusicMascot, RemindersMascot } from "@theme"
import { NavigatorParamList } from "@navigators"

import styles from "./onboarding-screen.styles"
import { ISlideData } from "./onboarding-screen.types"

const onboardingData: ReadonlyArray<ISlideData> = [
  {
    title: "Hello",
    subtitle: "I am bubbl, your virtual companion.",
    Icon: NormalMascot,
  },
  {
    title: "Track Your Day",
    subtitle: "Journals and mood tracker to track your day ⌛ ",
    Icon: MoodMascot,
  },
  {
    title: "Relax",
    subtitle: "Calm music and meditation media to soothe you 😴",
    Icon: MusicMascot,
  },
  {
    title: "Be Physically Fit",
    subtitle: "Get reminders to drink enough water, stretch and more 💧",
    Icon: RemindersMascot,
  },
  {
    title: "Helping you out is my goal",
    subtitle: "Bubbl 🥰 privacy - all of your data stays with you. ",
    Icon: NormalMascot,
  },
]

export const OnboardingScreen: FC<
  StackScreenProps<NavigatorParamList, "onboarding">
> = observer(function OnboardingScreen({ navigation }) {
  const flatListRef: React.RefObject<FlatList<ISlideData>> = useRef()
  const width = Dimensions.get("window").width
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const goToSlideHandler = (newSlideNumber = activeSlideIndex + 1) => {
    if (newSlideNumber < onboardingData.length) {
      flatListRef.current?.scrollToOffset({
        offset: newSlideNumber * width,
      })
      setActiveSlideIndex(newSlideNumber)
    }
  }

  const startButtonHandler = () => {
    navigation.navigate("intro")
  }

  return (
    <Screen style={styles.root} preset="scroll">
      <OnboardingFlatlist
        data={onboardingData}
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={(index: number) => setActiveSlideIndex(index)}
        flatListRef={flatListRef}
      />
      <OnboardingFooter
        onGoToSlide={goToSlideHandler}
        activeSlideIndex={activeSlideIndex}
        numberOfSlides={onboardingData.length}
        onStart={startButtonHandler}
      />
    </Screen>
  )
})
