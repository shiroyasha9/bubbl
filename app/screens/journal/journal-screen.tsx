import React, { FC } from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { ScrollView } from "react-native-gesture-handler"
import { StackScreenProps } from "@react-navigation/stack"

import { NavigatorParamList } from "@navigators"
import { HomeHoc, Screen, Text, JournalList, Button } from "@components"
import { useStores } from "@models"

import styles from "./journal-screen.styles"

export const JournalScreen: FC<StackScreenProps<NavigatorParamList, "journal">> = observer(
  function JournalScreen({ navigation }) {
    const goSomewhere = () => navigation.navigate("prejournal", { purpose: "journal" })
    const {
      authStore: { authUser, journals },
    } = useStores()
    return (
      <Screen>
        <HomeHoc
          testID=""
          title={`${authUser.firstName ? authUser.firstName + "'s" : "Your"} Journal 📝`}
          subtitle="Scribbl away!"
        >
          <View style={styles.container}>
            <Button
              text="Update Your Journal"
              style={styles.updateButton}
              textStyle={styles.updateButtonText}
              onPress={goSomewhere}
            />
            <ScrollView style={styles.scrollContainer}>
              {journals.length > 0 &&
                journals.map((journal) => <JournalList key={journal.jid} journal={journal} />)}
              {!journals.length && (
                <Text style={styles.noJournals}>Update your journal to get started! 😁</Text>
              )}
            </ScrollView>
          </View>
        </HomeHoc>
      </Screen>
    )
  },
)
