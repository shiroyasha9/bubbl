import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

import { moods } from "@constants"
import { formatAMPM } from "@utils"
import { Text } from "../text/text"

import styles from "./journal-list.styles"
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

export const JournalList = observer(function JournalList(
  props: JournalListProps,
) {
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
            {moods.filter((el) => el.id === journal.emotionNumber)[0]?.emoji}
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
