import * as React from "react"
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native"
import { observer } from "mobx-react-lite"
import styles from "./horizontal-media-scroll-view.styles"
import { HorizontalMediaScrollViewProps } from "./horizontal-media-scroll-view.types"
/**
 * Horizontal Cards for Media
 */
export const HorizontalMediaScrollView = observer(
  function HorizontalMediaScrollView(props: HorizontalMediaScrollViewProps) {
    const { videoList, onPress, type } = props
    return (
      <ScrollView horizontal={true} style={styles.horizontalScrollContainer}>
        {videoList &&
          videoList.map((video, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                type === "music" ? onPress(video) : onPress(video.id)
              }
            >
              <View style={styles.card}>
                <ImageBackground
                  source={{ uri: video.thumbnailURI }}
                  resizeMode="cover"
                  style={styles.imageContainer}
                  imageStyle={styles.image}
                ></ImageBackground>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    )
  },
)
