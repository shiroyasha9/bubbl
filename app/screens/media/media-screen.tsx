import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { HomeHoc, Screen, Text } from "@components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { useStores } from "@models"

export const MediaScreen: FC<StackScreenProps<NavigatorParamList, "media">> = observer(
  function MediaScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    const {
      authStore: { authUser },
    } = useStores()
    return (
      <Screen backgroundColor={color.palette.snowWhite}>
        <HomeHoc testID="" title={`Hello, ${authUser.firstName}`} subtitle="Media">
          <Text>Media screen</Text>
        </HomeHoc>
      </Screen>
    )
  },
)
