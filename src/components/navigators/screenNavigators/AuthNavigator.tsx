import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "../../screens/WelcomeScreen"
import RegisterScreen from "../../screens/RegisterScreen"
import LoginScreen from "../../screens/LoginScreen"

export type AuthRootStackParamList = {
  WelcomeScreen: undefined
  LoginScreen: undefined
  RegisterScreen: undefined
}

const AuthStack = createNativeStackNavigator<AuthRootStackParamList>()

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerBackTitle: "Welcome", title: "Login" }}
      />
      <AuthStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerBackTitle: "Welcome", title: "Register" }}
      />
    </AuthStack.Navigator>
  )
}
