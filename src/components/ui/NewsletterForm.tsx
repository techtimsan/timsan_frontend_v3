"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { CustomInput } from "../custom"
import { Button } from "@nextui-org/button"
import { CustomInputProps } from "@/types/app"

const NewsletterForm = () => {
  const { register, handleSubmit } = useForm<{ email: string }>({
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

  const handleNewsletter: SubmitHandler<{ email: string }> = (data, e) => {
    e!.preventDefault()

    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleNewsletter)} className="w-full">
      <CustomInput customStyle="w-full bg-transparent my-0" {...field} />
      <Button
        className="bg-green text-white font-medium px-8 my-0"
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterForm
