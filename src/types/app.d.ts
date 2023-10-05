import type { ComponentProps, HTMLInputTypeAttribute, ReactNode } from "react"
import type { FieldErrors, Path, UseFormRegister } from "react-hook-form"
import type { IconType } from "react-icons"

export type ProvidersProps = {
  children: ReactNode
}

export type ExcoCardProps = {
  name: string
  imageUrl: string
  position: string
}

export type LoginProps = {
  email: string
  password: string
}

export type RegisterProps = {
  fullname: string
  email: string
  password: string
}

export type CustomInputProps<T> = {
  // IconLeft?: IconType
  // IconRight?: IconType
  iconLeft?: boolean
  iconRight?: boolean
  name: Path<T>
  label?: string
  placeholder?: string
  required?: boolean
  register: UseFormRegister<T>
  // errors?: FieldErrors | undefined
} & ComponentProps<"input">
