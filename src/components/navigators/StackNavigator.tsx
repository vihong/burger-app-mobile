import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import WelcomeScreen from "../screens/WelcomeScreen"
import FeedScreen from "../screens/FeedScreen"
import { RouteProp } from "@react-navigation/native"

type FeedScreenParams = {
  name: string
}

type RootStackParamList = {
  Welcome: undefined
  Feed: FeedScreenParams
}

type FeedScreenRouteProp = RouteProp<RootStackParamList, "Feed">

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerStyle: { backgroundColor: "tomato" } }}
      />
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={({ route }: { route: FeedScreenRouteProp }) => {
          return { title: `Bonjour ${route.params.name}` }
        }}
      />
    </Stack.Navigator>
  )
}
