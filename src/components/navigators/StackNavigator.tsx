import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import WelcomeScreen from "../screens/WelcomeScreen"
import FeedScreen from "../screens/FeedScreen"
import { RootStackParamList } from "../../types/navigation"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Feed" component={FeedScreen} />
    </Stack.Navigator>
  )
}
