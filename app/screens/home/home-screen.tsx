import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { GoalDropdown, HomeHoc, Screen, Text } from "@components"
import { color } from "@theme"
import { useStores } from "@models"
import styles from "./home-screen.styles"
import { FlatList, TouchableOpacity, View } from "react-native"
import { MOOD_COLOR, moods } from "@constants"

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> =
  observer(function HomeScreen({ navigation }) {
    const {
      userStore: { user, updateCurrentFeeling },
    } = useStores()

    const _renderItem = ({
      item,
    }: {
      item: { id: number; emoji: string; text: string }
    }) => {
      return (
        <TouchableOpacity
          onPress={() => {
            updateCurrentFeeling(item.id)
            navigation.navigate("prejournal", {
              purpose: "mood",
              moodId: item.id,
            })
          }}
        >
          <View
            style={{
              ...styles.moodCard,
              backgroundColor: MOOD_COLOR[item.text],
            }}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text>{item.text}</Text>
          </View>
        </TouchableOpacity>
      )
    }

    return (
      <Screen backgroundColor={color.palette.snowWhite}>
        <HomeHoc title={`Hello, ${user.name} 👋`} subtitle="Welcome Back">
          <View style={styles.container}>
            <View style={styles.goalHeader}>
              <Text style={styles.text}>Goal For Today: </Text>
              <GoalDropdown />
            </View>
            <View style={styles.primarySection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.text}>How are you feeling?</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("prejournal", { purpose: "mood" })
                  }
                >
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
  })
