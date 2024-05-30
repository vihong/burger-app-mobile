import React from "react"
import { GestureResponderEvent, StyleProp, TextStyle, TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { theme } from "../../../style/theme"

type ButtonProps = {
  title: string
  onPress: (event: GestureResponderEvent) => void
  textStyle?: StyleProp<TextStyle>
}

export default function Button({ title, onPress, textStyle }: ButtonProps) {
  return (
    <TouchableOpacityStyled onPress={onPress}>
      <TextStyled style={textStyle}>{title}</TextStyled>
    </TouchableOpacityStyled>
  )
}

const TouchableOpacityStyled = styled.TouchableOpacity`
  padding: 12px 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${theme.colors.primary};
`

const TextStyled = styled.Text`
  font-size: ${theme.fonts.S.fontSize}px;
  line-height: ${theme.fonts.S.lineHeight}px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${theme.colors.white};
`
