import { GoogleLogo } from "@themes";
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
  const { activeSlideIndex, numberOfSlides } = props;

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
      <OnboardingFooterButtons {...props} />
    </View>
  );
};

const OnboardingFooterButtons: React.FC<OnboardingFooterProps> = (props) => {
  const { activeSlideIndex, numberOfSlides, onGoToSlide, onStart } = props;

  if (activeSlideIndex < numberOfSlides - 2) {
    return (
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
    );
  }

  if (activeSlideIndex === numberOfSlides - 2) {
    return (
      <View style={styles.startButtonContainer}>
        <Button onPress={() => onGoToSlide()} text="Start Your Journey" />
      </View>
    );
  }

  return (
    <View style={styles.startButtonContainer}>
      <Button
        onPress={onStart}
        text="Sign in with"
        rightIcon={<GoogleLogo style={{ marginLeft: 10 }} />}
      />
    </View>
  );
};
