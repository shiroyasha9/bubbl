import { IVideoDetails } from "@types"

export interface HorizontalMediaScrollViewProps {
  videoList: IVideoDetails[]
  onPress?: (videoID: string | IVideoDetails) => void
  type?: "music" | "video"
}
