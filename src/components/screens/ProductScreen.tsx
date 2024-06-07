import React from "react"
import styled from "styled-components/native"
import Text from "../designSystem/atoms/Text"
import { Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import { theme } from "../../style/theme"
import ListItem from "../designSystem/molecules/ListItem"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { FeedStackParamList } from "../navigators/FeedNavigator"
import { TouchableOpacity } from "react-native-gesture-handler"

type ProductScreenProps = NativeStackScreenProps<FeedStackParamList, "ProductScreen">

export default function ProductScreen({ route, navigation }: ProductScreenProps) {
  const { product } = route.params

  return (
    <ProductScreenStyled>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("ViewImageScreen")}>
        <Image style={styles.image} source={product.image} resizeMode="cover" />
      </TouchableWithoutFeedback>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.subtitle}>${product.price}</Text>
      </View>
      <ListItem
        title={product.owner?.username}
        subtitle="5 products"
        imageSource={require("../../assets/mosh.jpg")}
      />
    </ProductScreenStyled>
  )
}

const ProductScreenStyled = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  textContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  title: {
    fontWeight: theme.weights.bold,
    ...theme.fonts.L,
  },
  subtitle: {
    fontWeight: theme.weights.bold,
    ...theme.fonts.M,
    color: theme.colors.secondary,
    marginTop: 5,
  },
})
