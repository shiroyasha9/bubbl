import React from "react"
import { TouchableOpacity, View } from "react-native"
import { observer } from "mobx-react-lite"
import { useNavigation, useRoute } from "@react-navigation/native"
import { color, HomeIcon, MusicIcon, JournalIcon } from "@theme"
import { ROUTE_NAME } from "@constants"
import styles from "./bottom-navigation.styles"

/**
 * Bottom Navigation Component
 */
export const BottomNavigation = observer(function BottomNavigation() {
  const route = useRoute()
  const navigation = useNavigation()

  const navigationButtons = [
    {
      icon: (
        <HomeIcon
          fill={
            route.name === ROUTE_NAME.HOME
              ? color.palette.lighterBlue
              : color.palette.black
          }
          style={styles.homeIcon}
        />
      ),
      screenName: ROUTE_NAME.HOME,
    },
    {
      icon: (
        <MusicIcon
          fill={
            route.name === ROUTE_NAME.MEDIA ||
            route.name === ROUTE_NAME.MEDITATION ||
            route.name === ROUTE_NAME.MUSIC ||
            route.name === ROUTE_NAME.MUSIC_PLAYER
              ? color.palette.lighterBlue
              : color.palette.black
          }
          style={styles.mediaIcon}
        />
      ),
      screenName: ROUTE_NAME.MEDIA,
    },
    {
      icon: (
        <JournalIcon
          fill={
            route.name === ROUTE_NAME.JOURNAL ||
            route.name === ROUTE_NAME.PREJOURNAL
              ? color.palette.lighterBlue
              : color.palette.black
          }
          style={styles.journalIcon}
        />
      ),
      screenName: ROUTE_NAME.JOURNAL,
    },
  ]

  return (
    <View style={styles.navigationBar}>
      {navigationButtons.map((button) => {
        return (
          <View key={button.screenName}>
            <TouchableOpacity
              onPress={() => navigation.navigate(button.screenName as never)}
              style={styles.button}
            >
              {button.icon}
            </TouchableOpacity>
          </View>
        )
      })}
    </View>
  )
})
