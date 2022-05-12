import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
const { IS_OAUTH_ENABLED } = require("config/env")

export const user = {
  displayName: types.optional(types.string, ""),
  uid: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
  photoURL: types.optional(types.string, ""),
  firstName: types.optional(types.string, ""),
  lastName: types.optional(types.string, ""),
}

/**
 * Model description here for TypeScript hints.
 */
export const AuthStoreModel = types
  .model({
    // authUser: types.optional(types.model("user", user), {}),
    authUser: types.optional(types.model("user", user), {}),
    loading: types.optional(types.boolean, false),
    authError: types.optional(types.boolean, false),
    userGoal: types.optional(types.number, 0),
    currentFeeling: types.optional(types.number, 0),
    todaysJournal: types.optional(types.string, ""),
  })
  .extend(withEnvironment)
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    fetchOAuthUser: flow(function* () {
      self.loading = true
      self.authError = false
      if (IS_OAUTH_ENABLED) {
        const { kind, user } = yield self.environment.api.syncUser()
        if (kind === "ok") {
          self.authUser.uid = user?.uid
          self.authUser.displayName = user?.displayName
          self.authUser.firstName = user?.firstName
          self.authUser.lastName = user?.lastName
          self.authUser.email = user?.email
          self.authUser.photoURL = user?.photoURL
        }
      } else {
        self.authUser.uid = "123"
        self.authUser.displayName = "Naruto Uzumaki"
        self.authUser.firstName = "Naruto"
        self.authUser.lastName = "Uzumaki"
        self.authUser.email = "narutouzumaki@gmail.com"
        self.authUser.photoURL =
          "https://lh3.googleusercontent.com/a-/AOh14GiN-k8pMeGCFB13aHOrJrANy_RYl5GUPnTrgFEFZDM"
      }
      self.loading = false
    }),
    updateUserGoal: function (goal: number) {
      self.userGoal = goal
    },
    updateTodaysJournal: function (newText: string) {
      self.todaysJournal = newText
    },
    updateCurrentFeeling: function (feeling: number) {
      self.currentFeeling = feeling
    },
  }))

type AuthStoreType = Instance<typeof AuthStoreModel>
export interface AuthStore extends AuthStoreType {}
type AuthStoreSnapshotType = SnapshotOut<typeof AuthStoreModel>
export interface AuthStoreSnapshot extends AuthStoreSnapshotType {}
export const createAuthStoreDefaultModel = () => types.optional(AuthStoreModel, {})
