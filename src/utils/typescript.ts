import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"

export const deepClone = <T>(objectToClone: T): T => {
  return JSON.parse(JSON.stringify(objectToClone))
}

type ChangeEventReactNative = NativeSyntheticEvent<TextInputChangeEventData>
type HandleChangeFormik = {
  (e: React.ChangeEvent<any>): void
  <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
    ? void
    : (e: string | React.ChangeEvent<any>) => void
}

export const handleChangeReactNative = (handleChangeFormik: HandleChangeFormik) => {
  return (event: ChangeEventReactNative) => handleChangeFormik(event.nativeEvent.text)
}
