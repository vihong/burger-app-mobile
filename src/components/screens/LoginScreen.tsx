import React from "react"
import Text from "../designSystem/atoms/Text"
import Screen from "../designSystem/atoms/Screen"
import Button from "../designSystem/atoms/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthRootStackParamList } from "../navigators/AuthNavigator"

type LoginScreenProps = NativeStackScreenProps<AuthRootStackParamList, "LoginScreen">

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <Screen>
      <Text>LoginScreen</Text>
      <Button title="Bonjour" onPress={() => navigation.navigate("WelcomeScreen")} />
    </Screen>
  )
}
