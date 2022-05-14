import React, { FC } from "react"
import { observer } from "mobx-react-lite"
// import { ViewStyle, View, SafeAreaView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { HomeHoc, Screen, FeelingBoxesInput } from "@components"
import { useRoute } from "@react-navigation/native"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
// import styles from "./pre-journal-screen.styles"

export const PreJournalScreen: FC<StackScreenProps<NavigatorParamList, "prejournal">> = observer(
  function PreJournalScreen({ navigation }) {
    const { params }: any = useRoute()
    const {
      authStore: { updateMoodHistory },
    } = useStores()

    // const showMusicScreen = () => navigation.navigate("journal")
    // const gotoJournalInput = () => navigation.navigate("music")
    const gotoJournalInput = () => {
      updateMoodHistory()
      if (params?.purpose === "mood") navigation.navigate("home")
      else navigation.navigate("journalInput")
    }
    const {
      authStore: { authUser },
    } = useStores()
    return (
      <Screen backgroundColor={color.palette.snowWhite}>
        <HomeHoc testID="" title={`Hello, ${authUser.firstName}`} subtitle="Journal">
          <FeelingBoxesInput onSave={gotoJournalInput} saveButtonText="save" />
        </HomeHoc>
      </Screen>
    )
  },
)
