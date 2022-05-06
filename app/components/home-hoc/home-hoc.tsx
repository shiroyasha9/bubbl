import React from "react"
import { Image, View } from "react-native"
import { observer } from "mobx-react-lite"
import { useStores } from "@models"
import { Text } from "../text/text"
import { BottomNavigation } from "../bottom-navigation/bottom-navigation"
import { HomeHocProps } from "./home-hoc.types"
import styles from "./home-hoc.styles"

/**
 * Higher Order Component for Home, Media and Journal
 */
export const HomeHoc = observer(function HomeHoc(props: HomeHocProps) {
  const { children, title, subtitle, testID } = props
  const {
    authStore: { authUser },
  } = useStores()

  return (
    <View testID={testID} style={styles.homeWrapper}>
      <View style={styles.headerContainer}>
        <View style={styles.headerText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Image source={{ uri: authUser.photoURL }} style={styles.profilePic} />
      </View>
      {children}
      <View style={styles.bottomNavigation}>
        <BottomNavigation />
      </View>
    </View>
  )
})
