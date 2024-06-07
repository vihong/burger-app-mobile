import React from "react"
import { Platform, StatusBar, StyleSheet, View } from "react-native"
import styled from "styled-components/native"
import { theme } from "../../style/theme"
import Icon from "../designSystem/atoms/Icon"

export default function ViewImageScreen() {
  return (
    <ViewImageScreenStyled>
      {/* <View style={styles.iconClose}>
        <Icon name="close" size={40} color="white" />
      </View> */}
      <View style={styles.iconTrash}>
        <Icon name="trash-can-outline" size={40} color="white" />
      </View>
      <ImageStyled source={require("../../assets/chair.jpg")} resizeMode="contain" />
    </ViewImageScreenStyled>
  )
}

const ViewImageScreenStyled = styled.SafeAreaView`
  background: ${theme.colors.black};
  flex: 1;
`

const ImageStyled = styled.Image`
  height: 100%;
  width: 100%;
`

const styles = StyleSheet.create({
  iconClose: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  iconTrash: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
  },
})
