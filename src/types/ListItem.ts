import { Animated } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import { ImageSourcePropType } from "react-native"

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

export type ProductType = {
  id: number
  title: string
  price: number
  image: ImageSourcePropType
  owner?: Owner
}
