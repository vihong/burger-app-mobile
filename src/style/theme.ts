import { PlatformOSType } from "react-native"

const colors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#FFF",
}

const fonts: Fonts = {
  XS: {
    fontSize: 10,
    lineHeight: 15,
  },
  S: {
    fontSize: 12,
    lineHeight: 18,
  },
  M: {
    fontSize: 14,
    lineHeight: 21,
  },
  L: {
    fontSize: 16,
    lineHeight: 24,
  },
  titleXS: {
    fontSize: 18,
    lineHeight: 27,
  },
  titleS: {
    fontSize: 22,
    lineHeight: 29,
  },
  titleM: {
    fontSize: 26,
    lineHeight: 34,
  },
  titleL: {
    fontSize: 30,
    lineHeight: 39,
  },
  titleXL: {
    fontSize: 32,
    lineHeight: 42,
  },
}

export const getPlatformFontFamily = (platform: PlatformOSType) => {
  switch (platform) {
    case "ios":
      return "Courier"
    case "android":
      return "Roboto"
    default:
      return "System"
  }
}

export const theme = {
  colors,
  fonts,
}

type FontType = {
  fontSize: number
  lineHeight: number
}

type Fonts = {
  [key: string]: FontType
}
