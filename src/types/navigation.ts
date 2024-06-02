import { RouteProp } from "@react-navigation/native"

export type FeedScreenParams = {
  name: string
}

export type RootStackParamList = {
  Home: undefined
  Feed: FeedScreenParams
}

export type FeedScreenRouteProp = RouteProp<RootStackParamList, "Feed">
