import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { HomeHoc, Screen, Text, JournalList, Button } from "@components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { useStores } from "@models"
import styles from "./journal-screen.styles"
import { ScrollView } from "react-native-gesture-handler"
export const JournalScreen: FC<StackScreenProps<NavigatorParamList, "journal">> = observer(
  function JournalScreen({ navigation }) {
    const goSomewhere = () => navigation.navigate("prejournal", { purpose: "journal" })
    const {
      authStore: { authUser, journals },
    } = useStores()
    return (
      <Screen backgroundColor={color.palette.snowWhite}>
        <HomeHoc
          testID=""
          title={`${authUser.firstName ? authUser.firstName + "'s" : "Your"} Journal`}
          subtitle="Scribbl away!"
        >
          <Text>Journal screen</Text>
          <Button
            text="Update Your Journal"
            style={styles.updateButton}
            textStyle={styles.updateButtonText}
            onPress={goSomewhere}
          />
          <ScrollView style={styles.scrollContainer}>
            {journals.length &&
              journals.map((journal) => {
                console.log(journal)
                return <JournalList key={journal.jid} journal={journal} />
              })}
            {!journals.length && (
              <Text style={styles.noJournals}>Update your journal to get started! 😁</Text>
            )}
          </ScrollView>
        </HomeHoc>
      </Screen>
    )
  },
)
