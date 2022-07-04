import React from "react"
import SelectDropdown from "react-native-select-dropdown"
import { observer } from "mobx-react-lite"

import { DownArrow } from "@theme"
import { GOAL_TEXT } from "@constants"
import { useStores } from "@models"

import { Text } from "../text/text"
import styles from "./goal-dropdown.styles"

export const GoalDropdown = observer(function GoalDropdown() {
  const {
    userStore: { userGoal, updateUserGoal },
  } = useStores()

  const durationDisplayText = (userGoal: number) => GOAL_TEXT[userGoal]

  return (
    <SelectDropdown
      data={[1, 2, 3, 4]}
      buttonStyle={styles.selectButton}
      buttonTextStyle={styles.selectButtonText}
      dropdownStyle={styles.selectDropdown}
      defaultValueByIndex={userGoal}
      onSelect={(userGoal1) => updateUserGoal(userGoal1 - 1)}
      buttonTextAfterSelection={(userGoal1) =>
        durationDisplayText(userGoal1 - 1)
      }
      rowTextForSelection={(duration) => durationDisplayText(duration - 1)}
      renderDropdownIcon={() => <DownArrow />}
      renderCustomizedRowChild={(item) => (
        <Text
          style={
            item === durationDisplayText(userGoal)
              ? styles.selectedItemText
              : styles.selectButtonText
          }
        >
          {item}
        </Text>
      )}
    />
  )
})
