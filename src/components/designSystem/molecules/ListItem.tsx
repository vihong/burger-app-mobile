import React from "react"
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native"
import Text from "../atoms/Text"
import { theme } from "../../../style/theme"

type ListItemProps = {
  title: string
  subtitle: string
  imageSource: ImageSourcePropType
  onPress?: (event: GestureResponderEvent) => void
}

export default function ListItem({ title, subtitle, imageSource, onPress }: ListItemProps) {
  return (
    <TouchableHighlight underlayColor={theme.colors.greyLight} onPress={onPress}>
      <View style={styles.ListItem}>
        <Image style={styles.profileImage} source={imageSource} />
        <View style={styles.profileInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  ListItem: {
    flexDirection: "row",
    padding: 15,
  },
  profileImage: {
    borderColor: "purple",
    height: 70,
    width: 70,
    borderRadius: 40,
    marginRight: 15,
  },
  profileInfo: {
    width: "100%",
  },
  title: {
    fontWeight: theme.weights.bold,
  },
  subtitle: {
    fontWeight: theme.weights.normal,
    color: theme.colors.greyDark,
  },
})
