/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import {
  WelcomeScreen,
  OnboardingScreen,
  IntroScreen,
  HomeScreen,
  MediaScreen,
  JournalScreen,
  MeditationScreen,
  MusicScreen,
  PreJournalScreen,
  JournalInputScreen,
  MusicPlayerScreen,
} from "@screens"

import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { useStores } from "@models"
import { IVideoDetails } from "@types"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  welcome: undefined
  intro: undefined
  onboarding: undefined
  home: undefined
  media: undefined
  journal: undefined
  prejournal: { purpose: string; moodId?: number } | undefined
  meditation: { videoID: string } | undefined
  music: undefined
  journalInput: undefined
  musicPlayer: { video: IVideoDetails }
  // 🔥 Your screens go here
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  const {
    userStore: { user },
  } = useStores()

  const isFirstTime = () => !!user?.name

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
      initialRouteName={isFirstTime() ? "home" : "onboarding"}
    >
      <Stack.Screen name="onboarding" component={OnboardingScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="intro" component={IntroScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="media" component={MediaScreen} />
      <Stack.Screen name="journal" component={JournalScreen} />
      <Stack.Screen name="meditation" component={MeditationScreen} />
      <Stack.Screen name="music" component={MusicScreen} />
      <Stack.Screen name="prejournal" component={PreJournalScreen} />
      <Stack.Screen name="journalInput" component={JournalInputScreen} />
      <Stack.Screen
        name="musicPlayer"
        component={MusicPlayerScreen}
        options={{
          animation: "none",
        }}
      />
      {/** 🔥 Your screens go here */}
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
