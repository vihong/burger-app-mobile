import React from "react"
import styled from "styled-components/native"
import { Platform, TextProps as ReactNativeTextProps } from "react-native"
import { getPlatformFontFamily, theme } from "../../../style/theme"

type TextProps = {
  children: React.ReactNode
} & ReactNativeTextProps

export default function Text({ children }: TextProps) {
  return <TextStyled>{children}</TextStyled>
}

const TextStyled = styled.Text`
  ${theme.fonts.title}
  font-family: ${() => getPlatformFontFamily(Platform.OS)}
`
