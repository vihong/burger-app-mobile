import React from "react"
import { FlatList, View } from "react-native"
import Text from "../designSystem/atoms/Text"
import ListItem from "../designSystem/molecules/ListItem"
import Screen from "../designSystem/atoms/Screen"
import ListItemSeparator from "../designSystem/atoms/ListItemSeparator"
import ListItemDeleteAction from "../designSystem/atoms/ListItemDeleteAction"

const messages = [
  { id: 1, title: "T1", subtitle: "D1", image: require("../../assets/mosh.jpg") },
  { id: 2, title: "T2", subtitle: "D2", image: require("../../assets/mosh.jpg") },
  { id: 3, title: "T3", subtitle: "D3", image: require("../../assets/mosh.jpg") },
]

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ index, item: message, separators }) => (
          <ListItem
            title={message.title}
            subtitle={message.subtitle}
            imageSource={message.image}
            onPress={() => console.log("message.title: ", message.title)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => console.log("Deleted")} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Screen>
  )
}
