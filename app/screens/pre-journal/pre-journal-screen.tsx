import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, SafeAreaView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { HomeHoc, Screen, Button, Text, FeelingBoxesInput } from "@components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import styles from "./pre-journal-screen.styles"

export const PreJournalScreen: FC<StackScreenProps<NavigatorParamList, "prejournal">> = observer(
  function PreJournalScreen({ navigation }) {
    const {
      authStore: { updateCurrentFeeling, currentFeeling },
    } = useStores()

    const showMusicScreen = () => navigation.navigate("journal")
    // const gotoJournalInput = () => navigation.navigate("music")
    const gotoJournalInput = () => navigation.navigate("journalInput")
    const {
      authStore: { authUser },
    } = useStores()
    return (
      <Screen backgroundColor={color.palette.snowWhite}>
        <HomeHoc testID="" title={`Hello, ${authUser.firstName}`} subtitle="Journal">
          <Text>{currentFeeling}</Text>
          <FeelingBoxesInput
            onSave={gotoJournalInput}
            saveButtonText="save this"
            rest={{ updateCurrentFeeling }}
          />
        </HomeHoc>
      </Screen>
    )
  },
)
