import { Screen } from "@components";
import { useAppDispatch, useAppSelector } from "@hooks";
import { incrementByAmount } from "@stores";
import { Button, StyleSheet, Text } from "react-native";
import { SvgProps } from "react-native-svg";

export interface ISlideData {
  readonly title: string;
  readonly subtitle: string;
  readonly Icon: React.FC<SvgProps>;
}

export const Onboarding = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <Screen>
      <Text>Onboarding</Text>
      <Text>{count}</Text>
      <Button title="+2" onPress={() => dispatch(incrementByAmount(2))} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
  },
});
