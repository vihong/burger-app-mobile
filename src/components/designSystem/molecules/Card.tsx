import React from "react"
import styled from "styled-components/native"
import { theme } from "../../../style/theme"
import Text from "../atoms/Text"
import { StyleSheet } from "react-native"

export default function Card() {
  return (
    <CardStyled>
      <ImageStyled source={require("../../../assets/jacket.jpg")} resizeMode="cover" />
      <DetailsStyled>
        <Text style={styles.title}>Red jacket for sale!</Text>
        <Text style={styles.price}>$100</Text>
      </DetailsStyled>
    </CardStyled>
  )
}

const CardStyled = styled.View`
  /* border: 2px solid green; */
  height: 300px;
  width: 90%;
  border-radius: ${theme.borderRadius.extraRounded}px;
  overflow: hidden;
`

const ImageStyled = styled.Image`
  background: yellow;
  flex: 3.5;
  width: 100%;
  border-top-left-radius: ${theme.borderRadius.extraRounded}px;
  border-top-right-radius: ${theme.borderRadius.extraRounded}px;
`

const DetailsStyled = styled.View`
  flex: 1;
  background: ${theme.colors.white};
  padding: 20px;
  justify-content: space-between;
  border-bottom-left-radius: ${theme.borderRadius.extraRounded}px;
  border-bottom-right-radius: ${theme.borderRadius.extraRounded}px;
`

const styles = StyleSheet.create({
  title: {
    fontWeight: theme.weights.bold,
  },
  price: {
    fontWeight: "bold",
    color: theme.colors.secondary,
  },
})
