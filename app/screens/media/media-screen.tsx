import React, { FC, useCallback, useState } from "react"
import { ActivityIndicator, TouchableOpacity, View } from "react-native"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { useFocusEffect } from "@react-navigation/native"
import { color } from "@theme"
import { HomeHoc, HorizontalMediaScrollView, Screen, Text } from "@components"
import { useStores } from "@models"
import { IVideoDetails, IYoutubeSearchResultsResponse } from "@types"
import { mapYoutubeSearchResultToList } from "@utils"
import styles from "./media-screen.styles"

export const MediaScreen: FC<StackScreenProps<NavigatorParamList, "media">> = observer(
  function MediaScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const {
      userStore: { user, fetchYoutubeThumbnailList, fetchYoutubeMusicThumbnailList },
    } = useStores()
    const [videosList, setVideosList] = useState<IVideoDetails[]>([])
    const [musicList, setMusicList] = useState<IVideoDetails[]>([])
    const [videosLoading, setVideosLoading] = useState<boolean>(true)

    const goToMeditationScreen = () => navigation.navigate("meditation")
    const playMeditationVideo = (videoID: string) => navigation.navigate("meditation", { videoID })

    const goToMusicScreen = () => navigation.navigate("music")
    const playMusicVideo = (video: IVideoDetails) => navigation.navigate("musicPlayer", { video })

    useFocusEffect(
      useCallback(() => {
        const init = async () => {
          const videoSearchResult = await fetchYoutubeThumbnailList()
          const musicSearchResult = await fetchYoutubeMusicThumbnailList()

          const videoList = videoSearchResult.map((vid: IYoutubeSearchResultsResponse) =>
            mapYoutubeSearchResultToList(vid),
          )
          const musicList = musicSearchResult.map((vid: IYoutubeSearchResultsResponse) =>
            mapYoutubeSearchResultToList(vid),
          )
          setVideosList(videoList)
          setMusicList(musicList)
          setVideosLoading(false)
        }
        init()
      }, []),
    )

    return (
      <Screen backgroundColor={color.palette.snowWhite}>
        <HomeHoc title={`Hello, ${user.firstName} 🎶`} subtitle="Media">
          <View>
            <View style={styles.primarySection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.text}>Music</Text>
                <TouchableOpacity onPress={goToMusicScreen}>
                  <Text style={styles.mutedText}>See More</Text>
                </TouchableOpacity>
              </View>
            </View>
            {videosLoading ? (
              <ActivityIndicator color={color.palette.black} size={"large"} />
            ) : (
              <HorizontalMediaScrollView
                videoList={musicList}
                onPress={playMusicVideo}
                type="music"
              />
            )}

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
