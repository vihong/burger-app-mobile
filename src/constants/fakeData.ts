import { CategoryType } from "@/types/Picker"
import { ProductType } from "../types/ListItem"

export const fakeProducts: ProductType[] = [
  {
    id: 1,
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
    id: 2,
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
  { id: "1", label: "Furniture", value: 1, iconColor: "red", iconName: "email" },
  { id: "2", label: "Clothing", value: 2, iconColor: "yellow", iconName: "email" },
  { id: "3", label: "Camera", value: 3, iconColor: "blue", iconName: "email" },
]
