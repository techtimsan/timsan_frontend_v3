"use client"

import { CustomInputProps } from "@/types/app"
import { Input } from "@nextui-org/input"
import { FieldValues } from "react-hook-form"

const CustomInput = <T extends FieldValues>({
  name,
  label,
  register,
  type,
  placeholder,
  required,
}: CustomInputProps<T>) => {
  return (
    <Input
      label={label}
      className="my-2.5 text-gray-900"
      isRequired={required}
      type={type}
      id={label ? `${label.toLowerCase()}` : name}
      placeholder={placeholder}
      {...register(name)}
    />
  )
}

export default CustomInput
