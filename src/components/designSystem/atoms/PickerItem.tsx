import React from "react"
import Text from "./Text"
import { StyleSheet, View } from "react-native"
import { PickerItemType } from "@/types/Picker"
import Icon from "./Icon"
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native-gesture-handler"

type PickerItemProps = PickerItemType & TouchableWithoutFeedbackProps

export default function PickerItem({ label, iconColor, iconName, ...restProps }: PickerItemProps) {
  return (
    <TouchableWithoutFeedback {...restProps}>
      <View style={styles.container}>
        <Text>{label}</Text>
        <Icon name={iconName} backgroundColor={iconColor} IsInCircle size={40} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "red",
  },
})
