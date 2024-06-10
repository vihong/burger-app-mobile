import { GestureHandlerRootView } from "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./src/components/navigators/tabNavigators/TabNavigator"
import AuthNavigator from "./src/components/navigators/screenNavigators/AuthNavigator"
import navigatorTheme from "./src/style/navigatorTheme"
import { useState } from "react"
import DraftScreen from "@/components/screens/DraftScreen"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <GestureHandlerRootView>
      {/* maybe add to GestureHandlerRootView style={{ flex: 1 }} */}
      <NavigationContainer theme={navigatorTheme}>
        {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
