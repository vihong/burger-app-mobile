import { MaterialCommunityIconName } from "@/components/designSystem/atoms/Icon"
import { OpaqueColorValue } from "react-native"

export type PickerItemType = {
  id: string
  label: string
  iconName: MaterialCommunityIconName
  iconColor?: string | OpaqueColorValue
}

export interface CategoryType extends PickerItemType {
  value: number
}
