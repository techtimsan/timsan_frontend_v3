"use client"

import { CustomInput } from "@/components/custom"
import { ConferenceRegisterProps, CustomInputProps } from "@/types/app"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@nextui-org/button"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { PaystackButton } from "react-paystack";
import { handlePaystackPayment } from "@/utils/payments";

export const ConferenceSearchForm = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register, handleSubmit, watch} = useForm<ConferenceRegisterProps>()

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

    const email = watch("emailAddress")

      const handleConferenceRegister: SubmitHandler<ConferenceRegisterProps> = (data, e) => {
        e!.preventDefault()

        console.log("handle register called...")
      }

      const onSuccess = (reference: any) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
      };

      const paymentButtonOptions = handlePaystackPayment({
        email: email,
        amount: 1000,
      })
    return (
        <form onSubmit={handleSubmit(handleConferenceRegister)}>
            {/* <CustomInput {...field} /> */}
            <Button onPress={onOpen}>Get Ticket</Button>
            
            {/* register modal */}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader>Personal Details</ModalHeader>
                    <ModalBody>
                        {fields.map((field) => (
                            <CustomInput key={field.name} {...field} />
                        ))}
                    </ModalBody>
                    <ModalFooter>
                <PaystackButton
          {...paymentButtonOptions} onSuccess={onSuccess}
          text="Make Payment"
          className="bg-green text-white px-10 py-3.5 rounded-md font-semibold"
        />
                    </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
        </form>
    )
}