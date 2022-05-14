import { IVideoDetails } from "@types"

export interface MusicInfoCardProps {
  onPress: (video: IVideoDetails) => void
  video?: IVideoDetails
}
