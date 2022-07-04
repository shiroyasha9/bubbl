import * as React from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import { MediaInfoCardProps } from "./media-info-card.types"
import styles from "./media-info-card.styles"
import { transformYTDurationToSeconds } from "@utils"

/**
 * Describe your component here
 */
export const MediaInfoCard = observer(function MediaInfoCard(
  props: MediaInfoCardProps,
) {
  const { onPress, video } = props
  return (
    <TouchableOpacity onPress={() => onPress(video.id)}>
      <View style={styles.card}>
        <Image
          source={{ uri: video && video.thumbnailURI }}
          style={styles.image}
        />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {video && video.title}
          </Text>
          <Text style={styles.mutedText}>
            {video && transformYTDurationToSeconds(video.duration)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
})
