import { IOnboardingSlideData } from "@types";
import { Dimensions, FlatList, NativeScrollEvent, View } from "react-native";
import { Text } from "../text/text";
import styles from "./onboarding-flatlist.styles";

type OnboardingFlatlistProps = {
  data: readonly any[];
  activeSlideIndex: number;
  setActiveSlideIndex: (index: number) => void;
  flatListRef: React.RefObject<FlatList<IOnboardingSlideData>>;
};

export const OnboardingFlatlist: React.FC<OnboardingFlatlistProps> = (
  props,
) => {
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
};
