import { OnboardingFlatlist, OnboardingFooter, Screen } from "@components";
import { IS_EXPO_GO } from "@constants";
import { ANDROID_OAUTH_ID, EXPO_OAUTH_ID, IOS_OAUTH_ID } from "@env";
import { useAppDispatch } from "@hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { saveAuthInfo } from "@stores";
import {
  MoodMascot,
  MusicMascot,
  NormalMascot,
  RemindersMascot,
} from "@themes";
import { IOnboardingSlideData } from "@types";
import { fetchGoogleUserData } from "@utils";
import * as Google from "expo-auth-session/providers/google";
import { useCallback, useRef, useState } from "react";
import { Alert, Dimensions, FlatList } from "react-native";
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
  const dispatch = useAppDispatch();

  const goToSlideHandler = (newSlideNumber = activeSlideIndex + 1) => {
    if (newSlideNumber < onboardingData.length) {
      flatListRef.current?.scrollToOffset({
        offset: newSlideNumber * width,
      });
      setActiveSlideIndex(newSlideNumber);
    }
  };

  const [_, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_OAUTH_ID,
    iosClientId: IOS_OAUTH_ID,
    expoClientId: EXPO_OAUTH_ID,
  });

  const startButtonHandler = () => {
    promptAsync({ useProxy: IS_EXPO_GO, showInRecents: true });
  };

  useFocusEffect(
    useCallback(() => {
      const persistAuth = async () => {
        if (response && response.type === "success") {
          await AsyncStorage.setItem(
            "auth",
            JSON.stringify(response.authentication),
          );

          const userData = await fetchGoogleUserData(
            response.authentication?.accessToken!,
          );

          dispatch(
            saveAuthInfo({
              userInfo: userData,
              auth: response.authentication!,
            }),
          );
          navigation.navigate("Home");
        } else {
          Alert.alert("Error", "Something went wrong. Please try again later.");
        }
      };
      persistAuth();
    }, [response]),
  );

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
