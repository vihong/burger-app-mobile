import { PlatformOSType } from "react-native"

const colors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#FFF",
  grey: "#f8f4f4",
  greyDark: "#7a7676",
  greyLight: "#f8f4f4",
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
      return "Avenir"
    case "android":
      return "Roboto"
    default:
      return "System"
  }
}

const blurRadius = {
  normal: 8,
}

const borderRadius = {
  subtle: 1,
  rounded: 5,
  extraRounded: 15,
  maxRounded: 25,
}

export const weights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 800,
} as const

export const theme = {
  colors,
  fonts,
  blurRadius,
  weights,
  borderRadius,
}

type FontType = {
  fontSize: number
  lineHeight: number
}

type Fonts = {
  [key: string]: FontType
}
