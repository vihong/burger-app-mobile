import React from "react"
import styled from "styled-components/native"
import { Platform, TextProps as ReactNativeTextProps, StyleProp, TextStyle } from "react-native"
import { getPlatformFontFamily } from "../../../style/theme"

type TextProps = {
  children: React.ReactNode
  style?: StyleProp<TextStyle>
} & ReactNativeTextProps

export default function Text({ children, style }: TextProps) {
  return <TextStyled style={style}>{children}</TextStyled>
}

const TextStyled = styled.Text`
  font-family: ${() => getPlatformFontFamily(Platform.OS)};
`
