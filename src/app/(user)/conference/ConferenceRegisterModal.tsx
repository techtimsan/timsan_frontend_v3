"use client"

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { PaystackButton } from "react-paystack";
import { handlePaystackPayment } from "@/utils/payments";
import { ConferenceRegisterProps, CustomInputProps } from "@/types/app";
import { useForm } from "react-hook-form";
import { CustomInput } from "@/components/custom";
import { useState } from "react";

export const ConferenceRegisterModal = ({isOpen, onOpenChange}: {isOpen: boolean, onOpenChange: () => void}) => {
    // const {isOpen, onOpen, onOpenChange} = useDisclosure();

    

      const defaultValues: ConferenceRegisterProps = {
fullName: "",
phoneNumber: "",
emailAddress: "",
membershipType: "",
institution: "",
state: ""
      }

      const {register, getValues} = useForm<ConferenceRegisterProps>({
        defaultValues
      })

      const formValues = getValues()
      
      const [paystackEmail, setPaystackEmail] = useState<string>("")

      const paymentButtonOptions = handlePaystackPayment({
        email: paystackEmail,
        amount: 1000,
      })

      const fields: CustomInputProps<ConferenceRegisterProps>[] = [
        {
            name: "fullName",
            register,
            type: "text",
            required: true,
            label: "Full Name"
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
        },{
            name: "membershipType",
            register,
            required: true,
            type: "text",
            label: "Membership Type",
            placeholder: "e.g TIMSANITE, IOTB, OTHERS"
        }
      ]
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader>Personal Details</ModalHeader>
                    <ModalBody>
                        {fields.map((field) => (
                            <CustomInput {...field} />
                        ))}
                    </ModalBody>
                    <ModalFooter>
                    <Button onClick={() => {
                        setPaystackEmail(formValues.emailAddress)
                        console.log(formValues.emailAddress)
                }}><PaystackButton
          {...paymentButtonOptions}
          text="Donate Now"
          className="bg-green text-white px-10 py-3.5 rounded-md font-semibold"
        /></Button>
                    </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}