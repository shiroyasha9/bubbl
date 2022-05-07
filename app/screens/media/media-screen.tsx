import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { HomeHoc, Screen, Button } from "@components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { View, SafeAreaView } from "react-native"
import { color } from "../../theme"
import { useStores } from "@models"
import styles from "./media-screen.styles"

export const MediaScreen: FC<StackScreenProps<NavigatorParamList, "media">> = observer(
  function MediaScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    const showMusicScreen = () => navigation.navigate("music")
    const {
      authStore: { authUser },
    } = useStores()
    return (
      <Screen backgroundColor={color.palette.snowWhite}>
        <HomeHoc testID="" title={`Hello, ${authUser.firstName}`} subtitle="Media">
          <SafeAreaView style={styles.footer}>
            <View style={styles.footerContent}>
              <Button
                testID="next-screen-button"
                style={styles.continue}
                textStyle={styles.continueText}
                text="Music Player Screen"
                onPress={showMusicScreen}
              />
            </View>
          </SafeAreaView>
          <SafeAreaView style={styles.footer}>
            <View style={styles.footerContent}>
              <Button
                testID="next-screen-button"
                style={styles.continue}
                textStyle={styles.continueText}
                text="Another button for use"
                onPress={showMusicScreen}
              />
            </View>
          </SafeAreaView>
        </HomeHoc>
      </Screen>
    )
  },
)
