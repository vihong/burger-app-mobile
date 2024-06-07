import React from "react"
import { Platform, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import styled from "styled-components/native"
import { theme } from "../../style/theme"
import Icon from "../designSystem/atoms/Icon"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { FeedStackParamList } from "../navigators/screenNavigators/FeedNavigator"
import Text from "../designSystem/atoms/Text"

type ViewImageScreenProps = NativeStackScreenProps<FeedStackParamList, "ViewImageScreen">

export default function ViewImageScreen({ navigation, route }: ViewImageScreenProps) {
  return (
    <ViewImageScreenStyled>
      <ImageStyled source={route.params.product.image} resizeMode="contain" />
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.iconClose}>
          <Text style={styles.fermer}>Close</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.iconTrash}>
          <Icon name="trash-can-outline" size={40} color="white" />
        </View>
      </TouchableWithoutFeedback>
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
  fermer: {
    ...theme.fonts.L,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: theme.borderRadius.rounded,

    borderColor: theme.colors.primary,
    color: theme.colors.primary,
  },
  iconTrash: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
  },
})
