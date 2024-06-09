import React from "react"
import { Formik, FormikValues } from "formik"
import { FormikOnSubmit } from "@/types/Formik"

type FormProps<T, V> = {
  children: React.ReactNode
  initialValues: FormikValues & T
  validationSchema: V
  onSubmit: FormikOnSubmit
}

export default function Form<T, V>({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}: FormProps<T, V>) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  )
}
