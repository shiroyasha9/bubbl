import { VideoDetails } from "screens/meditation/meditation-screen.types"

export interface MediaInfoCardProps {
  onPress: (videoID: string) => void
  video?: VideoDetails
}
