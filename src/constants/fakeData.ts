import { CategoryType } from "@/types/Picker"
import { ProductType } from "../types/ListItem"
import { theme } from "@/style/theme"

export const fakeProducts: ProductType[] = [
  {
    id: "1",
    title: "Red jacket for sale!",
    price: 100,
    image: require("../assets/jacket.jpg"),
    owner: {
      username: "Mosh",
      profilPicture: require("../assets/mosh.jpg"),
      productsQuantity: 5,
    },
  },
  {
    id: "2",
    title: "Couch in great condition!",
    price: 900,
    image: require("../assets/couch.jpg"),
    owner: {
      username: "Julien",
      profilPicture: require("../assets/mosh.jpg"),
      productsQuantity: 5,
    },
  },
]

export const categories: CategoryType[] = [
  { id: "1", label: "Furniture", value: 1, iconColor: theme.colors.primary, iconName: "lamp" },
  { id: "2", label: "Clothing", value: 2, iconColor: theme.colors.yellow, iconName: "car" },
  { id: "3", label: "Camera", value: 3, iconColor: theme.colors.secondary, iconName: "camera" },
  { id: "5", label: "Movies & music", value: 1, iconColor: theme.colors.dark, iconName: "film" },
  { id: "6", label: "Clothing", value: 2, iconColor: "pink", iconName: "shoe-ballet" },
  { id: "7", label: "Sports", value: 3, iconColor: "orange", iconName: "basketball" },
]
