"use client"

import { useState } from "react"
import { CustomInput } from "@/components/custom"
import { CustomInputProps, LoginProps, VerifyEmailProps } from "@/types/app"
import { Button } from "@nextui-org/button"
import { SubmitHandler, useForm } from "react-hook-form"
import { BASE_API_URL } from "@/utils/constants"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { redirect } from "next/navigation"
import { CircularProgress } from "@nextui-org/progress"
import { useAuth } from "@/hooks"

const FormFields = () => {
  const [verifySuccess, setVerifySuccess] = useState<boolean>(false)
  const userLogin = useAuth((state) => state.login)

  if (verifySuccess) {
    redirect("/login")
  }

  const defaultValues: VerifyEmailProps = {
    email: "",
  }
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<VerifyEmailProps>({
    defaultValues,
  })
  const formFields: CustomInputProps<VerifyEmailProps>[] = [
    {
      name: "email",
      type: "email",
      required: true,
      label: "Email Address",
      register,
    },
  ]

  const handleResendVerificationEmail: SubmitHandler<VerifyEmailProps> = async (
    data,
    e
  ) => {
    e!.preventDefault()

    try {
      const res = await fetch(`${BASE_API_URL}/api/v1/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
        }),
      })

      const responseData = await res.json()

      if (responseData.success !== true) {
        toast.error(responseData.message)
      } else {
        toast.success(responseData.message)
        setVerifySuccess(true)

        // save user to state
        // userLogin(responseData.user)
      }
    } catch (error) {
      toast.error("Sorry! Something went wrong.")
    }
  }
  return (
    <form
      onSubmit={handleSubmit(handleResendVerificationEmail)}
      className="w-full"
    >
      {formFields.map((field) => (
        <CustomInput key={field.name} {...field} customStyle="rounded-none" />
      ))}
      <Button
        size="lg"
        disabled={isSubmitting || !isValid}
        className="bg-white shadow-md px-20 font-semibold disabled:cursor-not-allowed"
        type="submit"
      >
        {isSubmitting ? (
          <CircularProgress color="success" />
        ) : (
          "Resend Verification Email"
        )}
      </Button>
    </form>
  )
}

export default FormFields
