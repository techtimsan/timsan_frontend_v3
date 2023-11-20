"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps } from "@/types/app"
import { useForm } from "react-hook-form"
import { Button } from "@nextui-org/button"
import { useDisclosure } from "@nextui-org/modal"
import { ConferenceRegisterModal } from "./ConferenceRegisterModal"

export const ConferenceSearchForm = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register} = useForm({
        defaultValues: {
            query: ""
        }
    })
    const field: CustomInputProps<{ query: string }> = {
        name: "query",
        register
    }


    return (
        <form >
            <CustomInput {...field} />
            <Button onPress={onOpen}>Get Ticket</Button>
            <ConferenceRegisterModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </form>
    )
}