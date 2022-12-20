import { View } from "react-native";
import { Button } from "../button/button";
import styles from "./onboarding-footer.styles";

export interface OnboardingFooterProps {
  activeSlideIndex: number;
  numberOfSlides: number;
  onGoToSlide: (newSlideNumber?: number) => void;
  onStart: () => void;
}

export const OnboardingFooter: React.FC<OnboardingFooterProps> = (props) => {
  const { activeSlideIndex, numberOfSlides, onGoToSlide, onStart } = props;

  return (
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
          <Button
            text="Skip"
            style={styles.skipButton}
            preset="inverted"
            onPress={() => {
              onGoToSlide(numberOfSlides - 1);
            }}
          />
          <Button
            text="Next"
            style={styles.footerButton}
            onPress={() => onGoToSlide()}
          />
        </View>
      ) : (
        <View style={styles.startButtonContainer}>
          <Button onPress={onStart} text="Start Your Journey" />
        </View>
      )}
    </View>
  );
};
