import React, { useState } from "react"
import Screen from "../designSystem/atoms/Screen"
import Button from "../designSystem/atoms/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthRootStackParamList } from "../navigators/screenNavigators/AuthNavigator"
import Logo from "../designSystem/atoms/Logo"
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from "react-native"
import TextInput from "../designSystem/atoms/TextInput"
import { Formik } from "formik"

type LoginScreenProps = NativeStackScreenProps<AuthRootStackParamList, "LoginScreen">

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const loginInfo = {
    email: "",
    password: "",
  }

  type ChangeEventReactNative = NativeSyntheticEvent<TextInputChangeEventData>
  type HandleChangeFormik = (value: string) => void

  const handleChangeReactNative = (handleChangeFormik: HandleChangeFormik) => {
    return (event: ChangeEventReactNative) => handleChangeFormik(event.nativeEvent.text)
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Formik initialValues={loginInfo} onSubmit={() => console.log("form submitted")}>
        {({ handleChange }) => (
          <View style={styles.form}>
            <TextInput
              onChange={handleChangeReactNative(handleChange("email"))}
              placeholder="Email"
              iconName="email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
            />
            <TextInput
              onChange={handleChangeReactNative(handleChange("password"))}
              placeholder="Password"
              iconName="lock"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="password"
              secureTextEntry
            />
            <Button title="Login" onPress={() => {}} />
          </View>
        )}
      </Formik>
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
