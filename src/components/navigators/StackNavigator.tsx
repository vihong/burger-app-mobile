import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import FeedScreen from "../screens/FeedScreen"

export type RootStackParamList = {
  Feed: undefined | { name?: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Feed" component={FeedScreen} />
    </Stack.Navigator>
  )
}
