import React, { FC, useCallback, useState, useRef } from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { RouteProp, useFocusEffect, useRoute } from "@react-navigation/native"
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe"

import { NavigatorParamList } from "@navigators"
import { HomeHoc, Screen, Text } from "@components"
import { getDisplayDurationFromSeconds } from "@utils"
import { IVideoDetails } from "@types"
import { color, PauseIcon, PlayIcon } from "@theme"
import styles from "./music-player.styles"
import Slider from "@react-native-community/slider"
import { HHMMSS } from "@constants"

export const MusicPlayerScreen: FC<StackScreenProps<NavigatorParamList, "musicPlayer">> = observer(
  function MusicPlayerScreen() {
    const route: RouteProp<{ params: { video: IVideoDetails } }, "params"> = useRoute()

    const [playing, setPlaying] = useState<boolean>(true)
    const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false)
    const [duration, setDuration] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [video, setVideo] = useState<IVideoDetails>()

    const playerRef = useRef<YoutubeIframeRef>()

    // used to fetch the video details from the route params
    useFocusEffect(
      useCallback(() => {
        const routerVideo = route?.params?.video
        if (routerVideo) {
          setVideo(routerVideo)
        }
      }, []),
    )

    const calculateSeekBar = () => (duration !== 0 ? currentTime / duration : 0)

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false)
      }
    }, [])

    const togglePlaying = useCallback(() => {
      setPlaying((previousState) => !previousState)
    }, [])

    const onPlayerReady = () => {
      playerRef.current?.getDuration().then((getDuration) => {
        setDuration(parseFloat(getDuration.toFixed(0)))
      })
      setIsPlayerReady(true)
    }

    // used to change the duration values
    useFocusEffect(() => {
      const interval = setInterval(() => {
        if (playing) {
          playerRef.current?.getCurrentTime().then((currentTime) => {
            setCurrentTime(currentTime)
          })
        }
      }, 1000)
      return () => clearInterval(interval)
    })

    return (
      <Screen>
        <HomeHoc title="Music" subtitle="" showAlternateHeader>
          <View style={styles.container}>
            {!video ? (
              <ActivityIndicator color={color.palette.black} size={"large"} />
            ) : (
              <>
                <YoutubePlayer
                  height={0}
                  play={playing}
                  videoId={video.id}
                  onChangeState={onStateChange}
                  ref={playerRef}
                  onReady={onPlayerReady}
                />
                {!isPlayerReady ? (
                  <ActivityIndicator color={color.palette.black} size={"large"} />
                ) : (
                  <View style={styles.music}>
                    <Image source={{ uri: video.thumbnailURI }} style={styles.image} />
                    <Text numberOfLines={1} style={styles.title}>
                      {video.title}
                    </Text>
                    <View style={styles.timers}>
                      <Text style={styles.timerText}>
                        {getDisplayDurationFromSeconds(parseFloat(currentTime.toFixed(0)), HHMMSS)}
                      </Text>
                      <Text style={styles.timerText}>
                        {getDisplayDurationFromSeconds(duration, HHMMSS)}
                      </Text>
                    </View>
                    <Slider
                      thumbTintColor={color.palette.nightSnow}
                      style={styles.slider}
                      minimumValue={0}
                      maximumValue={1}
                      value={calculateSeekBar()}
                      minimumTrackTintColor={color.palette.nightSnow}
                      maximumTrackTintColor={color.palette.lightGrey}
                      onSlidingStart={async () => {
                        if (!playing) return
                        try {
                          togglePlaying()
                        } catch (error) {
                          console.log("error inside onSlidingStart callback", error)
                        }
                      }}
                      onSlidingComplete={async (value) => {
                        playerRef.current?.seekTo(value * duration, true)
                        setCurrentTime(value * duration)
                      }}
                    />
                    <View style={styles.playPauseIcon}>
                      <TouchableOpacity onPress={togglePlaying}>
                        {playing ? <PauseIcon /> : <PlayIcon />}
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </>
            )}

            {/* {videosLoading ? (
              <ActivityIndicator color={color.palette.black} size={"large"} />
            ) : (
              <>
                {video && (
                  <YoutubePlayer
                    height={0}
                    play={playing}
                    videoId={video.id}
                    onChangeState={onStateChange}
                    ref={playerRef}
                  />
                )}
              </>
            )} */}
          </View>
        </HomeHoc>
      </Screen>
    )
  },
)
