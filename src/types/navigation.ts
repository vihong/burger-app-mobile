import { RouteProp } from "@react-navigation/native"

export type FeedScreenParams = {
  name: string
}

export type RootStackParamList = {
  Welcome: undefined
  Feed: FeedScreenParams
}

export type FeedScreenRouteProp = RouteProp<RootStackParamList, "Feed">
