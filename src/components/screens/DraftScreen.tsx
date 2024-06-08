import { StyleSheet } from "react-native"
import Screen from "../designSystem/atoms/Screen"
import { theme } from "../../style/theme"
import { useState } from "react"
import TextInput from "../designSystem/atoms/TextInput"
import Text from "../designSystem/atoms/Text"

export default function DraftScreen() {
  const [inputValue, setInputValue] = useState("")

  return (
    <Screen>
      {/* <Text>{inputValue}</Text> */}
      <TextInput
        value={inputValue}
        onChange={(event) => setInputValue(event.nativeEvent.text)}
        placeholder="Entrez votre nom"
        style={styles.input}
        clearButtonMode="while-editing"
        iconName="email"
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  input: {},
})
