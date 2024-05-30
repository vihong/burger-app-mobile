import { GestureHandlerRootView } from "react-native-gesture-handler"
import DraftScreen from "./src/components/screens/DraftScreen"
import FeedScreen from "./src/components/screens/FeedScreen"
import MessagesScreen from "./src/components/screens/MessagesScreen"
import ProductScreen from "./src/components/screens/ProductScreen"
import ViewImageScreen from "./src/components/screens/ViewImageScreen"
import WelcomeScreen from "./src/components/screens/WelcomeScreen"
import AccountScreen from "./src/components/screens/AccountScreen"

export default function App() {
  return (
    <GestureHandlerRootView>
      <AccountScreen />
    </GestureHandlerRootView>
  )
}
