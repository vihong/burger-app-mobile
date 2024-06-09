import React from "react"
import Screen from "../designSystem/atoms/Screen"
import Button from "../designSystem/atoms/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthRootStackParamList } from "../navigators/screenNavigators/AuthNavigator"
import Logo from "../designSystem/atoms/Logo"
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from "react-native"
import TextInput from "../designSystem/atoms/TextInput"
import { Formik } from "formik"
import Text from "../designSystem/atoms/Text"
import { theme } from "@/style/theme"
import { validationSchema } from "@/utils/validation"

type LoginScreenProps = NativeStackScreenProps<AuthRootStackParamList, "LoginScreen">

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const loginInfo = {
    email: "",
    password: "",
  }

  type ChangeEventReactNative = NativeSyntheticEvent<TextInputChangeEventData>
  type HandleChangeFormik = (value: string) => void

  const handleChangeReactNative = (handleChangeFormik: HandleChangeFormik) => {
    let qqchTantQueCestUneString: string // tant que c'est les noms des champs de notre form
    return (event: ChangeEventReactNative) => handleChangeFormik(qqchTantQueCestUneString)
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Formik
        initialValues={loginInfo}
        onSubmit={() => console.log("form submitted")}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors }) => (
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
            <Text style={styles.error}>{errors.email}</Text>
            <TextInput
              onChange={handleChangeReactNative(handleChange("password"))}
              placeholder="Password"
              iconName="lock"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="password"
              secureTextEntry
            />
            <Text style={styles.error}>{errors.password}</Text>
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
  error: {
    color: theme.colors.danger,
  },
})
