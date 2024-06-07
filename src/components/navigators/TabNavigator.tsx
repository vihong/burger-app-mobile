import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import FeedScreen from "../screens/FeedScreen"
import AccountScreen from "../screens/AccountScreen"
import Icon, { MaterialCommunityIconName } from "../designSystem/atoms/Icon"
import Ionicons from "@expo/vector-icons/Ionicons"
import { theme } from "../../style/theme"
import SettingsScreen from "../screens/SettingsScreen"
import StackNavigator from "./StackNavigator"

export type RootTabParamList = {
  Home: undefined
  Feed: { name: string }
  Account: undefined
  Settings: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()

type TabName = keyof RootTabParamList

type IconValues = [MaterialCommunityIconName, MaterialCommunityIconName]

const iconNames: Record<TabName, IconValues> = {
  Home: ["home-variant", "home-variant-outline"],
  Feed: ["magnify-minus", "magnify-plus"],
  Account: ["account", "account-outline"],
  Settings: ["account", "account-outline"],
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...tabNavigatorOptions,
        tabBarIcon: ({ size, color, focused }) => (
          <Icon
            name={iconNames[route.name as TabName][focused ? 0 : 1]}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? "settings-sharp" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const tabNavigatorOptions = {
  tabBarActiveTintColor: theme.colors.black,
  tabBarInactiveBackgroundColor: theme.colors.grey,
  tabBarInactiveTintColor: "#000",
  headerShown: false,
  tabBarStyle: { backgroundColor: theme.colors.grey },
}
