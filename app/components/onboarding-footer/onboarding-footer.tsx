import { SafeAreaView, View } from "react-native"
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated"
import { observer } from "mobx-react-lite"
import { PrimaryButton } from "../primary-button/primary-button"
import styles from "./onboarding-footer.styles"
import { useEffect } from "react"

export interface OnboardingFooterProps {
  activeSlideIndex: number
  numberOfSlides: number
  onGoToSlide: (newSlideNumber?: number) => void
  onStart: () => void
}

export const OnboardingFooter = observer(function OnboardingFooter({
  activeSlideIndex,
  numberOfSlides,
  onGoToSlide,
  onStart,
}: OnboardingFooterProps) {
  const offset = useSharedValue(1)
  // const paginationOffset = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value * 255 }],
    }
  })

  useEffect(() => {
    if (activeSlideIndex === numberOfSlides - 1) {
      offset.value = withSpring(0)
    } else {
      offset.value = 1
    }
  }, [activeSlideIndex])

  return (
    <SafeAreaView>
      <View>
        <View style={styles.paginationContainer}>
          <View style={styles.paginationItem}>
            {new Array(numberOfSlides).fill(1).map((_, index) => (
              <View
                style={[
                  styles.footerIndicator,
                  activeSlideIndex === index && styles.activeFooterIndicator,
                ]}
                key={index}
              />
            ))}
          </View>
        </View>
        {activeSlideIndex !== numberOfSlides - 1 ? (
          <View style={styles.footerButtonContainer}>
            <PrimaryButton
              text="Skip"
              style={styles.skipButton}
              textStyle={styles.skipButtonText}
              onPress={() => {
                onGoToSlide(numberOfSlides - 1)
              }}
            />
            <PrimaryButton text="Next" style={styles.footerButton} onPress={onGoToSlide} />
          </View>
        ) : (
          <Animated.View style={[styles.startButtonContainer, animatedStyles]}>
            <PrimaryButton onPress={onStart} text="Start Your Journey" />
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  )
})
