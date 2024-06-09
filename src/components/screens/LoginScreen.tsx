import React, { useState } from "react"
import Screen from "../designSystem/atoms/Screen"
import Button from "../designSystem/atoms/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthRootStackParamList } from "../navigators/screenNavigators/AuthNavigator"
import Logo from "../designSystem/atoms/Logo"
import { StyleSheet, View } from "react-native"
import TextInput from "../designSystem/atoms/TextInput"

type LoginScreenProps = NativeStackScreenProps<AuthRootStackParamList, "LoginScreen">

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handeSubmit = () => {
    console.log(email, password)
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.form}>
        <TextInput
          value={email}
          onChange={(event) => setEmail(event.nativeEvent.text)}
          placeholder="Email"
          iconName="email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
        />
        <TextInput
          value={password}
          onChange={(event) => setPassword(event.nativeEvent.text)}
          placeholder="Password"
          iconName="lock"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="password"
          secureTextEntry
        />
        <Button title="Login" onPress={handeSubmit} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    borderWidth: 1,
    borderColor: "blue",
  },
  logo: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  form: {
    paddingHorizontal: 10,
  },
})
