import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { YOUTUBE_API_BASE_URL } from "@constants"
import { IYoutubeSearchResultsResponse } from "@types"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
const { YOUTUBE_API_KEY } = require("config/env")

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async fetchVideoThumbnailList(searchQuery: string): Promise<any> {
    try {
      const response: ApiResponse<any> = await this.apisauce.get(
        `/search?part=snippet&key=${YOUTUBE_API_KEY}&type=video&q=${searchQuery}&maxResults=5`,
        {},
        { baseURL: YOUTUBE_API_BASE_URL },
      )
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      const videosList: IYoutubeSearchResultsResponse[] = response.data.items
      return { kind: "ok", videosList }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async fetchYoutubeVideoList(searchQuery: string): Promise<any> {
    try {
      const response: ApiResponse<any> = await this.apisauce.get(
        `/search?part=snippet&key=${YOUTUBE_API_KEY}&type=video&q=${searchQuery}&maxResults=15`,
        {},
        { baseURL: YOUTUBE_API_BASE_URL },
      )
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      let videosList: IYoutubeSearchResultsResponse[] = response.data.items
      const videoIdList: string[] = videosList.map(
        (videoInfo) => videoInfo.id.videoId,
      )
      const responseWithDuration: ApiResponse<any> = await this.apisauce.get(
        `/videos?id=${videoIdList.join(
          ",",
        )}&part=contentDetails&key=${YOUTUBE_API_KEY}`,
        {},
        { baseURL: YOUTUBE_API_BASE_URL },
      )
      if (responseWithDuration.ok) {
        videosList = videosList.map((videoInfo, index: number) => ({
          ...videoInfo,
          duration:
            responseWithDuration.data.items[index].contentDetails.duration,
        }))
      }

      return { kind: "ok", videosList }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
