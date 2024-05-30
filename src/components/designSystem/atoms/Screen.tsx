import React from "react"
import { SafeAreaView, StyleProp, StyleSheet, ViewProps, ViewStyle } from "react-native"
import { getStatusBarCurrentHeight } from "../../../constants/statusBar"
import { theme } from "../../../style/theme"

type ScreenProps = {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
} & ViewProps

export default function Screen({ children, style }: ScreenProps) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: getStatusBarCurrentHeight(),
    backgroundColor: theme.colors.grey,
  },
})
