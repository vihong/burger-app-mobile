import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"
import Logo from "../designSystem/atoms/Logo"
import { theme } from "../../style/theme"

export default function WelcomeScreen() {
  return (
    <WelcomeScreenStyled source={require("../../assets/login-background.jpg")}>
      <LogoContainer>
        <Logo />
        <Text>Sell What You Don't Need</Text>
      </LogoContainer>
      <ButtonsStyled>
        <LoginButtonStyled />
        <RegisterButtonStyled />
      </ButtonsStyled>
    </WelcomeScreenStyled>
  )
}

const WelcomeScreenStyled = styled.ImageBackground`
  border: 1px solid red;
  flex: 1;
  justify-content: flex-end;
`

const LogoContainer = styled.View`
  height: 150px;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  position: absolute;
  top: 80px;
`

const ButtonsStyled = styled.View`
  background: blue;
`

const LoginButtonStyled = styled.View`
  background-color: ${theme.colors.primary};
  height: 100px;
`

const RegisterButtonStyled = styled.View`
  background-color: ${theme.colors.secondary};
  height: 100px;
`
