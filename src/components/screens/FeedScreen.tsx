import React, { useState } from "react"
import Card from "../designSystem/molecules/Card"
import { FlatList, StyleSheet, View } from "react-native"
import { ProductType } from "../../types/ListItem"
import Screen from "../designSystem/atoms/Screen"

const fakeProducts: ProductType[] = [
  {
    id: 1,
    title: "Red jacket for sale!",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition!",
    price: 900,
    image: require("../../assets/couch.jpg"),
  },
]

export default function FeedScreen() {
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
