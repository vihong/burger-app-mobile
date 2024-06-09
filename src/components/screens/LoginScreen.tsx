import React from "react"
import Screen from "../designSystem/atoms/Screen"
import Button from "../designSystem/atoms/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthRootStackParamList } from "../navigators/screenNavigators/AuthNavigator"
import Logo from "../designSystem/atoms/Logo"
import { StyleSheet, View } from "react-native"
import { validationSchema } from "@/utils/validation"
import Field from "../designSystem/molecules/Field"
import { handleChangeReactNative } from "@/utils/typescript"
import { Formik } from "formik"

type LoginScreenProps = NativeStackScreenProps<AuthRootStackParamList, "LoginScreen">

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const loginInfo = {
    email: "",
    password: "",
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
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={styles.form}>
            <Field
              placeholder="Email"
              onChange={handleChangeReactNative(handleChange("email"))}
              onBlur={() => setFieldTouched("email")}
              errorMessage={errors.email}
              isErrorVisible={touched.email}
              key={"email"}
              iconName="email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
            />
            <Field
              placeholder="Password"
              onChange={handleChangeReactNative(handleChange("password"))}
              onBlur={() => setFieldTouched("password")}
              errorMessage={errors.password}
              isErrorVisible={touched.password}
              key={"password"}
              iconName="lock"
            />
            <Button title="Login" onPress={() => handleSubmit()} style={styles.button} />
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
