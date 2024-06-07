import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import AccountScreen from "../../screens/AccountScreen"
import Icon, { MaterialCommunityIconName } from "../../designSystem/atoms/Icon"
import Ionicons from "@expo/vector-icons/Ionicons"
import { theme } from "../../../style/theme"
import SettingsScreen from "../../screens/SettingsScreen"
import FeedNavigator from "../screenNavigators/FeedNavigator"
import AccountNavigator from "../screenNavigators/AccountNavigator"

export type RootTabParamList = {
  FeedNavigator: undefined | { name?: string }
  AccountNavigator: undefined
  SettingsScreen: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()

type TabName = keyof RootTabParamList

type IconValues = [MaterialCommunityIconName, MaterialCommunityIconName]

const iconNames: Record<TabName, IconValues> = {
  FeedNavigator: ["magnify-minus", "magnify-plus"],
  AccountNavigator: ["account", "account-outline"],
  SettingsScreen: ["account", "account-outline"],
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
      <Tab.Screen name="FeedNavigator" component={FeedNavigator} options={{ title: "Feed" }} />
      <Tab.Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{ title: "Account" }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: "Settings",
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
