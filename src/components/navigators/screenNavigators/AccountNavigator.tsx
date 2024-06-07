import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import AccountScreen from "../../screens/AccountScreen"
import MessagesScreen from "../../screens/MessagesScreen"
import ListingsScreen from "../../screens/ListingsScreen"

export type AccountStackParamList = {
  AccountScreen: undefined
  ListingsScreen: undefined
  MessagesScreen: undefined
}

const AccountStack = createNativeStackNavigator<AccountStackParamList>()

export default function AccountNavigator() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ title: "My account" }}
      />
      <AccountStack.Screen
        name="ListingsScreen"
        component={ListingsScreen}
        options={{ title: "My products" }}
      />
      <AccountStack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{ title: "My messages" }}
      />
    </AccountStack.Navigator>
  )
}
