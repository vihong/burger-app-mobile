import React from "react"
import { SafeAreaView, StyleSheet, ViewProps } from "react-native"
import { getStatusBarCurrentHeight } from "../../../constants/statusBar"

type ScreenProps = {
  children: React.ReactNode
} & ViewProps

export default function Screen({ children }: ScreenProps) {
  return <SafeAreaView style={styles.messagesScreen}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  messagesScreen: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
    paddingTop: getStatusBarCurrentHeight(),
  },
})
