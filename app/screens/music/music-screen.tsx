import React, { FC, useCallback, useState } from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, FlatList, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { useFocusEffect } from "@react-navigation/native"

import { NavigatorParamList } from "@navigators"
import { HomeHoc, MusicInfoCard, Screen } from "@components"
import { mapYoutubeSearchResultToList } from "@utils"
import { useStores } from "@models"
import { IVideoDetails, IYoutubeSearchResultsResponse } from "@types"
import { color } from "@theme"
import { Video } from "./music-screen.types"
import styles from "./music-screen.styles"

export const MusicScreen: FC<StackScreenProps<NavigatorParamList, "music">> =
  observer(function MusicScreen({ navigation }) {
    const {
      userStore: { fetchYoutubeMusicList },
    } = useStores()

    // const video = {
    //   id: "6u5GK11Yt7Q",
    //   title: "Cry Baby",
    //   thumbnailURI: `https://img.youtube.com/vi/6u5GK11Yt7Q/mqdefault.jpg`,
    //   duration: "4m 38s",
    // }
    const [musicList, setMusicList] = useState<IVideoDetails[]>([])
    const [videosLoading, setVideosLoading] = useState<boolean>(true)

    useFocusEffect(
      useCallback(() => {
        const init = async () => {
          const musicSearchResult = await fetchYoutubeMusicList()
          const musicList = musicSearchResult.map(
            (vid: IYoutubeSearchResultsResponse) =>
              mapYoutubeSearchResultToList(vid),
          )
          setMusicList(musicList)
          setVideosLoading(false)
        }
        init()
      }, []),
    )

    const _renderMusicList = ({ item }: Video) => (
      <MusicInfoCard
        onPress={(video: IVideoDetails) => {
          navigation.navigate("musicPlayer", { video })
        }}
        video={item}
      />
    )

    return (
      <Screen>
        <HomeHoc title="Music" subtitle="" showAlternateHeader>
          <View style={styles.container}>
            {videosLoading ? (
              <ActivityIndicator color={color.palette.black} size={"large"} />
            ) : (
              <FlatList
                // data={[video]}
                data={musicList}
                renderItem={_renderMusicList}
                showsHorizontalScrollIndicator={false}
              />
            )}
          </View>
        </HomeHoc>
      </Screen>
    )
  })
