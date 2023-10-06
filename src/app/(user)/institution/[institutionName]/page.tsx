import { ExcoCard } from "@/components/cards"
import excos from "../../../data/excos.json"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import Image from "next/image"
import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io"
import { Footer } from "@/components/ui"
import timsanLogo from "../../../../public/assets/timsan_logo.png"

const InstitutionPage = ({ params }: { params: { slug: string } }) => {
  console.log(params)
  return (
    <main>
      <section className="custom__section relative bg-timsan-gray/20 py-10">
        <div className="absolute">
          <Image src={timsanLogo} alt="Timsan Logo" className="w-32 h-32" />
        </div>
        {/* chapter Name */}
        <h2 className="">University of Ilorin Chapter.</h2>
        <div className="flex items-center">
          <IoLogoFacebook size={20} />
          <IoLogoLinkedin size={20} />
          <IoLogoInstagram size={20} />
        </div>
      </section>
      <div className="flex items-center justify-end mr-10 my-3.5 space-x-3.5">
        <Link href="#about">About</Link>
        <Link href="#excos">Executives</Link>
      </div>
      {/* about */}
      <section id="about" className="custom__section">
        <h4>About</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          fugiat a non voluptate possimus vitae incidunt numquam quia delectus,
          temporibus, adipisci blanditiis asperiores sunt nihil, officiis
          laborum doloremque praesentium culpa odit in accusamus ad!
          Reprehenderit odit, quia rerum, consequatur pariatur harum
          necessitatibus, aut adipisci sapiente optio quod libero corporis
          expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          quae! Quod fuga commodi neque sed amet vero hic numquam, quasi
          architecto sit voluptatem praesentium perspiciatis impedit laudantium
          quia magnam natus eius ipsam exercitationem qui nam accusamus placeat
          quaerat? Nemo expedita omnis aperiam, sed placeat quia voluptatem
          voluptates dolores provident fugit.
        </p>
      </section>
      <section id="excos" className="custom__section">
        <h4>Core Executives</h4>

        <div className="grid grid-cols-2 gap-3.5 my-5">
          {excos.map((exco) => (
            <ExcoCard key={exco.name} {...exco} />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <Button className="bg-green text-white">Contact Us</Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default InstitutionPage