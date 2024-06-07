import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import FeedScreen from "../../screens/FeedScreen"
import ProductScreen from "../../screens/ProductScreen"
import ViewImageScreen from "../../screens/ViewImageScreen"
import { ProductType } from "../../../types/ListItem"

export type FeedStackParamList = {
  FeedScreen: undefined
  ProductScreen: { product: ProductType }
  ViewImageScreen: undefined
}

const FeedStack = createNativeStackNavigator<FeedStackParamList>()

export default function FeedNavigator() {
  return (
    <FeedStack.Navigator screenOptions={{ headerShown: true }}>
      <FeedStack.Screen name="FeedScreen" component={FeedScreen} options={{ title: "Feed" }} />
      <FeedStack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ title: "Product infos", headerShown: false }}
      />
      <FeedStack.Screen
        name="ViewImageScreen"
        component={ViewImageScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
    </FeedStack.Navigator>
  )
}
