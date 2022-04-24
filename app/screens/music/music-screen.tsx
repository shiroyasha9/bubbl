import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import styles from "./music-screen.styles"
import { View } from "react-native"

export const MusicScreen: FC<StackScreenProps<NavigatorParamList, "music">> = observer(
  function MusicScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={styles.ROOT} preset="scroll">
        <View style={styles.header}>
          <Text style={styles.headerText}>Music</Text>
        </View>
      </Screen>
    )
  },
)
