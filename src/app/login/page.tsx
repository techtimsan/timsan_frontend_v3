import { Navbar } from "@/components/ui"
import timsanLogo from "../../../public/assets/timsan_logo.png"
import Image from "next/image"
import { CustomInputProps } from "@/types/app"
import { useForm } from "react-hook-form"
import { CustomInput } from "@/components/custom"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import FormFields from "./FormFields"

export default function Login() {
  return (
    <main className="h-screen">
      <Navbar />
      <section className="bg-green h-full p-5 text-center text-white">
        <div>
          <Image src={timsanLogo} alt="Timsan Logo" />
          <h3 className="font-semibold text-2xl">Login</h3>
          <p>Welcome back! Sign in with a social account to contiune.</p>

          {/* social providers */}
          <div></div>
        </div>
        <div>
          <span>Or</span>
        </div>
        <form>
          <FormFields />
          <Button>Login</Button>
          <div className="flex items-center space-x-2.5">
            <p>Don&apos;t have an account?</p>
            <Link href="/register">Register</Link>
          </div>
        </form>
      </section>
    </main>
  )
}
