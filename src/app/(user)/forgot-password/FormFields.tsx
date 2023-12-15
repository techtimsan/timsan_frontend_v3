"use client"

import { useState } from "react"
import { CustomInput } from "@/components/custom"
import {
  CustomInputProps,
  LoginProps,
  ResetPasswordProps,
  VerifyEmailProps,
} from "@/types/app"
import { Button } from "@nextui-org/button"
import { SubmitHandler, useForm } from "react-hook-form"
import { BASE_API_URL } from "@/utils/constants"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"
import { CircularProgress } from "@nextui-org/progress"
import { useAuth } from "@/hooks"

const FormFields = () => {
  const [resetPasswordSuccess, setResetPasswordSuccess] =
    useState<boolean>(false)

  // can only access route if logged in...
  const user = useAuth((state) => state)

  if (user.authState !== "logged in") {
    redirect("/login")
  }

  if (resetPasswordSuccess) {
    redirect("/login")
  }

  const defaultValues: ResetPasswordProps = {
    oldPassword: "",
    newPassword: "",
  }
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<ResetPasswordProps>({
    defaultValues,
  })
  const formFields: CustomInputProps<ResetPasswordProps>[] = [
    {
      name: "oldPassword",
      type: "password",
      required: true,
      label: "Current Password",
      register,
    },
    {
      name: "newPassword",
      type: "password",
      required: true,
      label: "New Password",
      register,
    },
  ]

  const handleResetPassword: SubmitHandler<ResetPasswordProps> = async (
    data,
    e
  ) => {
    e!.preventDefault()

    try {
      if (!user.user?.id) {
        // toast.error("")
        redirect("/login")
      } else {
        const res = await fetch(
          `${BASE_API_URL}/api/v1/user/reset-password/${user.user.id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              oldPassword: data.oldPassword,
              newPassword: data.newPassword,
            }),
          }
        )

        const responseData = await res.json()

        if (responseData.success !== true) {
          toast.error(responseData.message)
        } else {
          toast.success(responseData.message)
          setResetPasswordSuccess(true)
        }
      }
    } catch (error) {
      toast.error("Sorry! Something went wrong.")
    }
  }
  return (
    <form onSubmit={handleSubmit(handleResetPassword)} className="w-full">
      {formFields.map((field) => (
        <CustomInput key={field.name} {...field} customStyle="rounded-none" />
      ))}
      <Button
        size="lg"
        disabled={isSubmitting || !isValid}
        className="bg-white shadow-md px-20 font-semibold disabled:cursor-not-allowed"
        type="submit"
      >
        {isSubmitting ? <CircularProgress color="success" /> : "Reset Password"}
      </Button>
    </form>
  )
}

export default FormFields
