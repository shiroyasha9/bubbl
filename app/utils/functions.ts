import { IYoutubeSearchResultsResponse } from "@types"

export const getThumbnailFromVideoId = (videoId: string) => {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
}

export const mapYoutubeSearchResultToList = (vid: IYoutubeSearchResultsResponse) => {
  return {
    thumbnailURI: getThumbnailFromVideoId(vid.id.videoId),
    id: vid.id.videoId,
    duration: vid.duration,
    title: vid.snippet.title,
  }
}
