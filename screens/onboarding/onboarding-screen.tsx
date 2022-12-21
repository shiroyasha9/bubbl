import { OnboardingFlatlist, OnboardingFooter, Screen } from "@components";
import {
  MoodMascot,
  MusicMascot,
  NormalMascot,
  RemindersMascot,
} from "@themes";
import { IOnboardingSlideData } from "@types";
import { useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import { OnboardingScreenProps } from "./onboarding-screen.types";

const onboardingData: ReadonlyArray<IOnboardingSlideData> = [
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
    subtitle: "Bubbl 🥰 privacy - all of your data is end to end encrypted 🔒 ",
    Icon: NormalMascot,
  },
];

export const Onboarding: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const flatListRef: React.RefObject<FlatList<IOnboardingSlideData>> =
    useRef(null);
  const width = Dimensions.get("window").width;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const goToSlideHandler = (newSlideNumber = activeSlideIndex + 1) => {
    if (newSlideNumber < onboardingData.length) {
      flatListRef.current?.scrollToOffset({
        offset: newSlideNumber * width,
      });
      setActiveSlideIndex(newSlideNumber);
    }
  };

  const startButtonHandler = () => {
    navigation.navigate("Home");
  };
  return (
    <Screen style={{ justifyContent: "center" }}>
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
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
  },
});
