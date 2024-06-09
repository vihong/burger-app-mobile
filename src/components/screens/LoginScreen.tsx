import React from "react"
import Screen from "../designSystem/atoms/Screen"
import Button from "../designSystem/atoms/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthRootStackParamList } from "../navigators/screenNavigators/AuthNavigator"
import Logo from "../designSystem/atoms/Logo"
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from "react-native"
import TextInput from "../designSystem/atoms/TextInput"
import { Formik } from "formik"
import { validationSchema } from "@/utils/validation"
import ErrorMessage from "../designSystem/molecules/ErrorMessage"

type LoginScreenProps = NativeStackScreenProps<AuthRootStackParamList, "LoginScreen">

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const loginInfo = {
    email: "",
    password: "",
  }

  type ChangeEventReactNative = NativeSyntheticEvent<TextInputChangeEventData>
  type HandleChangeFormik = (value: string) => void

  const handleChangeReactNative = (handleChangeFormik: HandleChangeFormik) => {
    // pense bien à transvaser le contenu du event.nativeEvent.text into les paramètres handleChangeFormik
    return (event: ChangeEventReactNative) => handleChangeFormik(event.nativeEvent.text)
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
        {/* FORMIK JSX */}
        {({ handleChange, errors, setFieldTouched, touched }) => (
          <View style={styles.form}>
            <TextInput
              placeholder="Email"
              onChange={handleChangeReactNative(handleChange("email"))}
              onBlur={() => setFieldTouched("email")}
              iconName="email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
            />
            {<ErrorMessage errorMessage={errors.email} isVisible={touched.email} />}
            <TextInput
              placeholder="Password"
              onChange={handleChangeReactNative(handleChange("password"))}
              onBlur={() => setFieldTouched("password")}
              iconName="lock"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="password"
              secureTextEntry
            />
            <ErrorMessage errorMessage={errors.password} isVisible={touched.password} />
            <Button title="Login" onPress={() => {}} style={styles.button} />
          </View>
        )}
      </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  logo: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  form: {
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
  },
})
