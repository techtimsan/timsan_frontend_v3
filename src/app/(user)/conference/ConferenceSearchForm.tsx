"use client"

import { CustomInput } from "@/components/custom"
import { ConferenceRegisterProps, CustomInputProps } from "@/types/app"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@nextui-org/button"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal"
import { PaystackButton } from "react-paystack"
import { handlePaystackPayment } from "@/utils/payments"
import { BASE_API_URL } from "@/utils/constants"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"

export const ConferenceSearchForm = () => {
  
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { register, handleSubmit, watch } = useForm<ConferenceRegisterProps>()

  const fields: CustomInputProps<ConferenceRegisterProps>[] = [
    {
      name: "fullName",
      register,
      type: "text",
      required: true,
      label: "Full Name",
    },
    {
      name: "emailAddress",
      register,
      type: "email",
      required: true,
      label: "Email Address",
    },
    {
      name: "phoneNumber",
      register,
      type: "tel",
      required: true,
      label: "Phone Number",
    },
    {
      name: "membershipType",
      register,
      required: true,
      type: "text",
      label: "Membership Type",
      placeholder: "e.g TIMSANITE, IOTB, OTHERS",
    },
  ]

  const email = watch("emailAddress")

  const handleConferenceRegister: SubmitHandler<
    ConferenceRegisterProps
  > = async (data, e) => {
    e!.preventDefault()

    try {
      const res = await fetch(`${BASE_API_URL}/api/v1/conference/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      })

      const responseData = await res.json()

      if (responseData.success !== true) {
        toast.error(responseData.message)
      } else {
        toast.success(responseData.message)
      }
      console.log("api response", responseData)
    } catch (error) {
      toast.error("Sorry! Something went wrong.")
      console.error("Error:", error)
    } 
  }

  const onSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference)
  }

  const paymentButtonOptions = handlePaystackPayment({
    email: email,
    amount: 1000,
  })
  return (
    <form onSubmit={handleSubmit(handleConferenceRegister)}>
      {/* <CustomInput {...field} /> */}
      <Button
        onPress={onOpen}
        size="lg"
        className="font-semibold sm:font-medium bg-green text-white text-2xl py-8 sm:py-6 px-14 sm:px-8 mt-5"
      >
        Get Ticket - 2023
      </Button>

      {/* register modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="pt-5">
                <h3 className="text-center w-full">Personal Details</h3>
              </ModalHeader>
              <ModalBody>
                {fields.map((field) => (
                  <CustomInput key={field.name} {...field} />
                ))}
              </ModalBody>
              <ModalFooter>
                <div className="w-full flex items-center justify-center mb-5">
                  <PaystackButton
                    {...paymentButtonOptions}
                    onSuccess={onSuccess}
                    text="Make Payment"
                    className="bg-green text-white px-10 py-3.5 rounded-md font-semibold"
                  />
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  )
}
