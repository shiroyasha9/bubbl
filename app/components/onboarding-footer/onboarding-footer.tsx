import * as React from "react"
import { SafeAreaView, View } from "react-native"
import { observer } from "mobx-react-lite"
import { PrimaryButton } from "../primary-button/primary-button"
import styles from "./onboarding-footer.styles"

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
          <View style={styles.startButtonContainer}>
            <PrimaryButton onPress={onStart} text="Start Your Journey" />
          </View>
        )}
      </View>
    </SafeAreaView>
  )
})
