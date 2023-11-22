import { Navbar } from "@/components/ui"
import Image from "next/image"
import FormFields from "./FormFields"
import { Link } from "@nextui-org/link"
import { loginRegisterBG, timsanLogo } from "@/utils/constants"

export default function Register() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />
      <div className="sm:flex sm:items-center">
        <section className="hidden sm:block sm:w-1/2 sm:h-screen sm:overflow-hidden sm:relative">
        <div className="sm:absolute sm:bg-black/50 sm:inset-0" />
        <Image src={loginRegisterBG} alt="Login BG" className="w-full h-full object-cover object-center" />
          </section>     

      <section className="bg-green p-5 text-center flex flex-col items-center justify-center text-white sm:w-1/2 h-screen space-y-3 sm:px-32">
        <div className="w-full">
          <div className="flex items-center justify-center">
            <Image src={timsanLogo} alt="Timsan Logo" className="w-20 h-20" />
          </div>
          <h3 className="font-semibold text-2xl">Register</h3>
          <p>
            Let&apos;s get you started! Register with a social account to begin.
          </p>

          {/* social providers */}
          <div></div>
        </div>
        <div>
          <span>Or</span>
        </div>
        <FormFields />
        <div className="flex items-center space-x-2.5">
          <p>Do you have an account?</p>
          <Link href="/login" className="text-timsan-gray underline font-semibold">Sign In</Link>
        </div>
      </section>
      </div>
    </main>
  )
}
