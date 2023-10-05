"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps, RegisterProps } from "@/types/app"
import { useForm } from "react-hook-form"

const FormFields = () => {
  const defaultValues: RegisterProps = {
    fullname: "",
    email: "",
    password: "",
  }
  const { register } = useForm<RegisterProps>({
    defaultValues,
  })
  const formFields: CustomInputProps<RegisterProps>[] = [
    {
      name: "fullname",
      type: "text",
      register,
    },
    {
      name: "email",
      type: "email",
      register,
    },
    {
      name: "password",
      type: "password",
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
