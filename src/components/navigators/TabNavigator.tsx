import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import WelcomeScreen from "../screens/WelcomeScreen"
import FeedScreen from "../screens/FeedScreen"
import AccountScreen from "../screens/AccountScreen"
import Icon, { MaterialCommunityIconName } from "../designSystem/atoms/Icon"
import Ionicons from "@expo/vector-icons/Ionicons"
import { theme } from "../../style/theme"
import SettingsScreen from "../screens/SettingsScreen"

const Tab = createBottomTabNavigator()

type RouteName = "Home" | "Feed" | "Account" | "Settings"

const iconNames: Record<RouteName, MaterialCommunityIconName> = {
  Home: "home-variant",
  Feed: "magnify",
  Account: "account",
  Settings: "home-variant",
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...tabNavigatorOptions,
        tabBarIcon: ({ size, color }) => {
          return <Icon name={iconNames[route.name as RouteName]} size={size} color={color} />
        },
        tabBarStyle: {
          backgroundColor: theme.colors.grey,
        },
      })}
    >
      <Tab.Screen name="Home" component={WelcomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        // tabBarIcon: ({ size, color }) => <Icon name="account" size={size} color={color} />,
      />
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
}
