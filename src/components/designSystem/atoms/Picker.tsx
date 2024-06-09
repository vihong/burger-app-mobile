import React, { useState } from "react"
import {
  View,
  ViewStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Modal,
  Button,
  FlatList,
  StyleSheet,
} from "react-native"
import Icon, { MaterialCommunityIconName } from "./Icon"
import { theme } from "../../../style/theme"
import Text from "./Text"
import { styles as textInputStyles } from "./TextInput"
import Screen from "./Screen"
import PickerItem from "./PickerItem"
import { PickerItemType } from "@/types/Picker"

type PickerProps<T extends PickerItemType> = {
  placeholder: string
  items: T[]
  iconName?: MaterialCommunityIconName
  style?: ViewStyle
  itemByDefault?: T
  numberOfColumns?: number
} & TouchableWithoutFeedbackProps

export default function Picker<T extends PickerItemType>({
  placeholder,
  iconName = "apps",
  style,
  items,
  itemByDefault,
  numberOfColumns,
  ...restProps
}: PickerProps<T>) {
  const [itemSelected, setItemSelected] = useState<PickerItemType | undefined>(itemByDefault)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleSelectItem = (item: PickerItemType) => {
    setItemSelected(item)
    setIsModalVisible(false)
  }

  const getPlaceholderColor = () => {
    return itemSelected ? theme.colors.dark : theme.colors.greySemiDark
  }

  return (
    <>
      <TouchableWithoutFeedback {...restProps} onPress={() => setIsModalVisible(true)}>
        <View style={styles.textInputContainer}>
          {iconName && (
            <Icon
              style={[styles.iconLeft, style]}
              name={itemSelected ? itemSelected.iconName : iconName}
              color={theme.colors.greyDark}
              size={30}
            />
          )}
          <Text style={[styles.textInput, { color: getPlaceholderColor() }]}>
            {itemSelected ? itemSelected.label : placeholder}
          </Text>
          <Icon name={"chevron-down"} color={theme.colors.greyDark} size={30} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isModalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
          <View style={styles.flatListContainer}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.id}
              numColumns={numberOfColumns}
              renderItem={({ item }) => {
                return <PickerItem {...item} onPress={() => handleSelectItem(item)} />
              }}
            />
          </View>
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  ...textInputStyles,
  flatListContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

/**
 * About styling:
 * This Picker component uses the same styling as TextInput because :
 * 1) they both should look similar for aesthetic reasons
 * 2) TextInput was created BEFORE Picker.
 */
