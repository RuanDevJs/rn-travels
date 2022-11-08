import { Dimensions, Platform } from "react-native"
import { DeviceProps } from "../types/helpers"

export const Device: DeviceProps = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
  plataform: {
    type: Platform.OS,
    animation: Platform.OS === 'ios' ? 'padding' : 'height'
  },
}

