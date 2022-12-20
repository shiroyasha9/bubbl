export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
};

export interface IVideoDetails {
  thumbnailURI: string;
  id: string;
  duration: string;
  title: string;
}

export interface IYoutubeSearchResultsResponse {
  id: Id;
  snippet: Snippet;
  duration?: string;
}
export interface Id {
  videoId: string;
}
export interface Snippet {
  title: string;
}

export type TYoutubeVideoDuration = "H" | "M" | "S";
