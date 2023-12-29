"use client"

import type { AnnualDueFormProps, CustomInputProps } from "@/types/app"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@nextui-org/button"
import { CustomInput } from "@/components/custom"

const AnnualDueForm = () => {
  const defaultValues: AnnualDueFormProps = {
    chapterName: "",
    email: "",
    amount: "",
  }

  const { register, handleSubmit } = useForm<AnnualDueFormProps>({
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

  const handleAnnualDue: SubmitHandler<AnnualDueFormProps> = (data, e) => {
    e!.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit(handleAnnualDue)} className="mt-10">
      <div>
        {formFields.map((field) => (
          <CustomInput key={field.name} {...field} />
        ))}
      </div>
      <Button
        type="submit"
        className="bg-green text-white font-medium px-5 rounded-md py-1.5"
      >
        Pay Due
      </Button>
    </form>
  )
}

export default AnnualDueForm
