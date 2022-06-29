import { SvgProps } from "react-native-svg"

export interface ISlideData {
  readonly title: string
  readonly subtitle: string
  readonly Icon: React.FC<SvgProps>
}
