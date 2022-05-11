import React, { FC, useCallback, useState } from "react"
import { ActivityIndicator, TouchableOpacity, View } from "react-native"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { useFocusEffect } from "@react-navigation/native"
import { color } from "@theme"
import { HomeHoc, HorizontalMediaScrollView, Screen, Text } from "@components"
import { useStores } from "@models"
import { getThumbnailFromVideoId } from "@utils"
import styles from "./media-screen.styles"
import { IYoutubeSearchResultsResponse, VideoDetails } from "./media-screen.types"

export const MediaScreen: FC<StackScreenProps<NavigatorParamList, "media">> = observer(
  function MediaScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const {
      authStore: { authUser, fetchYoutubeThumbnailList },
    } = useStores()
    const [videosList, setVideosList] = useState<VideoDetails[]>([])
    const [videosLoading, setVideosLoading] = useState<boolean>(true)

    const goToMeditationScreen = () => navigation.navigate("meditation")
    const playMeditationVideo = (videoID: string) => navigation.navigate("meditation", { videoID })

    useFocusEffect(
      useCallback(() => {
        const init = async () => {
          const videoSearchResult = await fetchYoutubeThumbnailList()
          const videoList = videoSearchResult.map((vid: IYoutubeSearchResultsResponse) => {
            return {
              thumbnailURI: getThumbnailFromVideoId(vid.id.videoId),
              id: vid.id.videoId,
            }
          })
          setVideosList(videoList)
          setVideosLoading(false)
        }
        init()
      }, []),
    )

    const thumbnailList = [
      { thumbnailURI: "https://i.ytimg.com/vi/6u5GK11Yt7Q/maxresdefault.jpg", id: "123" },
      { thumbnailURI: "https://i.ytimg.com/vi/6u5GK11Yt7Q/maxresdefault.jpg", id: "123" },
      { thumbnailURI: "https://i.ytimg.com/vi/6u5GK11Yt7Q/maxresdefault.jpg", id: "123" },
      { thumbnailURI: "https://i.ytimg.com/vi/6u5GK11Yt7Q/maxresdefault.jpg", id: "123" },
      { thumbnailURI: "https://i.ytimg.com/vi/6u5GK11Yt7Q/maxresdefault.jpg", id: "123" },
    ]
    return (
      <Screen backgroundColor={color.palette.snowWhite}>
        <HomeHoc testID="" title={`Hello, ${authUser.firstName} 🎶`} subtitle="Media">
          <View>
            <View style={styles.primarySection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.text}>Music</Text>
                <TouchableOpacity>
                  <Text style={styles.mutedText}>See More</Text>
                </TouchableOpacity>
              </View>
            </View>
            <HorizontalMediaScrollView videoList={thumbnailList} />
            <View style={styles.secondarySection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.text}>Video</Text>
                <TouchableOpacity onPress={goToMeditationScreen}>
                  <Text style={styles.mutedText}>See More</Text>
                </TouchableOpacity>
              </View>
            </View>
            {videosLoading ? (
              <ActivityIndicator color={color.palette.black} size={"large"} />
            ) : (
              <HorizontalMediaScrollView videoList={videosList} onPress={playMeditationVideo} />
            )}
          </View>
        </HomeHoc>
      </Screen>
    )
  },
)
