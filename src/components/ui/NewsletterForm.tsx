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
    <form onSubmit={handleSubmit(handleNewsletter)} className="w-full flex items-center justify-center">
      <CustomInput  customStyle="sm:w-[300px] bg-transparent overflow-hidden sm:bg-transparent focus:bg-none focus:outline-none active:bg-none active:outline-none sm:rounded-none my-0" {...field} />
      <Button
        className="bg-green sm:rounded-none text-white font-medium px-8 my-0"
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterForm
