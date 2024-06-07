import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
import ListItem from "../designSystem/molecules/ListItem"
import Screen from "../designSystem/atoms/Screen"
import Icon, { IconProps } from "../designSystem/atoms/Icon"
import { theme } from "../../style/theme"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AccountStackParamList } from "../navigators/screenNavigators/AccountNavigator"

type AccountScreenProps = NativeStackScreenProps<AccountStackParamList, "AccountScreen">

export default function AccountScreen({ navigation }: AccountScreenProps) {
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
              onPress={() => navigation.navigate(accountOption.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title={"Log Out"}
        Icon={<Icon name="logout" size={50} backgroundColor={theme.colors.yellow} IsInCircle />}
        style={styles.logout}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  accountScreen: {
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

type AccountOption = {
  id: number
  label: string
  Icon: React.ReactElement<IconProps>
  targetScreen: keyof AccountStackParamList
}

const accountOptions: AccountOption[] = [
  {
    id: 1,
    label: "My Listings",
    Icon: (
      <Icon
        name="format-list-bulleted"
        size={50}
        backgroundColor={theme.colors.tomato}
        IsInCircle
      />
    ),
    targetScreen: "ListingsScreen",
  },
  {
    id: 2,
    label: "My Messages",
    Icon: <Icon name="email" size={50} backgroundColor={theme.colors.secondary} IsInCircle />,
    targetScreen: "MessagesScreen",
  },
]
