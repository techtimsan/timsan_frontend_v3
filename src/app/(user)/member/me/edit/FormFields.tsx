"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps, EditMemberProfileProps } from "@/types/app"
import { useForm } from "react-hook-form"

const FormFields = () => {
  const defaultValues: EditMemberProfileProps = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    status: "active",
    position: ""
  }
  const { register } = useForm<EditMemberProfileProps>({
    defaultValues,
  })
  const formFields: CustomInputProps<EditMemberProfileProps>[] = [
    {
      name: "firstName",
      type: "text",
      required: true,
      label: "First Name",
      register,
    },
    {
      name: "lastName",
      type: "text",
      required: true,
      label: "Last Name",
      register,
    },
    {
      name: "phoneNumber",
      type: "tel",
      required: true,
      label: "Phone Number",
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
      name: "status",
      type: "text", // dropdowm
      required: true,
      label: "Status",
      register,
    },
    {
      name: "position",
      type: "text",
      label: "Executive Position Held",
      register,
    },
  ]
  return (
    <div>
      {formFields.map((field) => (
        <CustomInput key={field.name} {...field} />
      ))}
    </div>
  )
}

export default FormFields
