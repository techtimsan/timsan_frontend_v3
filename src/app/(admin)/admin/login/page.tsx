import { Navbar } from "@/components/ui"
import { timsanLogo } from "@/utils/constants"
import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button"

import { Image } from "@nextui-org/image"
import FormFields from "./FormFields"

export default function AdminLogin() {
  return (
    <main>
      <Navbar />
      <section className="custom__section h-screen bg-green">
        <div>
          <Image src={timsanLogo as any} alt="TimsanLogo" />
        </div>
        <h2 className="text-white text-3xl text-center font-semibold">Admin Login</h2>
        <form action="">
          <FormFields />
          <Link>Forgot Password ?</Link>
          <Button>Sign In</Button>
        </form>
      </section>
    </main>
  )
}
