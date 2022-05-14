import { IVideoDetails } from "@types"

export interface MediaInfoCardProps {
  onPress: (videoID: string) => void
  video?: IVideoDetails
}
