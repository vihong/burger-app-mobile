import React from "react"
import { StyleSheet, View } from "react-native"
import Screen from "@components/designSystem/atoms/Screen"
import { Formik } from "formik"
import { handleChangeReactNative } from "@/utils/typescript"
import { validationSchema } from "@/utils/validation"
import Field from "../designSystem/molecules/Field"
import Button from "../designSystem/atoms/Button"
import { ProductInfo } from "@/types/ListItem"

export default function EditScreen() {
  const productInfo = {
    id: "1",
    title: "Nice jacket",
    price: 89,
    category: { id: "1234", label: "Clothing", iconName: "email", iconColor: "pink" },
    description: "Super nice jacket, brand new",
  }

  const productInfoEmpty: ProductInfo = {
    id: "",
    title: "",
    price: 0,
    category: "",
    description: "",
  }

  return (
    <Screen style={styles.screen}>
      <Formik
        initialValues={productInfoEmpty}
        onSubmit={() => console.log("form submitted")}
        validationSchema={validationSchema}
      >
        {/* FORMIK JSX */}
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={styles.form}>
            <Field
              placeholder="Title"
              onChange={handleChangeReactNative(handleChange("title"))}
              onBlur={() => setFieldTouched("Title")}
              errorMessage={errors.title}
              isErrorVisible={touched.title}
              key={"title"}
              autoCorrect={false}
              iconName="package"
            />
            <Field
              placeholder="Price"
              onChange={handleChangeReactNative(handleChange("price"))}
              onBlur={() => setFieldTouched("price")}
              errorMessage={errors.price}
              isErrorVisible={touched.price}
              key={"price"}
              iconName="currency-usd"
            />
            <Field
              placeholder="Category"
              onChange={handleChangeReactNative(handleChange("category"))}
              onBlur={() => setFieldTouched("category")}
              errorMessage={errors.category}
              isErrorVisible={touched.category}
              key={"category"}
              iconName="apps"
            />
            <Field
              placeholder="Description"
              onChange={handleChangeReactNative(handleChange("description"))}
              onBlur={() => setFieldTouched("description")}
              errorMessage={errors.description}
              isErrorVisible={touched.description}
              key={"description"}
              iconName="pencil-remove"
            />
            <Button title="Login" onPress={() => handleSubmit()} style={styles.button} />
          </View>
        )}
      </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  logo: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  form: {
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
  },
})
