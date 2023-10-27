import { Avatar } from "@nextui-org/avatar"
import { Button } from "@nextui-org/button"
import FormFields from "./FormFields"
import { Footer } from "@/components/ui"

export default function EditMemberProfile() {
  return (
    <main>
      <section className="custom__section bg-timsan-gray pt-10 flex items-center justify-center flex-col">
        <Avatar
          className="h-32 w-32"
          src="/assets/members/oyedeji_adekunle.png"
        />
        <Button className="bg-green text-white my-5">Upload</Button>
      </section>

      {/* edit profile */}
      <section className="custom__section">
          <FormFields />
      </section>
      <Footer />
    </main>
  )
}
