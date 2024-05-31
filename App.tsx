import { GestureHandlerRootView } from "react-native-gesture-handler"
import DraftScreen from "./src/components/screens/DraftScreen"
import FeedScreen from "./src/components/screens/FeedScreen"
import MessagesScreen from "./src/components/screens/MessagesScreen"
import ProductScreen from "./src/components/screens/ProductScreen"
import ViewImageScreen from "./src/components/screens/ViewImageScreen"
import WelcomeScreen from "./src/components/screens/WelcomeScreen"
import AccountScreen from "./src/components/screens/AccountScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerStyle: { backgroundColor: "dodgerblue" }, headerShown: true }}
          initialRouteName="Feed"
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerStyle: { backgroundColor: "tomato" } }}
          />
          <Stack.Screen
            name="Feed"
            component={FeedScreen}
            options={({ route }) => {
              return { title: `Bonjour ${route?.params?.name}` }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
