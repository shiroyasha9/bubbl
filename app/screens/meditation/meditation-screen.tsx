import React, { FC, useCallback, useState } from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, FlatList, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { RouteProp, useFocusEffect, useRoute } from "@react-navigation/native"
import YoutubePlayer from "react-native-youtube-iframe"

import { NavigatorParamList } from "@navigators"
import { HomeHoc, MediaInfoCard, Screen } from "@components"
import { getThumbnailFromVideoId } from "@utils"
import { useStores } from "@models"
import { color } from "@theme"
import { IYoutubeSearchResultsResponse, VideoDetails, VideoList } from "./meditation-screen.types"
import styles from "./meditation-screen.styles"

export const MeditationScreen: FC<StackScreenProps<NavigatorParamList, "meditation">> = observer(
  function MeditationScreen() {
    const {
      authStore: { fetchYoutubeVideoList },
    } = useStores()
    const route: RouteProp<{ params: { videoID: string | null } }, "params"> = useRoute()

    const [videoID, setVideoID] = useState<string | null>(null)
    const [videosList, setVideosList] = useState<VideoDetails[]>([])
    const [videosLoading, setVideosLoading] = useState<boolean>(true)

    useFocusEffect(
      useCallback(() => {
        const init = async () => {
          const videoSearchResult = await fetchYoutubeVideoList()
          const videoList = videoSearchResult.map((vid: IYoutubeSearchResultsResponse) => {
            return {
              thumbnailURI: getThumbnailFromVideoId(vid.id.videoId),
              id: vid.id.videoId,
              duration: vid.duration,
              title: vid.snippet.title,
            }
          })
          setVideosList(videoList)
          setVideosLoading(false)
        }
        init()
      }, []),
    )

    useFocusEffect(
      useCallback(() => {
        const routerVideoID = route?.params?.videoID
        if (routerVideoID) {
          setVideoID(routerVideoID)
        }
      }, []),
    )

    const _renderVideoList = ({ item }: VideoList) => (
      <MediaInfoCard onPress={(videoID: string) => setVideoID(videoID)} video={item} />
    )

    return (
      <Screen>
        <HomeHoc title="Meditation Videos" testID="1" subtitle="" showAlternateHeader>
          <View style={styles.container}>
            {videosLoading ? (
              <ActivityIndicator color={color.palette.black} size={"large"} />
            ) : (
              <>
                {videoID && <YoutubePlayer height={240} play={true} videoId={videoID} />}
                <FlatList
                  data={videosList}
                  renderItem={_renderVideoList}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            )}
          </View>
        </HomeHoc>
      </Screen>
    )
  },
)
