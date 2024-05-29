import React from "react"
import styled from "styled-components/native"
import { Platform, TextProps as ReactNativeTextProps } from "react-native"

type TextProps = {
  children: React.ReactNode
} & ReactNativeTextProps

export default function Text({ children }: TextProps) {
  return <TextStyled>{children}</TextStyled>
}

const TextStyled = styled.Text`
  font-size: 18px;
  font-family: ${Platform.select({
    ios: "Avenir",
    android: "Roboto",
    default: "System",
  })};
`
