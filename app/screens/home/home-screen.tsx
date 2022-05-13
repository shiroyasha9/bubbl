import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { GoalDropdown, HomeHoc, Screen, Text } from "@components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "@theme"
import { useStores } from "@models"
import styles from "./home-screen.styles"
import { FlatList, TouchableOpacity, View } from "react-native"
import { MOOD_COLOR } from "@constants"

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const {
      authStore: { authUser },
    } = useStores()

    const moods = [
      { emoji: "😁", text: "happy" },
      { emoji: "😍", text: "excited" },
      { emoji: "☹️", text: "sad" },
      { emoji: "😁", text: "happy" },
      { emoji: "😁", text: "happy" },
    ]

    const _renderItem = ({ item }: { item: { emoji: string; text: string } }) => {
      return (
        <TouchableOpacity onPress={() => console.log("got clicked")}>
          <View style={{ ...styles.moodCard, backgroundColor: MOOD_COLOR[item.text] }}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text>{item.text}</Text>
          </View>
        </TouchableOpacity>
      )
    }

    return (
      <Screen backgroundColor={color.palette.snowWhite}>
        <HomeHoc testID="" title={`Hello, ${authUser.firstName} 👋`} subtitle="Welcome Back">
          <View style={styles.container}>
            <View style={styles.goalHeader}>
              <Text style={styles.text}>Goal For Today: </Text>
              <GoalDropdown />
            </View>
            <View style={styles.primarySection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.text}>How are you feeling?</Text>
                <TouchableOpacity>
                  <Text style={styles.mutedText}>See More</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={moods}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={_renderItem}
                keyExtractor={(_, index: number) => index.toString()}
                style={styles.moodList}
              />
            </View>
          </View>
        </HomeHoc>
      </Screen>
    )
  },
)
