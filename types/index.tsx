import { SvgProps } from "react-native-svg";

export type NavigatorParamList = {
  Onboarding: undefined;
  Home: undefined;
  Intro: undefined;
};

export interface IOnboardingSlideData {
  readonly title: string;
  readonly subtitle: string;
  readonly Icon: React.FC<SvgProps>;
}

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

export type TAuthResponse = {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
};
