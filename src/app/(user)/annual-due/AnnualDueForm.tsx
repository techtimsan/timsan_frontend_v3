"use client"

import type { AnnualDueFormProps, CustomInputProps } from "@/types/app"
import { useForm } from "react-hook-form"
import { Button } from "@nextui-org/button"
import { CustomInput } from "@/components/custom"

const AnnualDueForm = () => {
  const defaultValues: AnnualDueFormProps = {
    chapterName: "",
    email: "",
    amount: "",
  }

  const { register } = useForm<AnnualDueFormProps>({
    defaultValues,
  })

  const formFields: CustomInputProps<AnnualDueFormProps>[] = [
    {
      name: "chapterName",
      register,
      type: "text",
      required: true,
      label: "Chapter Name",
    },
    {
      name: "email",
      register,
      type: "email",
      required: true,
      label: "Email",
    },
    {
      name: "amount",
      type: "text",
      register,
      required: true,
      label: "Amount",
    },
  ]
  return (
    <form action="" className="mt-10">
      <div>
        {formFields.map((field) => (
          <CustomInput key={field.name} {...field} />
        ))}
      </div>
      <Button className="bg-green text-white font-medium px-5 rounded-md py-1.5">Pay Due</Button>
    </form>
  )
}

export default AnnualDueForm
