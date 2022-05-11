import { VideoDetails } from "screens/media/media-screen.types"

export interface HorizontalMediaScrollViewProps {
  videoList: VideoDetails[]
  onPress?: (videoID: string) => void
}
