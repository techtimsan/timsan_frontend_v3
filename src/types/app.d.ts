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

export type ConferenceCardProps = {
  thumbnailUrl: string
  title: string
  content: string
  date: string // Date
  location: string
}

export type CourseCardProps = {
  thumbnailUrl: string
  title: string
  duration: string
  level: string // "Beginner" | "Intermediate" | "Advanced"
  rating: number
  author: {
    imageUrl: string
    name: string
  }
}

export type DashboardCardProps = {
  Icon: IconType
  total: number
  title: string
}

export type StatusCardProps = {
  title: string
  approved: number
  pending: number
  active: number
  url: string
}

export type TiletCardProps = {
  thumbnailUrl: string
  title: string
  text: string
  url: string
}

export type DonationProps = {
  name: string
  email: string
  amount: number // string
  paymentOption?: string
}

export type HeroCarouselCardProps = {
  thumbnailUrl: string
  title: string
}

export type AnnualDueFormProps = {
  chapterName: string
  email: string
  amount: string // number ?
}

export type BookCardProps = {
  imageUrl: string
  title: string
  rating: number
  author: string
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
