import { ProductType } from "../types/ListItem"

export const fakeProducts: ProductType[] = [
  {
    id: 1,
    title: "Red jacket for sale!",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition!",
    price: 900,
    image: require("../assets/couch.jpg"),
  },
]
