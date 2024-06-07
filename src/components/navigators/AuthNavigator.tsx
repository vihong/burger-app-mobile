import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "../screens/WelcomeScreen"
import RegisterScreen from "../screens/RegisterScreen"
import LoginScreen from "../screens/LoginScreen"

export type AuthRootStackParamList = {
  Welcome: undefined
  Login: undefined
  Register: undefined
}

const AuthStack = createNativeStackNavigator<AuthRootStackParamList>()

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen}></AuthStack.Screen>
      <AuthStack.Screen name="Login" component={LoginScreen}></AuthStack.Screen>
      <AuthStack.Screen name="Register" component={RegisterScreen}></AuthStack.Screen>
    </AuthStack.Navigator>
  )
}
