import React from "react"
import {
  StyleSheet,
  View,
  TextInput as ReactNativeTextInput,
  TextInputProps as RNTextInputProps,
  Platform,
  StyleProp,
  TextStyle,
} from "react-native"
import Icon, { MaterialCommunityIconName } from "./Icon"
import { getPlatformFontFamily, theme } from "../../../style/theme"

type TextInputProps = {
  iconName?: MaterialCommunityIconName
  style?: StyleProp<TextStyle>
  hasSuccess?: boolean
} & RNTextInputProps

export default function TextInput({ iconName, style, hasSuccess, ...restProps }: TextInputProps) {
  return (
    <View style={styles.textInputContainer}>
      {iconName && (
        <Icon
          style={[styles.iconLeft, style]}
          name={iconName}
          color={theme.colors.greyDark}
          size={30}
        />
      )}
      <ReactNativeTextInput {...restProps} style={styles.textInput} />
      {hasSuccess && (
        <Icon
          style={[styles.iconRight, style]}
          name={"check-circle"}
          color={theme.colors.greyDark}
          size={30}
        />
      )}
    </View>
  )
}

export const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderColor: theme.colors.grey,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    borderRadius: theme.borderRadius.maxRounded,
    width: "100%",
    backgroundColor: "white",
  },
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    // marginRight: 10,
    color: theme.colors.success,
  },
  textInput: {
    fontFamily: getPlatformFontFamily(Platform.OS),
    ...theme.fonts.titleXS,
    color: theme.colors.dark,
    // borderWidth: 1,
    flex: 1,
  },
})
