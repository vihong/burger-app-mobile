import React from "react"
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native"
import styled from "styled-components/native"
import { theme } from "../../../style/theme"

type ButtonProps = {
  title: string
  onPress: (event: GestureResponderEvent) => void
  textStyle?: StyleProp<TextStyle>
  backgroundStyle?: StyleProp<ViewStyle>
  backgroundColor?: string
}

export default function Button({ title, onPress, textStyle, backgroundColor }: ButtonProps) {
  return (
    <TouchableOpacityStyled onPress={onPress} backgroundColor={backgroundColor}>
      <TextStyled style={textStyle}>{title}</TextStyled>
    </TouchableOpacityStyled>
  )
}

type TouchableOpacityStyledProps = {
  backgroundColor?: string
}

const TouchableOpacityStyled = styled.TouchableOpacity<TouchableOpacityStyledProps>`
  padding: 15px 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.primary};
`

const TextStyled = styled.Text`
  font-size: ${theme.fonts.L.fontSize}px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${theme.colors.white};
`
