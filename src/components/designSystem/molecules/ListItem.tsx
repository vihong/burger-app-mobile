import React from "react"
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  View,
  ViewProps,
  ViewStyle,
} from "react-native"
import Text from "../atoms/Text"
import { theme } from "../../../style/theme"
import Swipeable from "react-native-gesture-handler/Swipeable"
import { RenderRightActionsType } from "../../../types/ListItem"
import { IconProps } from "../atoms/Icon"

type ListItemProps = {
  title?: string
  subtitle?: string
  imageSource?: ImageSourcePropType
  onPress?: (event: GestureResponderEvent) => void
  renderRightActions?: RenderRightActionsType
  Icon?: React.ReactElement<IconProps>
  style?: StyleProp<ViewStyle>
} & ViewProps

export default function ListItem({
  title,
  subtitle,
  imageSource,
  onPress,
  renderRightActions,
  Icon,
  style,
}: ListItemProps) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={theme.colors.greyLight} onPress={onPress}>
        <View style={[styles.listItem, style]}>
          {Icon && <View style={styles.iconContainer}>{Icon}</View>}
          {imageSource && <Image style={styles.profileImage} source={imageSource} />}
          <View style={styles.profileInfo}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: theme.colors.white,
  },
  profileImage: {
    borderColor: "purple",
    height: 70,
    width: 70,
    borderRadius: 40,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileInfo: {
    width: "100%",
    marginLeft: 15,
    justifyContent: "center",
  },
  title: {
    fontWeight: theme.weights.bold,
  },
  subtitle: {
    fontWeight: theme.weights.normal,
    color: theme.colors.greyDark,
  },
})
