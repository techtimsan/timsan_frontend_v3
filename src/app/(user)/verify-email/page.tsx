import { Navbar } from "@/components/ui"
import FormFields from "./FormFields"
import Image from "next/image"
import { loginRegisterBG } from "@/utils/constants"

export default function VerifyEmail() {
  return (
    <main className="h-screen">
      <Navbar />
      <div className="sm:flex sm:items-center">
        <section className="hidden sm:block sm:w-1/2 sm:h-screen sm:overflow-hidden sm:relative">
          <div className="sm:absolute sm:bg-black/50 sm:inset-0" />
          <Image
            src={loginRegisterBG}
            alt="Login BG"
            className="w-full h-full object-cover object-center"
          />
        </section>
        <section className="custom__section bg-green p-5 text-center flex flex-col items-center justify-center text-white sm:w-1/2 h-screen space-y-5 sm:px-32">
          <h2>Resend Verification Email</h2>
          <p>Didn&apos;t get verification email?</p>

          <FormFields />
        </section>
      </div>
    </main>
  )
}
