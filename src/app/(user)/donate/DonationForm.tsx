"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps, DonationProps } from "@/types/app"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@nextui-org/button"

const DonationForm = () => {
  const defaultValues: DonationProps = {
    name: "",
    email: "",
    amount: 0,
  }

  const { register, handleSubmit } = useForm<DonationProps>({
    defaultValues,
  })

  const fieldValues: CustomInputProps<DonationProps>[] = [
    {
      name: "name",
      register,
      type: "text",
      required: true,
      label: "Name",
    },
    {
      name: "email",
      register,
      required: true,
      label: "Email",
      type: "email",
    },
    {
      name: "amount",
      register,
      type: "text",
      label: "Amount",
      required: true,
    },
  ]

  const handleDonate: SubmitHandler<DonationProps> = (data, e) => {
    e!.preventDefault()

    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(handleDonate)} className="mt-10">
      {fieldValues.map((field) => (
        <CustomInput key={field.name} {...field} />
      ))}
      {/* payment options */}
      <div></div>
      <div className="flex w-full items-center justify-center">
        <Button className="bg-green text-white" type="submit">Donate Now</Button>
      </div>
    </form>
  )
}

export default DonationForm