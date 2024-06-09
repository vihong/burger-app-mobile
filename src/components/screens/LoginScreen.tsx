import React, { useState } from "react"
import Screen from "../designSystem/atoms/Screen"
import Button from "../designSystem/atoms/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthRootStackParamList } from "../navigators/screenNavigators/AuthNavigator"
import Logo from "../designSystem/atoms/Logo"
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from "react-native"
import TextInput from "../designSystem/atoms/TextInput"

type LoginScreenProps = NativeStackScreenProps<AuthRootStackParamList, "LoginScreen">

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState("") // ❌
  const [password, setPassword] = useState("") // ❌
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  }) // ✅

  const handeSubmit = () => {}

  const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>, key: string) => {
    const newKey = key
    const newValue = event.nativeEvent.text
    console.log("newKey: ", newKey)
    console.log("newValue: ", newValue)

    const newloginInfo = {
      ...loginInfo,
      [newKey]: newValue, // dynamic property key & dynamic property value
    }
    setLoginInfo(newloginInfo)
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.form}>
        <TextInput
          value={loginInfo.email}
          onChange={(event) => handleChange(event, "email")}
          placeholder="Email"
          iconName="email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
        />
        <TextInput
          value={loginInfo.password}
          onChange={(event) => handleChange(event, "password")}
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
