import { DefaultTheme } from "@react-navigation/native"
import { theme } from "./theme"

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.white,
  },
}
