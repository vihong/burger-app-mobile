import React from "react"
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native"
import Text from "../atoms/Text"
import { theme } from "../../../style/theme"

type ListItemProps = {
  title: string
  subtitle: string
  imageSource: ImageSourcePropType
}

export default function ListItem({ title, subtitle, imageSource }: ListItemProps) {
  return (
    <View style={styles.ListItem}>
      <Image style={styles.profileImage} source={imageSource} />
      <View style={styles.profileInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ListItem: {
    flexDirection: "row",
  },
  profileImage: {
    borderColor: "purple",
    height: 80,
    width: 80,
    borderRadius: 40,
    marginHorizontal: 15,
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