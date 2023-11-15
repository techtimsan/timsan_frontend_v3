import { Navbar } from "@/components/ui"
import Image from "next/image"
import { Link } from "@nextui-org/link"
import FormFields from "./FormFields"
import { timsanLogo } from "@/utils/constants"

export default function Login() {
  return (
    <main className="h-screen">
      <Navbar />
      <section className="bg-green h-full p-5 text-center text-white">
        <div>
          <div className="flex items-center justify-center">
            <Image src={timsanLogo} alt="Timsan Logo" className="w-20 h-20" />
          </div>
          <h3 className="font-semibold text-2xl">Login</h3>
          <p>Welcome back! Sign in with a social account to contiune.</p>

          {/* social providers */}
          <div></div>
        </div>
        <div>
          <span>Or</span>
        </div>

        <FormFields />
        <div className="flex items-center space-x-2.5">
          <p>Don&apos;t have an account?</p>
          <Link href="/register">Register</Link>
        </div>
      </section>
    </main>
  )
}
