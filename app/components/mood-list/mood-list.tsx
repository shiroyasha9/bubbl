import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import styles from "./mood-list.styles"
import { moods } from "@constants"
import { formatAMPM } from "@utils"
export interface MoodListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  mood: {
    date: Date | null
    emotionNumber: number | null
  }
}

/**
 * Describe your component here
 */
export const MoodList = observer(function MoodList(props: MoodListProps) {
  const { mood } = props

  return (
    <View style={styles.moodListContainer}>
      <View style={styles.moodListTextContainer}>
        <Text style={styles.moodListText} numberOfLines={3}>
          {moods[mood.emotionNumber].text}
        </Text>
      </View>
      <View style={styles.dividerLine}></View>
      <View style={styles.moodListEmotionContainer}>
        <View style={styles.moodListEmotion}>
          <Text style={{ fontSize: 16 * 2 }}>{moods[mood.emotionNumber].emoji}</Text>
        </View>
        <View style={styles.moodListDate}>
          <Text>{mood.date?.toLocaleDateString("en-gb")}</Text>
        </View>
        <View style={styles.moodListTime}>
          <Text>{formatAMPM(new Date(mood.date))}</Text>
        </View>
      </View>
    </View>
  )
})
