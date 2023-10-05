import { Navbar } from "@/components/ui"
import timsanLogo from "../../../public/assets/timsan_logo.png"
import Image from "next/image"
import { CustomInputProps } from "@/types/app"
import { useForm } from "react-hook-form"
import { CustomInput } from "@/components/custom"
import FormFields from "./FormFields"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"

export default function Register() {
  const handleRegister = () => {}
  return (
    <main className="h-screen">
      <Navbar />
      <section className="bg-green h-full p-5 text-center text-white">
        <div>
          <Image src={timsanLogo} alt="Timsan Logo" />
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
        <form>
          <FormFields />
          <Button as="button">Register</Button>
        </form>
        <div className="flex items-center space-x-2.5">
          <p>Do you have an account?</p>
          <Link href="/login">Sign In</Link>
        </div>
      </section>
    </main>
  )
}
