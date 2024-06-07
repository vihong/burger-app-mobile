import React from "react"
import styled from "styled-components/native"
import Logo from "../designSystem/atoms/Logo"
import { theme } from "../../style/theme"
import Button from "../designSystem/atoms/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthRootStackParamList } from "../navigators/AuthNavigator"

const WELCOME_SCREEN_BACKGROUND_PICTURE = "../../assets/login-background.jpg"

type WelcomeScreenProps = NativeStackScreenProps<AuthRootStackParamList, "Welcome">

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const handleLogin = () => {
    navigation.navigate("Login")
  }

  const handleRegister = () => {
    navigation.navigate("Register")
  }

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
        <Button title="Login" onPress={handleLogin} />
        <Button
          title="Register"
          onPress={handleRegister}
          backgroundColor={theme.colors.secondary}
        />
      </ButtonsStyled>
    </WelcomeScreenStyled>
  )
}

const WelcomeScreenStyled = styled.ImageBackground`
  /* border: 1px solid red; */
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
  height: 120px;
  justify-content: space-between;
  padding: 0 20px;
`
