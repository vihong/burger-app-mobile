import { FormikHelpers } from "formik"

export type FormikOnSubmit = ((
  values: {
    email: string
    password: string
  },
  formikHelpers: FormikHelpers<{
    email: string
    password: string
  }>
) => void | Promise<any>) &
  (() => void)
