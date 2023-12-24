"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps, LoginProps } from "@/types/app"
import { useForm } from "react-hook-form"

type AddMaterialProps = {
  title: string
  author: string
  desc: string
  materialType: string
  publishedYear: string
  imageUrl: string
  downloadUrl?: string
}

const FormFields = () => {
  const defaultValues: AddMaterialProps = {
    title: "",
    author: "",
    desc: "",
    materialType: "",
    publishedYear: "",
    imageUrl: "",
    downloadUrl: "",
  }
  const { register } = useForm<AddMaterialProps>({
    defaultValues,
  })
  const formFields: CustomInputProps<AddMaterialProps>[] = [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Title",
      register,
    },
    {
      name: "author",
      type: "text",
      required: true,
      label: "Author",
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
