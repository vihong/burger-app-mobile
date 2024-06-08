import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { OpaqueColorValue, StyleSheet, View, ViewProps, ViewStyle } from "react-native"
import { theme } from "../../../style/theme"

export type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap

export type IconProps = {
  name: MaterialCommunityIconName
  size?: number
  backgroundColor?: string | OpaqueColorValue
  color?: string | OpaqueColorValue
  IsInCircle?: boolean
  style?: ViewStyle
} & ViewProps

export default function Icon({
  name,
  size = 24,
  color = theme.colors.white,
  backgroundColor = theme.colors.black,
  IsInCircle,
  style,
}: IconProps) {
  const styles = StyleSheet.create({
    iconContainerStyle: {
      height: size,
      width: size,
      borderRadius: size / 2,
      backgroundColor: backgroundColor,
      justifyContent: "center",
      alignItems: "center",
    },
  })

  if (IsInCircle)
    return (
      <View style={[styles.iconContainerStyle, style]}>
        <MaterialCommunityIcons name={name} size={size / 2} color={color} />
      </View>
    )

  return <MaterialCommunityIcons name={name} size={size} color={color} style={style} />
}
