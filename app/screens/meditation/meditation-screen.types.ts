export interface IYoutubeSearchResultsResponse {
  id: Id
  snippet: Snippet
  duration?: string
}
export interface Id {
  videoId: string
}
export interface Snippet {
  title: string
}

export interface VideoDetails {
  thumbnailURI: string
  id: string
  duration: string
  title: string
}

export interface VideoList {
  item: VideoDetails
  index: number
}
