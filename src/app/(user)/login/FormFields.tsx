"use client"

import { useState } from "react"
import { CustomInput } from "@/components/custom"
import { CustomInputProps, LoginProps } from "@/types/app"
import { Button } from "@nextui-org/button"
import { SubmitHandler, useForm } from "react-hook-form"

const FormFields = () => {
  const defaultValues: LoginProps = {
    email: "",
    password: "",
  }
  const { register, handleSubmit } = useForm<LoginProps>({
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
      iconRight: true
    },
  ]

  const handleLogin: SubmitHandler<LoginProps> = (data, e) => {
    e!.preventDefault()

    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(handleLogin)} className="w-full">
      {formFields.map((field) => (
        <CustomInput key={field.name} {...field} customStyle="rounded-none" />
      ))}
      <Button size="lg" className="bg-white shadow-md px-20 font-semibold" type="submit">Login</Button>
    </form>
  )
}

export default FormFields
