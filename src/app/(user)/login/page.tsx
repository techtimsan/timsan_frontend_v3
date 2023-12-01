import { Navbar } from "@/components/ui"
import Image from "next/image"
import { Link } from "@nextui-org/link"
import FormFields from "./FormFields"
import { loginRegisterBG, timsanLogo } from "@/utils/constants"

export default function Login() {
  return (
    <main className="h-screen">
      <Navbar />
      <div className="sm:flex sm:items-center">
        <section className="hidden sm:block sm:w-1/2 sm:h-screen sm:overflow-hidden sm:relative">
          <div className="sm:absolute sm:bg-black/50 sm:inset-0" />
          <Image
            // src={loginRegisterBG}
            alt="Login BG"
            className="w-full h-full object-cover object-center"
          />
        </section>
        <section className="bg-green p-5 text-center flex flex-col items-center justify-center text-white sm:w-1/2 h-screen space-y-5 sm:px-32">
          <div className="w-full">
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
            <Link
              href="/register"
              className="text-timsan-gray underline font-semibold"
            >
              Register
            </Link>
          </div>

          {/* re-send verification email */}
          <div className="flex items-center space-x-2.5">
            <p>Couldn&apos;t Verify your email?</p>
            <Link
              className="text-timsan-gray underline font-semibold"
              href="/verify-email"
            >
              Resend
            </Link>
            <p>verification email.</p>
          </div>

          {/* reset password */}
          <div>
            <Link href="/forgot-password">Forgot Password?</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
