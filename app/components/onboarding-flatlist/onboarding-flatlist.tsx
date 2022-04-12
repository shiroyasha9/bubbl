import * as React from "react"
import { Dimensions, FlatList, NativeScrollEvent, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import styles from "./onboarding-flatlist.styles"
import { AppIntroSliderItem } from "screens/onboarding/onboarding-screen.types"

export interface OnboardingFlatlistProps {
  data: readonly any[]
  activeIndex: number
  setActiveIndex: (index: number) => void
  flatListRef: React.RefObject<FlatList<AppIntroSliderItem>>
}

export const OnboardingFlatlist = observer(function HorizontalFlatlist(
  props: OnboardingFlatlistProps,
) {
  const { data, activeIndex, setActiveIndex, flatListRef } = props

  const width = Dimensions.get("window").width

  const handleMomentumScrollEnd = (e: { nativeEvent: NativeScrollEvent }) => {
    const offset = e.nativeEvent.contentOffset.x
    const newIndex = Math.round(offset / width)

    if (newIndex === activeIndex) {
      // No page change, don't do anything
      return
    }
    setActiveIndex(newIndex)
  }

  const renderSlide = ({ item }: { item: AppIntroSliderItem }) => {
    return (
      <View style={styles.slideContainer}>
        <View style={styles.slide}>
          <View style={styles.iconContainer}>{item.icon}</View>
          <View style={styles.titleContainer}>
            <Text allowFontScaling={false} style={styles.title}>
              {item.title}
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text allowFontScaling={false} style={styles.subtitle}>
              {item.subtitle}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      bounces={false}
      style={styles.flatList}
      renderItem={renderSlide}
      keyExtractor={(_, index: number) => index.toString()}
      onMomentumScrollEnd={handleMomentumScrollEnd}
      extraData={width}
      initialNumToRender={data.length}
    />
  )
})
