import React, { useState } from "react"
import { FlatList } from "react-native"
import ListItem from "../designSystem/molecules/ListItem"
import Screen from "../designSystem/atoms/Screen"
import ListItemSeparator from "../designSystem/atoms/ListItemSeparator"
import ListItemDeleteAction from "../designSystem/atoms/ListItemDeleteAction"
import { Message } from "../../types/Message"
import { deepClone } from "../../utils/typescript"

const fakeMessages: Message[] = [
  {
    id: 1,
    title: "Mosh",
    subtitle: "Au jardin des Tuileries",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mosh",
    subtitle: "Chercheur de problèmes professionnel",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Mosh",
    subtitle: "Beau gosse des ténèbres",
    image: require("../../assets/mosh.jpg"),
  },
]

export default function MessagesScreen() {
  const [messages, setMessages] = useState<Message[]>(fakeMessages)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleDeleteMessage = (idMessageToDelete: number) => {
    const messagesCopy = deepClone(messages)
    const updatedMessages = messagesCopy.filter((message) => message.id !== idMessageToDelete)
    setMessages(updatedMessages)
  }

  const handleRefreshMessages = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setMessages([fakeMessages[1]])
      setIsRefreshing(false)
    }, 2000)
  }

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
              <ListItemDeleteAction onPress={() => handleDeleteMessage(message.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={isRefreshing}
        onRefresh={handleRefreshMessages}
      />
    </Screen>
  )
}
