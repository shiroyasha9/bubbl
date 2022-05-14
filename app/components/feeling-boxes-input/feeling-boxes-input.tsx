import * as React from "react"
import { StyleProp, View, ViewStyle, Dimensions } from "react-native"
import { observer } from "mobx-react-lite"
// import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { Button } from "../button/button"
import styles from "./feeling-boxes-input.styles"
// const DeviceWidth = Dimensions.get("window").width

export interface FeelingBoxesInputProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  onSave: (value: any) => void
  saveButtonText: string
  rest: any
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
    rest,
  } = props
  const updateCurrentFeeling = rest.updateCurrentFeeling
  return (
    <View style={styles.gridContainer}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View>
          <Button
            style={styles.feelingBox}
            onPress={() => {
              updateCurrentFeeling(0)
            }}
          >
            <Text style={styles.feelingBoxText}>happy</Text>
          </Button>
          <Button
            style={styles.feelingBox}
            onPress={() => {
              updateCurrentFeeling(3)
            }}
          >
            <Text style={styles.feelingBoxText}>happy</Text>
          </Button>
          <Button
            style={styles.feelingBox}
            onPress={() => {
              updateCurrentFeeling(6)
            }}
          >
            <Text style={styles.feelingBoxText}>happy</Text>
          </Button>
        </View>
        <View>
          <Button
            style={styles.feelingBox}
            onPress={() => {
              updateCurrentFeeling(1)
            }}
          >
            <Text style={styles.feelingBoxText}>happy</Text>
          </Button>
          <Button
            style={styles.feelingBox}
            onPress={() => {
              updateCurrentFeeling(4)
            }}
          >
            <Text style={styles.feelingBoxText}>happy</Text>
          </Button>
          <Button
            style={styles.feelingBox}
            onPress={() => {
              updateCurrentFeeling(7)
            }}
          >
            <Text style={styles.feelingBoxText}>happy</Text>
          </Button>
        </View>
        <View>
          <Button
            style={styles.feelingBox}
            onPress={() => {
              updateCurrentFeeling(2)
            }}
          >
            <Text style={styles.feelingBoxText}>happy</Text>
          </Button>
          <Button
            style={styles.feelingBox}
            onPress={() => {
              updateCurrentFeeling(5)
            }}
          >
            <Text style={styles.feelingBoxText}>happy</Text>
          </Button>
          <Button
            style={styles.feelingBox}
            onPress={() => {
              updateCurrentFeeling(8)
            }}
          >
            <Text style={styles.feelingBoxText}>happy</Text>
          </Button>
        </View>
      </View>
      <View style={styles.footerContent}>
        <Button
          testID="next-screen-button"
          style={styles.continue}
          textStyle={styles.continueText}
          text={saveButtonText}
          onPress={onSave}
        />
      </View>
    </View>
  )
})
