import React from "react"
import styled from "styled-components/native"

export default function Logo() {
  return <ImageStyled source={require("../../../assets/logo-red.png")} />
}

const ImageStyled = styled.Image`
  height: 100px;
  width: 100px;
`
