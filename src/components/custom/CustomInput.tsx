"use client"

import { CustomInputProps } from "@/types/app"
import { Input } from "@nextui-org/input"
import { useState } from "react"
import { FieldValues } from "react-hook-form"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

const CustomInput = <T extends FieldValues>({
  name,
  label,
  register,
  customStyle,
  type,
  placeholder,
  iconLeft,
  iconRight,
  required,
}: CustomInputProps<T>) => {
  const [isVisible, setIsVisible] = useState<boolean>(false) // useMemo?

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <Input
      label={label}
      labelPlacement="outside"
      className={`mb-6 text-gray-900 w-full ${customStyle}`}
      isRequired={required}
      type={type === "password" && isVisible ? "text" : type}
      id={label ? `${label.toLowerCase()}` : name}
      placeholder={placeholder}
      errorMessage
      endContent={
        iconRight ? (
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <AiFillEye
                size={25}
                classname="text-2xl text-default-400 pointer-events-none"
              />
            ) : (
              <AiFillEyeInvisible
                size={25}
                className="text-2xl text-default-400 pointer-events-none"
              />
            )}
          </button>
        ) : (
          false
        )
      }
      {...register(name)}
    />
  )
}

export default CustomInput
