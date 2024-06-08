import { StyleSheet } from "react-native"
import Screen from "../designSystem/atoms/Screen"
import { theme } from "../../style/theme"
import { useState } from "react"
import TextInput from "../designSystem/atoms/TextInput"
import Text from "../designSystem/atoms/Text"
import Picker from "../designSystem/atoms/Picker"
import { categories } from "@/constants/fakeData"

export default function DraftScreen() {
  const [inputValue, setInputValue] = useState("")

  return (
    <Screen>
      {/* <Text>{inputValue}</Text> */}
      <Picker placeholder="Choisissez une catégorie" items={categories} />
      <TextInput placeholder="Choisissez une catégorie" iconName="apps" />
    </Screen>
  )
}

const styles = StyleSheet.create({
  input: {},
})
