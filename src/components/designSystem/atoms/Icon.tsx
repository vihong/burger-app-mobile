import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { OpaqueColorValue } from "react-native"

type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap

type IconProps = {
  name: MaterialCommunityIconName
  size?: number
  color?: string | OpaqueColorValue
}

export default function Icon({ name, size = 24, color }: IconProps) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />
}
