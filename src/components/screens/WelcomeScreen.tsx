import React from "react"
import styled from "styled-components/native"
import Logo from "../designSystem/atoms/Logo"
import { theme } from "../../style/theme"
import Button from "../designSystem/atoms/Button"

const WELCOME_SCREEN_BACKGROUND_PICTURE = "../../assets/login-background.jpg"

export default function WelcomeScreen() {
  return (
    <WelcomeScreenStyled
      source={require(WELCOME_SCREEN_BACKGROUND_PICTURE)}
      blurRadius={theme.blurRadius.normal}
    >
      <LogoContainer>
        <Logo />
        <TextStyled>Sell What You Don't Need</TextStyled>
      </LogoContainer>
      <ButtonsStyled>
        <Button title="Login" onPress={() => {}} />
        <Button title="Register" onPress={() => {}} backgroundColor={theme.colors.secondary} />
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

const TextStyled = styled.Text`
  font-size: ${theme.fonts.titleXS.fontSize}px;
  font-weight: ${theme.weights.bold};
  top: 20px;
`

const ButtonsStyled = styled.View`
  margin-bottom: 50px;
  height: 110px;
  justify-content: space-between;
  padding: 0 20px;
`
