import React from "react"
import styled from "styled-components/native"
import Text from "../designSystem/atoms/Text"
import { Image, StyleSheet, View } from "react-native"
import { theme } from "../../style/theme"
import ListItem from "../designSystem/molecules/ListItem"

export default function ProductScreen() {
  return (
    <ProductScreenStyled>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Red jacket for sale!</Text>
        <Text style={styles.subtitle}>$100</Text>
      </View>
      <ListItem
        title="Mosh Hamedani"
        subtitle="5 products"
        imageSource={require("../../assets/mosh.jpg")}
      />
    </ProductScreenStyled>
  )
}

const ProductScreenStyled = styled.View`
  border: 1px solid red;
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