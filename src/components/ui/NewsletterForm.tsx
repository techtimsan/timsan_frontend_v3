"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { CustomInput } from "../custom"
import { Button } from "@nextui-org/button"
import { CustomInputProps } from "@/types/app"
import toast from "react-hot-toast"
import { BASE_API_URL } from "@/utils/constants"
import { CircularProgress } from "@nextui-org/progress"

const NewsletterForm = () => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<{ email: string }>({
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

  const handleNewsletterSubscription: SubmitHandler<{ email: string }> = async (data, e) => {
    e!.preventDefault()

    try {
      const res = await fetch(`${BASE_API_URL}/api/v1/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email
        }),
      })

      const responseData = await res.json()

      if (responseData.success !== true) {
        toast.error(responseData.message)
      } else {
        toast.success(responseData.message)
      }
    } catch (error: any) {
      toast.error("Sorry! Something went wrong.")
      console.error("Error:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleNewsletterSubscription)} className="w-full flex items-center justify-cente">
      <CustomInput  customStyle="sm:w-ful w-fulll bg-transparent  overflow-hidden sm:bg-transparent focus:bg-none focus:outline-none active:bg-none active:outline-none rounded-none sm:rounded-none my-0" {...field} />
      <Button
        className="bg-green sm:rounded-none text-white font-medium px-6 my-0"
        type="submit"
      >
        {isSubmitting ? <CircularProgress color="success" /> : "Subscribe"}
      </Button>
    </form>
  )
}

export default NewsletterForm
