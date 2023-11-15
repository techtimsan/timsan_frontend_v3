"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps, EditMemberProfileProps } from "@/types/app"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@nextui-org/button"

const FormFields = () => {
  const defaultValues: EditMemberProfileProps = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    status: "active",
    position: "",
  }
  const { register, handleSubmit } = useForm<EditMemberProfileProps>({
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

  const handleEditMember: SubmitHandler<EditMemberProfileProps> = (data, e) => {
    e!.preventDefault()

    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleEditMember)}
      className="border px-5 py-7"
    >
      {formFields.map((field) => (
        <CustomInput key={field.name} {...field} />
      ))}
      <Button type="submit">Save</Button>

      {/* go back in history */}
      <Button>Back</Button>
    </form>
  )
}

export default FormFields
