"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps, RegisterProps } from "@/types/app"
import { Button } from "@nextui-org/button"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Select, SelectItem } from "@nextui-org/select"
import toast from "react-hot-toast"

const FormFields = () => {
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
    formState: { errors },
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

  const handleRegister: SubmitHandler<RegisterProps> = (data, e) => {
    e!.preventDefault()

    toast.success("Registered Successfully!")
  }
  return (
    <form onSubmit={handleSubmit(handleRegister)}>
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
      <Button type="submit">Register</Button>
    </form>
  )
}

export default FormFields
