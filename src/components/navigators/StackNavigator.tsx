import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import WelcomeScreen from "../screens/WelcomeScreen"
import FeedScreen from "../screens/FeedScreen"
import { FeedScreenRouteProp, RootStackParamList } from "../../types/navigation"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
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
