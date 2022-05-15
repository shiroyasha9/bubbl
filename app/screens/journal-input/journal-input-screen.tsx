import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, View, TouchableOpacity } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { Screen, Text, Button } from "@components"
import { useStores } from "@models"
import { BackArrow } from "@theme"

import styles from "./journal-input-screen.styles"

export const JournalInputScreen: FC<
  StackScreenProps<NavigatorParamList, "journalInput">
> = observer(function JournalInputScreen({ navigation }) {
  const {
    authStore: { updateTodaysJournal, todaysJournal, updateJournal },
  } = useStores()

  const handleUpdateTodaysJournal = (e: any) => {
    updateTodaysJournal(e.nativeEvent.text)
  }
  const saveAndGo = () => {
    updateJournal()
    navigation.navigate("journal")
  }

  const goBack = () => navigation.goBack()

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.alternateHeader}>
          <TouchableOpacity onPress={goBack}>
            <BackArrow />
          </TouchableOpacity>
          <Text style={styles.alternateHeaderText}>{"Today's Journal"}</Text>
        </View>
        <TextInput
          multiline
          numberOfLines={16}
          editable
          style={styles.journalTextInputBox}
          placeholder="What happened today?"
          onChange={handleUpdateTodaysJournal}
        />
        <Button
          testID="next-screen-button"
          style={styles.continue}
          textStyle={styles.continueText}
          text={"Done"}
          onPress={saveAndGo}
          disabled={todaysJournal.trim() === ""}
        />
      </View>
    </Screen>
  )
})
