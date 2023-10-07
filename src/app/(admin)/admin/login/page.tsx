import { Navbar } from "@/components/ui"
import { timsanLogo } from "@/utils/constants"

import { Image } from "@nextui-org/image"

export default function AdminLogin() {
  return (
    <main>
      <Navbar />
      <section className="custom__section">
        <div>
          <Image src={timsanLogo as any} alt="TimsanLogo" />
        </div>
      </section>
    </main>
  )
}
