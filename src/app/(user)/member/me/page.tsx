import { Avatar } from "@nextui-org/avatar"
import { Button } from "@nextui-org/button"
import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io"
import { Textarea } from "@nextui-org/input"
import { Footer } from "@/components/ui"

const MemberProfile = () => {
  const user = {
    name: "Oyedeji Adekunle",
    email: "oyedejiadekunle@gmail.com",
    imageUrl: "/assets/members/oyedeji_adekunle.png",
    role: "Member",
    chapter: "University of Ilorin Chapter",
    phoneNumber: "+234 7008000088",
  }
  return (
    <main>
      <section className="custom__section flex flex-col items-center justify-center space-y-3.5 bg-timsan-gray text-white">
        <Button className="bg-green place-self-start text-white">
          Leave Chapter
        </Button>
        <Avatar src={user.imageUrl} className="w-20 h-20" />
        <h5>{user.name}</h5>
        <span>{user.role}</span>
        <h6>TIMSAN, {user.chapter}</h6>
        <div className="flex items-center">
          <IoLogoFacebook size={20} />
          <IoLogoLinkedin size={20} />
          <IoLogoInstagram size={20} />
        </div>
      </section>

      {/* about me */}
      <section className="custom__section">
        <h2>About me</h2>
              <Textarea
                  variant="bordered" 
          label="You are yet to add any info"
          className="italic font-light"
        />
        <div className="border border-gray-600 px-3.5 py-5">
          <h3 className="font-bold">
            Institution : <span className="font-medium">{user.chapter}</span>
          </h3>
          <h3 className="font-semibold">
            Email: <span className="font-light">{user.email}</span>
          </h3>
          <h3 className="font-semibold">
            Phone number :{" "}
            <span className="font-light">{user.phoneNumber}</span>
          </h3>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default MemberProfile
