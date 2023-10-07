import type { ComponentProps, HTMLInputTypeAttribute, ReactNode } from "react"
import type { FieldErrors, Path, UseFormRegister } from "react-hook-form"
import type { IconType } from "react-icons"

export type ProvidersProps = {
  children: ReactNode
}

export type LocationSearchQuery = {
  query: string
}

export type EditMemberProfileProps = {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  status: "active" | "inactive" // get status...
  position?: string
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
  customStyle?: string
  // errors?: FieldErrors | undefined
} & ComponentProps<"input">

export type FeedbackCardProps = {
  user: {
    imageUrl: string
    name: string
    institution: string
  }
  comment: string
}

export type CustomTabProps = {
  title: string
  tabChildren: JSX.Element[]
}
