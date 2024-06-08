import { StyleSheet } from "react-native"
import Screen from "../designSystem/atoms/Screen"
import { theme } from "../../style/theme"
import { useState } from "react"
import TextInput from "../designSystem/atoms/TextInput"
import Text from "../designSystem/atoms/Text"
import Picker from "../designSystem/atoms/Picker"
import { categories } from "@/constants/fakeData"
import { PickerItemType } from "@/types/Picker"

export default function DraftScreen() {
  const [inputValue, setInputValue] = useState("")
  const [itemSelected, setItemSelected] = useState<PickerItemType | undefined>(undefined)

  return (
    <Screen>
      {/* <Text>{inputValue}</Text> */}
      <Picker
        placeholder="Choisissez une catégorie"
        items={categories}
        // itemByDefault={categories[3]}
        numberOfColumns={3}
      />
      <TextInput placeholder="Choisissez une catégorie" iconName="apps" />
    </Screen>
  )
}

const styles = StyleSheet.create({
  input: {},
})
