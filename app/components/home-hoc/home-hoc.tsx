import React from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { BackArrow } from "@theme"
import { useStores } from "@models"
import { Text } from "../text/text"
import { BottomNavigation } from "../bottom-navigation/bottom-navigation"
import { HomeHocProps } from "./home-hoc.types"
import styles from "./home-hoc.styles"
/**
 * Higher Order Component for Home, Media and Journal
 */
export const HomeHoc = observer(function HomeHoc(props: HomeHocProps) {
  const { children, title, subtitle, showAlternateHeader } = props
  const {
    authStore: { authUser },
  } = useStores()
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  return (
    <View style={styles.homeWrapper}>
      {showAlternateHeader ? (
        <View style={styles.alternateHeader}>
          <TouchableOpacity onPress={goBack}>
            <BackArrow />
          </TouchableOpacity>
          <Text style={styles.alternateHeaderText}>{title}</Text>
        </View>
      ) : (
        <View style={styles.headerContainer}>
          <View style={styles.headerText}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <Image source={{ uri: authUser.photoURL }} style={styles.profilePic} />
        </View>
      )}
      {children}
      <View style={styles.bottomNavigation}>
        <BottomNavigation />
      </View>
    </View>
  )
})
