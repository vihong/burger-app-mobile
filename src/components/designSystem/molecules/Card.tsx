import React from "react"
import styled from "styled-components/native"
import { ImageSourcePropType, StyleSheet, TouchableOpacityProps } from "react-native"
import Text from "../atoms/Text"
import { theme } from "../../../style/theme"

type CardProps = {
  title: string
  subtitle: string
  imageSource: ImageSourcePropType
} & TouchableOpacityProps

export default function Card({ title, subtitle, imageSource, ...restProps }: CardProps) {
  return (
    <CardStyle {...restProps}>
      <ImageStyled source={imageSource} resizeMode="cover" />
      <TextContainer>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </TextContainer>
    </CardStyle>
  )
}

const CardStyle = styled.TouchableOpacity`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRounded}px;
  overflow: hidden;
  margin-bottom: 20px;
`

const ImageStyled = styled.Image`
  height: 200px;
  width: 100%;
`

const TextContainer = styled.View`
  padding: 15px 20px;
`

const styles = StyleSheet.create({
  title: {
    ...theme.fonts.M,
    fontWeight: theme.weights.bold,
    marginBottom: 5,
  },
  subtitle: {
    ...theme.fonts.M,
    color: theme.colors.secondary,
    fontWeight: theme.weights.bold,
  },
})
