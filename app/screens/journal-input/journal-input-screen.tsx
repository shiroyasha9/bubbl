import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextInput } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text, Button } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
// import { color } from "../../theme"

import styles from "./journal-input-screen.styles"

export const JournalInputScreen: FC<
  StackScreenProps<NavigatorParamList, "journalInput">
> = observer(function JournalInputScreen({ navigation }) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const {
    authStore: { updateTodaysJournal, todaysJournal },
  } = useStores()

  const handleUpdateTodaysJournal = (e: any) => {
    updateTodaysJournal(e.nativeEvent.text)
  }
  const saveAndGoHome = () => navigation.navigate("welcome")
  return (
    <Screen>
      <Text text="Today's Journal" style={styles.headerText} />
      <TextInput
        multiline
        numberOfLines={16}
        editable
        style={styles.journalTextInputBox}
        placeholder="What happened today?"
        // onChangeText={handleUpdateTodaysJournal}
        onChange={handleUpdateTodaysJournal}
      />
      <Button
        testID="next-screen-button"
        style={styles.continue}
        textStyle={styles.continueText}
        text={"Done"}
        onPress={saveAndGoHome}
        disabled={todaysJournal.trim() == ""}
      />
    </Screen>
  )
})
