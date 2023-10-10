"use client"

import { useForm } from "react-hook-form"
import { CustomInput } from "../custom"
import { CustomInputProps } from "@/types/app"

const NewsletterForm = () => {
  const { register } = useForm<{ email: string }>({
    defaultValues: {
      email: "",
    },
  })
  const field: CustomInputProps<{ email: string }> = {
    name: "email",
    label: "Enter your email address",
    required: true,
    register,
  }
  return (
    <form action="" className="w-full">
      <CustomInput customStyle="w-full bg-transparent my-0" {...field} />
    </form>
  )
}

export default NewsletterForm
