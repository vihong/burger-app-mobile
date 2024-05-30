import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
import ListItem from "../designSystem/molecules/ListItem"
import Screen from "../designSystem/atoms/Screen"
import Icon from "../designSystem/atoms/Icon"
import { theme } from "../../style/theme"

const accountOptions = [
  {
    id: 1,
    label: "My Listings",
    Icon: <Icon name="format-list-bulleted" size={50} backgroundColor={theme.colors.tomato} />,
  },
  {
    id: 2,
    label: "My Messages",
    Icon: <Icon name="email" size={50} backgroundColor={theme.colors.secondary} />,
  },
]

export default function AccountScreen() {
  return (
    <Screen style={styles.accountScreen}>
      <ListItem
        title="Mosh Hamedani"
        subtitle="programmingwithmosh@gmail.com"
        imageSource={require("../../assets/mosh.jpg")}
        style={styles.profileItem}
      />
      <View style={styles.menuOptions}>
        <FlatList
          data={accountOptions}
          renderItem={({ item: accountOption }) => (
            <ListItem
              title={accountOption.label}
              Icon={accountOption.Icon}
              style={styles.profileItem}
            />
          )}
        />
      </View>
      <ListItem
        title={"Log Out"}
        Icon={<Icon name="logout" size={50} backgroundColor={theme.colors.yellow} />}
        style={styles.logout}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  accountScreen: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
  },
  profileItem: {},
  menuOptions: {
    marginTop: 30,
  },
  logout: {
    marginTop: 20,
  },
})
