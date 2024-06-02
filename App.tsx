import { GestureHandlerRootView } from "react-native-gesture-handler"
import DraftScreen from "./src/components/screens/DraftScreen"
import MessagesScreen from "./src/components/screens/MessagesScreen"
import ProductScreen from "./src/components/screens/ProductScreen"
import ViewImageScreen from "./src/components/screens/ViewImageScreen"
import AccountScreen from "./src/components/screens/AccountScreen"
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./src/components/navigators/TabNavigator"
import StackNavigator from "./src/components/navigators/StackNavigator"

export default function App() {
  return (
    <GestureHandlerRootView>
      {/* maybe add to GestureHandlerRootView style={{ flex: 1 }} */}
      <NavigationContainer>
        {/* <StackNavigator /> */}
        <TabNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
