import React from "react"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/login-background.jpg")}
      style={styles.imageBackground}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.login}></View>
        <View style={styles.register}></View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logoContainer: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,

    position: "absolute",
    top: 80,
  },
  form: {
    backgroundColor: "blue",
  },
  logo: {
    height: 100,
    width: 100,
  },
  login: {
    backgroundColor: "(#fc5c65)",
    height: 100,
  },
  register: {
    backgroundColor: "#4ECDC4",
    height: 100,
  },
})
