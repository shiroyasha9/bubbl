import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import styles from "./journal-list.styles"
import { moods } from "@constants"
export interface JournalListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  journal: {
    text: string | null
    mood?: string | null
    date: Date | null
    emotionNumber: number | null
  }
}

/**
 * Describe your component here
 */
const formatAMPM = (date) => {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let ampm = hours >= 12 ? "pm" : "am"
  hours = hours % 12
  hours = hours ? hours : 12
  minutes = minutes.toString().padStart(2, "0")
  let strTime = hours + ":" + minutes + " " + ampm
  return strTime
}

export const JournalList = observer(function JournalList(props: JournalListProps) {
  const { journal } = props
  return (
    <View style={styles.journalListContainer}>
      <View style={styles.journalListTextContainer}>
        <Text style={styles.journalListText} numberOfLines={3}>
          {journal.text}
        </Text>
      </View>
      <View style={styles.dividerLine}></View>
      <View style={styles.journalListEmotionContainer}>
        <View style={styles.journalListEmotion}>
          <Text style={{ fontSize: 16 * 2 }}>
            {moods.filter((el) => el.id == journal.emotionNumber)[0]?.emoji}
          </Text>
        </View>
        <View style={styles.journalListDate}>
          <Text>{journal.date?.toLocaleDateString("en-gb")}</Text>
        </View>
        <View style={styles.journalListTime}>
          <Text>{formatAMPM(new Date(journal.date))}</Text>
        </View>
      </View>
    </View>
  )
})
