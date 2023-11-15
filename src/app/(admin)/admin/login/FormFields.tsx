"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps, LoginProps } from "@/types/app"
import { useForm } from "react-hook-form"

const FormFields = () => {
  const defaultValues: LoginProps = {
    email: "",
    password: "",
  }
  const { register } = useForm<LoginProps>({
    defaultValues,
  })
  const formFields: CustomInputProps<LoginProps>[] = [
    {
      name: "email",
      type: "email",
      required: true,
      label: "Email Address",
      register,
    },
    {
      name: "password",
      type: "password",
      required: true,
      label: "Password",
      register,
    },
  ]
  return (
    <div>
      {formFields.map((field) => (
        <CustomInput key={field.name} {...field} />
      ))}
    </div>
  )
}

export default FormFields
