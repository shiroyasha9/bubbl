import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { HomeHoc, Screen, Text, JournalList } from "@components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { useStores } from "@models"

export const JournalScreen: FC<StackScreenProps<NavigatorParamList, "journal">> = observer(
  function JournalScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    const {
      authStore: { authUser },
    } = useStores()
    return (
      <Screen backgroundColor={color.palette.snowWhite}>
        <HomeHoc
          testID=""
          title={`${authUser.firstName ? authUser.firstName + "'s" : "Your"} Journal`}
          subtitle="Scribbl away!"
        >
          <Text>Journal screen</Text>
          <JournalList />
          <JournalList />
        </HomeHoc>
      </Screen>
    )
  },
)
