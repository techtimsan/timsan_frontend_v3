"use client"

import { CustomInput } from "@/components/custom"
import { ConferenceRegisterProps, CustomInputProps } from "@/types/app"
import { useForm, useWatch, Controller } from "react-hook-form"
import { Select, SelectItem } from "@nextui-org/select"
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
import { useAuth } from "@/hooks"
import { useState } from "react"

export const ConferenceSearchForm = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const user = useAuth((state) => state.user)
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isValid },
    control,
  } = useForm<ConferenceRegisterProps>({
    defaultValues: {
      emailAddress: user?.email,
      attendeeId: user?.id,
    },
  })

  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false)

  if (shouldRedirect) {
    redirect("/login")
  }

  const fields: CustomInputProps<ConferenceRegisterProps>[] = [
    {
      name: "emailAddress",
      register,
      type: "email",
      required: true,
      label: "Email Address",
    },
  ]

  const userData = watch([
    "emailAddress",
    "attendeeId",
    "membershipType",
    "paymentStatus",
  ])

  const membershipTypes = [
    {
      value: "TIMSANITE",
      label: "TIMSANITE",
    },
    {
      value: "IOTB",
      label: "IOTB",
    },
    {
      value: "OTHERS",
      label: "OTHERS",
    },
  ]

  const conferenceId = "clph0s7fw0000a212wn7w505p"

  const handleConferenceRegister = async (data: ConferenceRegisterProps) => {
    try {
      const res = await fetch(
        `${BASE_API_URL}/api/v1/conference/register/${conferenceId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
          }),
        }
      )

      const responseData = await res.json()

      if (responseData.success !== true) {
        toast.error(responseData.message)
      } else {
        toast.success(responseData.message)
        onClose()
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

    handleConferenceRegister({
      emailAddress: user?.email as string,
      attendeeId: user?.id as string,
      membershipType: userData[2],
      paymentStatus: "PAYMENT_SUCCESSFUL",
    })
  }

  const paymentButtonOptions = handlePaystackPayment({
    email: userData[0],
    amount: 1000,
  })

  const handleAuth = () => {
    if (!user) {
      toast.error("Login to attend Conference")
      setShouldRedirect(true)
    } else {
      onOpen()
    }
  }

  return (
    <form className="w-full">
      {/* <CustomInput {...field} /> */}
      <Button
        onPress={() => handleAuth()}
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
                <Controller
                  name="membershipType"
                  control={control}
                  render={({ field }) => (
                    <Select
                      className="mb-7 text-black"
                      label="You're registering as"
                      size="sm"
                      variant="flat"
                      {...field}
                    >
                      {membershipTypes.map((membershipType) => (
                        <SelectItem key={membershipType.value} value={membershipType.value}>
                          {membershipType.label}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                />
                {fields.map((field) => (
                  <CustomInput key={field.name} {...field} />
                ))}
              </ModalBody>
              <ModalFooter>
                <div className="w-full flex items-center justify-center mb-5">
                  {!userData[0] || !userData[1] ? (
                    <Button
                      disabled
                      className="bg-green/10 disabled:cursor-not-allowed text-white px-10 py-3.5 rounded-md font-semibold"
                    >
                      Make Payment
                    </Button>
                  ) : (
                    <PaystackButton
                      {...paymentButtonOptions}
                      onSuccess={onSuccess}
                      text="Make Payment"
                      className="bg-green text-white px-10 py-3.5 rounded-md font-semibold"
                    />
                  )}
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  )
}
