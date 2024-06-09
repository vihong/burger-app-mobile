import React from "react"
import { StyleSheet } from "react-native"
import Text from "../atoms/Text"
import { theme } from "@/style/theme"

type ErrorMessageProps = {
  errorMessage: string | undefined
}

export default function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  if (errorMessage === undefined) return null

  return <Text style={styles.error}>{errorMessage}</Text>
}

const styles = StyleSheet.create({
  error: {
    color: theme.colors.danger,
  },
})
