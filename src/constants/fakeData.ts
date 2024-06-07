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
