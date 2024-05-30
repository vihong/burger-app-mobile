import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { OpaqueColorValue, StyleSheet, View } from "react-native"
import { theme } from "../../../style/theme"

type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap

export type IconProps = {
  name: MaterialCommunityIconName
  size?: number
  backgroundColor?: string | OpaqueColorValue
  color?: string | OpaqueColorValue
}

export default function Icon({
  name,
  size = 24,
  color = theme.colors.white,
  backgroundColor = theme.colors.black,
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

  return (
    <View style={styles.iconContainerStyle}>
      <MaterialCommunityIcons name={name} size={size / 2} color={color} />
    </View>
  )
}
