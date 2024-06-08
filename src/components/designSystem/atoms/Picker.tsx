import React from "react"
import { View, TextInputProps as RNTextInputProps, ViewStyle } from "react-native"
import Icon, { MaterialCommunityIconName } from "./Icon"
import { theme } from "../../../style/theme"
import Text from "./Text"
import { styles as textInputStyles } from "./TextInput"

type PickerProps = {
  placeholder: string
  iconName?: MaterialCommunityIconName
  style?: ViewStyle
} & RNTextInputProps

export default function Picker({
  placeholder,
  iconName = "apps",
  style,
  ...restProps
}: PickerProps) {
  return (
    <View style={textInputStyles.textInputContainer}>
      {iconName && (
        <Icon
          style={[textInputStyles.icon, style]}
          name={iconName}
          color={theme.colors.greyDark}
          size={30}
        />
      )}
      <Text {...restProps} style={textInputStyles.textInput}>
        {placeholder}
      </Text>
      <Icon name={"chevron-down"} color={theme.colors.greyDark} size={30} />
    </View>
  )
}

/**
 * About styling:
 * This Picker component uses the same styling as TextInput because :
 * 1) they both should look similar for aesthetic reasons
 * 2) TextInput was created BEFORE Picker.
 */
