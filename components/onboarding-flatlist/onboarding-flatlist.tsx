import { IOnboardingSlideData } from "@types";
import { observer } from "mobx-react-lite";
import * as React from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  SafeAreaView,
  View,
} from "react-native";
import { Text } from "../text/text";
import styles from "./onboarding-flatlist.styles";

interface IProps {
  data: readonly any[];
  activeSlideIndex: number;
  setActiveSlideIndex: (index: number) => void;
  flatListRef: React.RefObject<FlatList<IOnboardingSlideData>>;
}

export const OnboardingFlatlist = observer(function HorizontalFlatlist(
  props: IProps,
) {
  const { data, activeSlideIndex, setActiveSlideIndex, flatListRef } = props;

  const width = Dimensions.get("window").width;

  const handleMomentumScrollEnd = (e: { nativeEvent: NativeScrollEvent }) => {
    const offset = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offset / width);

    if (newIndex === activeSlideIndex) {
      // No page change, don't do anything
      return;
    }
    setActiveSlideIndex(newIndex);
  };

  const renderSlide = ({ item }: { item: IOnboardingSlideData }) => {
    return (
      <SafeAreaView>
        <View style={styles.slideContainer}>
          <View style={styles.slide}>
            <View style={styles.iconContainer}>
              {<item.Icon style={styles.icon} />}
            </View>
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
      </SafeAreaView>
    );
  };

  return (
    <FlatList
      pagingEnabled
      data={data}
      contentContainerStyle={styles.flatListContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderSlide}
      onMomentumScrollEnd={handleMomentumScrollEnd}
      ref={flatListRef}
      bounces={false}
      style={styles.flatList}
      keyExtractor={(_, index: number) => index.toString()}
    />
  );
});
