import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import styles from "./journal-list.styles"

export interface JournalListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const JournalList = observer(function JournalList(props: JournalListProps) {
  let text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam! Suscipit vero deleniti voluptatem, fugiat culpa dignissimos voluptates possimus commodi quas expedita necessitatibus dolor placeat officiis vel? Deleniti, adipisci explicabo!"

  return (
    <View style={styles.journalListContainer}>
      <View style={styles.journalListTextContainer}>
        <Text style={styles.journalListText} numberOfLines={3}>
          {text}
        </Text>
      </View>
      <View style={styles.dividerLine}></View>
      <View style={styles.journalListEmotionContainer}>
        <View style={styles.journalListEmotion}>
          <Text style={{ fontSize: 16 * 2 }}>😊</Text>
        </View>
        <View style={styles.journalListDate}>
          <Text>28 Feb 2022</Text>
        </View>
        <View style={styles.journalListTime}>
          <Text>11:45 pm</Text>
        </View>
      </View>
    </View>
  )
})
