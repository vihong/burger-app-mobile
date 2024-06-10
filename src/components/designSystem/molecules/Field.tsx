import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native"
import TextInput from "@components/designSystem/atoms/TextInput"
import ErrorMessage from "@components/designSystem/molecules/ErrorMessage"
import { MaterialCommunityIconName } from "../atoms/Icon"

type FieldProps = {
  placeholder: string
  onChange?: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void) | undefined
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined
  errorMessage: string | undefined
  iconName?: MaterialCommunityIconName
  isErrorVisible: boolean | undefined
} & TextInputProps

export default function Field({
  placeholder,
  onChange,
  onBlur,
  iconName,
  isErrorVisible,
  errorMessage,
  ...restProps
}: FieldProps) {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        iconName={iconName}
        {...restProps}
        // hasSuccess={!errorMessage}
      />
      {<ErrorMessage errorMessage={errorMessage} isVisible={isErrorVisible} />}
    </>
  )
}
