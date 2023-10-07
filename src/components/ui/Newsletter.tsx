import { Button } from "@nextui-org/button"
import { CustomInput } from "../custom"
import { CustomInputProps } from "@/types/app"
import { useForm } from "react-hook-form"
import NewsletterForm from "./NewsletterForm"

const Newsletter = () => {
  
  return (
    <div className="bg-green text-white absolute -top-36 p-5 mx-2.5">
      <h3 className="font-semibold text-xl mb-1.5">
        Subscribe to our bi-weekly Newsletter
      </h3>
      <hr className="border-2 border-white rounded-full mb-1.5" />
      <h5 className="font-medium text-base">TIMSAN Alert and Events</h5>
      <p className="pb-5">Stay up to date with our weekly close.</p>

      <div className="flex flex-col items-center bg-white px-1.5">
        <NewsletterForm />
        <Button className="bg-green">Subscribe</Button>
      </div>
    </div>
  )
}

export default Newsletter
