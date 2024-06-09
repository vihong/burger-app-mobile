import React from "react"
import Text from "../designSystem/atoms/Text"
import Screen from "../designSystem/atoms/Screen"
import Button from "../designSystem/atoms/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthRootStackParamList } from "../navigators/screenNavigators/AuthNavigator"
import Logo from "../designSystem/atoms/Logo"
import { StyleSheet, View } from "react-native"

type LoginScreenProps = NativeStackScreenProps<AuthRootStackParamList, "LoginScreen">

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <Screen>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Button title="Bonjour" onPress={() => navigation.navigate("WelcomeScreen")} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  logo: {
    // borderWidth: 1,
    // borderColor: "blue",
    display: "flex",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
})
