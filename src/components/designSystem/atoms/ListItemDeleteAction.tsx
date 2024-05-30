import React from "react"
import { GestureResponderEvent, StyleSheet, View } from "react-native"
import Icon from "./Icon"
import { theme } from "../../../style/theme"
import { TouchableHighlight } from "react-native-gesture-handler"

type ListItemDeleteActionProps = {
  onPress: ((event: GestureResponderEvent) => void) & (() => void)
}

export default function ListItemDeleteAction({ onPress }: ListItemDeleteActionProps) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.listItemDeleteAction}>
        <Icon name="trash-can-outline" color={theme.colors.white} size={30} />
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  listItemDeleteAction: {
    backgroundColor: theme.colors.danger,
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
})
