import React from "react"
import { Image, Platform, StatusBar } from "react-native"
import styled from "styled-components/native"
import { theme } from "../../style/theme"

export default function ViewImageScreen() {
  return (
    <ViewImageScreenStyled>
      <CloseButton />
      <DeleteButton />
      <ImageStyled source={require("../../assets/chair.jpg")} resizeMode="contain" />
    </ViewImageScreenStyled>
  )
}

const ViewImageScreenStyled = styled.SafeAreaView`
  background: ${theme.colors.darkBackground};
  flex: 1;
`

const ImageStyled = styled.Image`
  height: 100%;
  width: 100%;
`

const CloseButton = styled.View`
  background: tomato;
  height: 50px;
  width: 50px;
  position: absolute;
  top: ${Platform.OS === "android" ? StatusBar.currentHeight : "40px"};
  left: 30px;
`

const DeleteButton = styled.View`
  background: turquoise;
  height: 50px;
  width: 50px;
  position: absolute;
  top: ${Platform.OS === "android" ? StatusBar.currentHeight : "40px"};
  right: 30px;
`
