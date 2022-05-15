import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
// import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { Button } from "../button/button"
import styles from "./feeling-boxes-input.styles"
import { useStores } from "../../models"
// const DeviceWidth = Dimensions.get("window").width
import { MOOD_COLOR, moods } from "@constants"
import { color } from "@theme"
export interface FeelingBoxesInputProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  onSave: () => void
  saveButtonText: string
  rest?: any
}

/**
 * Describe your component here
 */
export const FeelingBoxesInput = observer(function FeelingBoxesInput(
  props: FeelingBoxesInputProps,
) {
  const {
    //  style: comp_styles,
    saveButtonText,
    onSave,
  } = props
  const {
    authStore: { updateCurrentFeeling, currentFeeling },
  } = useStores()
  return (
    <View style={styles.gridContainer}>
      <View style={styles.moodRow}>
        {[0, 1, 2].map((i: number) => {
          return (
            <View key={i}>
              <Button
                style={{
                  ...styles.feelingBox,
                  backgroundColor: MOOD_COLOR[moods[i].text],
                  borderColor:
                    i === currentFeeling ? color.palette.fontDarkBlue : color.palette.transparent,
                }}
                onPress={() => {
                  updateCurrentFeeling(i)
                }}
              >
                <Text style={styles.feelingBoxEmoji}>{moods[i].emoji}</Text>
                <Text style={styles.feelingBoxText}>{moods[i].text}</Text>
              </Button>
              <Button
                style={{
                  ...styles.feelingBox,
                  backgroundColor: MOOD_COLOR[moods[i + 3].text],
                  borderColor:
                    i + 3 === currentFeeling
                      ? color.palette.fontDarkBlue
                      : color.palette.transparent,
                }}
                onPress={() => {
                  updateCurrentFeeling(i + 3)
                }}
              >
                <Text style={styles.feelingBoxEmoji}>{moods[i + 3].emoji}</Text>
                <Text style={styles.feelingBoxText}>{moods[i + 3].text}</Text>
              </Button>
              <Button
                style={{
                  ...styles.feelingBox,
                  backgroundColor: MOOD_COLOR[moods[i + 6].text],
                  borderColor:
                    i + 6 === currentFeeling
                      ? color.palette.fontDarkBlue
                      : color.palette.transparent,
                }}
                onPress={() => {
                  updateCurrentFeeling(i + 6)
                }}
              >
                <Text style={styles.feelingBoxEmoji}>{moods[i + 6].emoji}</Text>
                <Text style={styles.feelingBoxText}>{moods[i + 6].text}</Text>
              </Button>
            </View>
          )
        })}
      </View>
      <View style={styles.footerContent}>
        <Button
          style={styles.continue}
          textStyle={styles.continueText}
          text={saveButtonText}
          onPress={onSave}
        />
      </View>
    </View>
  )
})
