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
  const {
    register,
    formState: { errors },
  } = useForm<RegisterProps>({
    defaultValues,
  })
  const formFields: CustomInputProps<RegisterProps>[] = [
    {
      name: "fullname",
      required: true,
      label: "Full Name",
      type: "text",
      register,
    },
    {
      name: "email",
      type: "email",
      required: true,
      label: "Email Address",
      register,
    },
    {
      name: "password",
      required: true,
      label: "Password",
      type: "password",
      register,
      iconRight: true,
    },
    //   {
    //     name:
    // }
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
