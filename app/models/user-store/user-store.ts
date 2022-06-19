import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { GOAL_TEXT } from "@constants"

export const user = {
  displayName: types.optional(types.string, ""),
  uid: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
  photoURL: types.optional(types.string, ""),
  firstName: types.optional(types.string, ""),
  lastName: types.optional(types.string, ""),
}
export const journalItem = {
  text: types.optional(types.string, ""),
  jid: types.optional(types.number, 0),
  date: types.optional(types.Date, new Date()),
  emotionNumber: types.optional(types.number, 0),
}
export const moodItem = {
  mid: types.optional(types.number, 0),
  date: types.optional(types.Date, new Date()),
  emotionNumber: types.optional(types.number, 0),
}

/**
 * Model description here for TypeScript hints.
 */
export const UserStoreModel = types
  .model({
    user: types.optional(types.model("user", user), {}),
    loading: types.optional(types.boolean, false),
    authError: types.optional(types.boolean, false),
    userGoal: types.optional(types.number, 0),
    currentFeeling: types.optional(types.number, 0),
    todaysJournal: types.optional(types.string, ""),
    journals: types.optional(types.array(types.model("journalItem", journalItem)), []),
    moodHistory: types.optional(types.array(types.model("moodItem", moodItem)), []),
  })
  .extend(withEnvironment)
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    updateUser: flow(function* () {
      self.loading = true
      self.authError = false
      self.user.uid = "123"
      self.user.displayName = "Naruto Uzumaki"
      self.user.firstName = "Naruto"
      self.user.lastName = "Uzumaki"
      self.user.email = "narutouzumaki@gmail.com"
      self.user.photoURL =
        "https://lh3.googleusercontent.com/a-/AOh14GiN-k8pMeGCFB13aHOrJrANy_RYl5GUPnTrgFEFZDM"
      self.loading = false
    }),
    updateJournal: function () {
      self.journals.unshift({
        jid: self.journals.length,
        text: self.todaysJournal,
        emotionNumber: self.currentFeeling,
        date: new Date(),
      })
    },
    updateMoodHistory: function () {
      self.moodHistory.unshift({
        mid: self.moodHistory.length,
        emotionNumber: self.currentFeeling,
        date: new Date(),
      })
    },
    updateTodaysJournal: function (newText: string) {
      self.todaysJournal = newText
    },
    updateUserGoal: function (goal: number) {
      self.userGoal = goal
    },
    updateCurrentFeeling: function (feeling: number) {
      self.currentFeeling = feeling
    },
    fetchYoutubeVideoList: flow(function* () {
      const { kind, videosList } = yield self.environment.api.fetchYoutubeVideoList(
        `meditation videos for ${GOAL_TEXT[self.userGoal]}`,
      )
      return kind === "ok" ? videosList : []
    }),
    fetchYoutubeThumbnailList: flow(function* () {
      const { kind, videosList } = yield self.environment.api.fetchVideoThumbnailList(
        `meditation videos for ${GOAL_TEXT[self.userGoal]}`,
      )
      return kind === "ok" ? videosList : []
    }),
    fetchYoutubeMusicList: flow(function* () {
      const { kind, videosList } = yield self.environment.api.fetchYoutubeVideoList(
        `music for ${GOAL_TEXT[self.userGoal]}`,
      )
      return kind === "ok" ? videosList : []
    }),
    fetchYoutubeMusicThumbnailList: flow(function* () {
      const { kind, videosList } = yield self.environment.api.fetchVideoThumbnailList(
        `music for ${GOAL_TEXT[self.userGoal]}`,
      )
      return kind === "ok" ? videosList : []
    }),
  }))

type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType {}
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType {}
export const createUserStoreDefaultModel = () => types.optional(UserStoreModel, {})