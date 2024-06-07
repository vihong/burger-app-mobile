import React from "react"
import { StyleSheet, View } from "react-native"
import { theme } from "../../../style/theme"

export default function ListItemSeparator() {
  return <View style={styles.listSeparator} />
}

const styles = StyleSheet.create({
  listSeparator: { width: "100%", height: 1, backgroundColor: theme.colors.greyLight },
})
