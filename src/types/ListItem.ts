import { Animated } from "react-native"
import { Swipeable } from "react-native-gesture-handler"

export type RenderRightActionsType = (
  progressAnimatedValue: Animated.AnimatedInterpolation<string | number>,
  dragAnimatedValue: Animated.AnimatedInterpolation<string | number>,
  swipeable: Swipeable
) => React.ReactNode
