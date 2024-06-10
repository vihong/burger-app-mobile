import { Animated } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import { ImageSourcePropType } from "react-native"
import { PickerItemType } from "./Picker"

export type RenderRightActionsType = (
  progressAnimatedValue: Animated.AnimatedInterpolation<string | number>,
  dragAnimatedValue: Animated.AnimatedInterpolation<string | number>,
  swipeable: Swipeable
) => React.ReactNode

type Owner = {
  username: string
  profilPicture: ImageSourcePropType
  productsQuantity: number
}

export type ListItemType = {
  id: number
  title: string
  subtitle: string
  image: ImageSourcePropType
  owner?: Owner
}

export type ProductInfo = {
  id: string
  title: string
  price: number
  category?: string
  description?: string
  image?: ImageSourcePropType
  owner?: Owner
}

export type ProductType = {
  image: ImageSourcePropType
  owner?: Owner
} & ProductInfo
