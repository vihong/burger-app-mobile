import { Platform, StatusBar } from "react-native"

export const getStatusBarCurrentHeight = (): number | undefined => {
  return Platform.OS === "android" ? StatusBar.currentHeight : 0
}
