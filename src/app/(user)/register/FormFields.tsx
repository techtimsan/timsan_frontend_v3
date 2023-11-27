"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps, RegisterProps } from "@/types/app"
import { Button } from "@nextui-org/button"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Select, SelectItem } from "@nextui-org/select"
import toast from "react-hot-toast"
import { BASE_API_URL } from "@/utils/constants"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"
import { CircularProgress } from "@nextui-org/progress"

const FormFields = () => {
  const router = useRouter()

  const defaultValues: RegisterProps = {
    userType: "",
    fullname: "",
    email: "",
    password: "",
  }

  const userTypes = [
    {
      value: "Member",
      label: "Member",
    },
    {
      value: "Institution",
      label: "Institution",
    },
    {
      value: "State",
      label: "State",
    },
    {
      value: "Zonal",
      label: "Zonal",
    },
  ]

  const {
    control,
    register,
    formState: { errors, isLoading, isSubmitting, isValid },
    handleSubmit,
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

  const handleRegister: SubmitHandler<RegisterProps> = async (data, e) => {
    e?.preventDefault()

    const firstName = data.fullname.split(" ")[0]
    const lastName = data.fullname.split(" ")[1]

    try {
      const res = await fetch(`${BASE_API_URL}/api/v1/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountType: "MEMBER",
          firstName,
          lastName,
          email: data.email,
          password: data.password,
        }),
      })

      // Check if the response is successful (status code in the range 200-299)
      // if (res.ok) {
      const responseData = await res.json()

      if (responseData.success !== true) {
        toast.error(responseData.message)
      } else {
        toast.success(responseData.message)

        // redirect to login page
        redirect("/login")
      }
      console.log("api response", responseData)
      // Perform any actions or update the UI based on the response data
      // } else {
      //   // Handle error scenarios
      //   console.error("API error:", res)
      // }
    } catch (error) {
      // Handle network or other errors
      toast.error("Sorry! Something went wrong.")
      console.error("Error:", error)
    }
  }
  return (
    <form onSubmit={handleSubmit(handleRegister)} className="w-full">
      <Controller
        name="userType"
        control={control}
        render={({ field }) => (
          <Select
            className="mb-7 text-black"
            label="You're registering as"
            size="sm"
            variant="flat"
            {...field}
          >
            {userTypes.map((userType) => (
              <SelectItem key={userType.value} value={userType.value}>
                {userType.label}
              </SelectItem>
            ))}
          </Select>
        )}
      />

      {formFields.map((field) => (
        <CustomInput key={field.name} {...field} />
      ))}
      <Button
        size="lg"
        disabled={isSubmitting || !isValid}
        className="bg-white shadow-md px-20 font-semibold disabled:cursor-not-allowed"
        type="submit"
      >
        {isSubmitting ? <CircularProgress color="success" /> : "Register"}
      </Button>
    </form>
  )
}

export default FormFields
