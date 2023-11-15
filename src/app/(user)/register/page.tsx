import { Navbar } from "@/components/ui"
import Image from "next/image"
import FormFields from "./FormFields"
import { Link } from "@nextui-org/link"
import { timsanLogo } from "@/utils/constants"

export default function Register() {
  return (
    <main className="h-screen">
      <Navbar />
      <section className="bg-green h-full p-5 text-center text-white">
        <div>
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
          <Link href="/login">Sign In</Link>
        </div>
      </section>
    </main>
  )
}
