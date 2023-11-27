"use client"

import { useState } from "react"
import { CustomInput } from "@/components/custom"
import { CustomInputProps, LoginProps } from "@/types/app"
import { Button } from "@nextui-org/button"
import { SubmitHandler, useForm } from "react-hook-form"
import { BASE_API_URL } from "@/utils/constants"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { redirect } from 'next/navigation'
import { CircularProgress } from "@nextui-org/progress"

const FormFields = () => {
  const router = useRouter()
  const defaultValues: LoginProps = {
    email: "",
    password: "",
  }
  const { register, handleSubmit, formState: { isSubmitting, isValid} } = useForm<LoginProps>({
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
      iconRight: true,
    },
  ]

  const handleLogin: SubmitHandler<LoginProps> = async (data, e) => {
    e!.preventDefault()

    try {
      const res = await fetch(`${BASE_API_URL}/api/v1/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      })

      const responseData = await res.json()

      if (responseData.success !== true) {
        toast.error(responseData.message)
      } else {
        toast.success(responseData.message)

        // redirect to login page
        redirect("/conference")
      }
      console.log("api response", responseData)
    } catch (error) {
      toast.error("Sorry! Something went wrong.")
      console.error("Error:", error)
    }
  }
  return (
    <form onSubmit={handleSubmit(handleLogin)} className="w-full">
      {formFields.map((field) => (
        <CustomInput key={field.name} {...field} customStyle="rounded-none" />
      ))}
      <Button
        size="lg"
        className="bg-white shadow-md px-20 font-semibold disabled:cursor-not-allowed"
        type="submit"
      >
        {isSubmitting ? <CircularProgress color="success" /> : "Login"}
      </Button>
    </form>
  )
}

export default FormFields
