import { GestureHandlerRootView } from "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./src/components/navigators/TabNavigator"

export default function App() {
  return (
    <GestureHandlerRootView>
      {/* maybe add to GestureHandlerRootView style={{ flex: 1 }} */}
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
