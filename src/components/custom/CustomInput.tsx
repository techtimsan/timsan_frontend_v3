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
          className="my-2.5"
      type={type}
      id={label ? `${label.toLowerCase()}` : name}
      placeholder={placeholder}
      {...register(name, { required: required })}
    />
  )
}

export default CustomInput
