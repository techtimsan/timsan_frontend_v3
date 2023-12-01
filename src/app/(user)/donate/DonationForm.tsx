"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps, DonationProps } from "@/types/app"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@nextui-org/button"
import { handlePaystackPayment } from "@/utils/payments"
import { PaystackButton } from "react-paystack"

const DonationForm = () => {
  const defaultValues: DonationProps = {
    name: "",
    email: "",
    amount: null,
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

  const paymentButtonOptions = handlePaystackPayment({
    amount: 50,
    email: "email@gmail.com",
  })

  const handleDonate: SubmitHandler<DonationProps> = (data, e) => {
    e!.preventDefault()

    handlePaystackPayment({
      amount: data.amount as number,
      email: data.email
    })
  }
  return (
    <form onSubmit={handleSubmit(handleDonate)} className="mt-10">
      {fieldValues.map((field) => (
        <CustomInput key={field.name} {...field} />
      ))}
      {/* payment options */}
      <div></div>
      <div className="flex w-full items-center justify-center">
        <PaystackButton
          {...paymentButtonOptions}
          // onSuccess={onSuccess}
          text="Donate Now"
          className="bg-green text-white px-10 py-3.5 rounded-md font-semibold"
        />
      </div>
    </form>
  )
}

export default DonationForm
