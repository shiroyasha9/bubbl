import React, { FC, useState } from "react"
import { View, Dimensions, FlatList } from "react-native"
import { observer } from "mobx-react-lite"
import { PieChart } from "react-native-chart-kit"
import { StackScreenProps } from "@react-navigation/stack"
import { RouteProp, useRoute } from "@react-navigation/native"

import { NavigatorParamList } from "@navigators"
import { useStores } from "@models"
import { HomeHoc, Screen, FeelingBoxesInput, Text, MoodList } from "@components"
import { moods, MOOD_COLOR } from "@constants"
import { hp } from "@utils"

import styles from "./pre-journal-screen.styles"

export const PreJournalScreen: FC<StackScreenProps<NavigatorParamList, "prejournal">> = observer(
  function PreJournalScreen({ navigation }) {
    const route: RouteProp<{ params: { purpose: "mood" | "journal" } }, "params"> = useRoute()

    const {
      authStore: { updateMoodHistory, moodHistory },
    } = useStores()

    const [isMoodSaved, setIsMoodSaved] = useState<boolean>(false)

    const title = route.params?.purpose === "mood" ? "Track Your Mood" : "Add Mood to Journal"
    const buttonText = route.params?.purpose === "mood" ? "Save" : "Continue"

    const gotoJournalInput = () => {
      updateMoodHistory()
      if (route.params?.purpose === "mood") {
        setIsMoodSaved(true)
      } else navigation.navigate("journalInput")
    }

    const getMoodData = () => {
      const moodObject: { [key: number]: number } = {}
      for (const mood of moodHistory) {
        moodObject[mood.emotionNumber] = (moodObject[mood.emotionNumber] || 0) + 1
      }
      const moodData = Object.entries(moodObject).map((mood) => {
        return {
          name: `${moods[mood[0]].emoji}`,
          frequency: mood[1],
          color: MOOD_COLOR[moods[mood[0]].text],
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        }
      })
      return moodData
    }

    const screenWidth = Dimensions.get("window").width

    const chartConfig = {
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    }

    const _renderMoodList = ({ item }) => {
      return <MoodList key={item.mid} mood={item} />
    }

    return (
      <Screen>
        <HomeHoc title={title} subtitle="Journal" showAlternateHeader>
          <View style={styles.container}>
            {!isMoodSaved && (
              <View style={route.params?.purpose !== "mood" ? styles.content : null}>
                <FeelingBoxesInput onSave={gotoJournalInput} saveButtonText={buttonText} />
              </View>
            )}

            {route.params?.purpose === "mood" && (
              <View>
                <View>
                  <Text>Your Mood Data:</Text>
                  <PieChart
                    data={getMoodData()}
                    width={screenWidth}
                    height={hp(190)}
                    chartConfig={chartConfig}
                    accessor={"frequency"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                  />
                </View>
                {isMoodSaved && (
                  <>
                    <Text>Past Moods:</Text>
                    <View style={styles.moodHistory}>
                      <FlatList
                        data={moodHistory}
                        renderItem={_renderMoodList}
                        keyExtractor={(item) => item.mid}
                      />
                    </View>
                  </>
                )}
              </View>
            )}
          </View>
        </HomeHoc>
      </Screen>
    )
  },
)
