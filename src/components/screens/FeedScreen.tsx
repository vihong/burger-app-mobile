import React, { useState } from "react"
import Card from "../designSystem/molecules/Card"
import { FlatList, StyleSheet, View } from "react-native"
import Screen from "../designSystem/atoms/Screen"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { fakeProducts } from "../../constants/fakeData"
import { FeedStackParamList } from "../navigators/FeedNavigator"

export type FeedScreenProps = NativeStackScreenProps<FeedStackParamList, "FeedScreen">

export default function FeedScreen({ navigation }: FeedScreenProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [products, setProducts] = useState(fakeProducts)

  const handleRefresh = () => {
    setProducts([fakeProducts[1]])
  }

  return (
    <Screen>
      <View style={styles.cardsContainer}>
        <FlatList
          data={products}
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ index, item: product }) => (
            <Card
              title={product.title}
              subtitle={`$${product.price}`}
              imageSource={product.image}
              onPress={() => navigation.navigate("ProductScreen")}
            />
          )}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  cardsContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
})
