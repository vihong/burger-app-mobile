import React from "react"
import {
  StyleSheet,
  View,
  TextInput as ReactNativeTextInput,
  TextInputProps as RNTextInputProps,
  Platform,
  ViewStyle,
} from "react-native"
import Icon, { MaterialCommunityIconName } from "./Icon"
import { getPlatformFontFamily, theme } from "../../../style/theme"

type TextInputProps = {
  iconName?: MaterialCommunityIconName
  style: ViewStyle
} & RNTextInputProps

export default function TextInput({ iconName, style, ...restProps }: TextInputProps) {
  return (
    <View style={styles.textInputContainer}>
      {iconName && (
        <Icon
          style={[styles.icon, style]}
          name={iconName}
          color={theme.colors.greyDark}
          size={30}
        />
      )}
      <ReactNativeTextInput {...restProps} style={styles.textInput} />
    </View>
  )
}

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderColor: theme.colors.grey,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderRadius: theme.borderRadius.maxRounded,
    width: "100%",
    backgroundColor: "white",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontFamily: getPlatformFontFamily(Platform.OS),
    ...theme.fonts.titleXS,
    color: theme.colors.dark,
    // borderWidth: 1,
    flex: 1,
  },
})
