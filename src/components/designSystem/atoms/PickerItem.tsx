import React from "react"
import Text from "./Text"
import { StyleSheet, View } from "react-native"
import { PickerItemType } from "@/types/Picker"
import Icon from "./Icon"
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from "react-native"
import { theme } from "@/style/theme"

type PickerItemProps = PickerItemType & TouchableWithoutFeedbackProps

export default function PickerItem({ label, iconColor, iconName, ...restProps }: PickerItemProps) {
  return (
    <TouchableWithoutFeedback {...restProps}>
      <View style={styles.container}>
        <Icon name={iconName} backgroundColor={iconColor} IsInCircle size={80} />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "33%",
  },
  text: {
    marginTop: 5,
    // borderWidth: 1,
    // borderColor: "blue",
    textAlign: "center",
    fontWeight: theme.weights.semiBold,
  },
})
