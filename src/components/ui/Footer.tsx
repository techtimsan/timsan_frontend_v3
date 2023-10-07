import Image from "next/image"
import Newsletter from "./Newsletter"
import { Link } from "@nextui-org/link"
import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io"
import timsanLogo from "../../../public/assets/timsan_logo.png"
import { BiLogoGmail } from "react-icons/bi"

const Footer = () => {
  const quickLinks = [
    {
      title: "About Us",
      url: "/about",
    },
    {
      title: "FAQs",
      url: "/faqs",
    },
    {
      title: "Membership",
      url: "/membership",
    },
    {
      title: "TILETS",
      url: "/tilets",
    },
    {
      title: "Register",
      url: "/register",
    },
  ]
  return (
    <footer className="relative bg-black px-5 text-xs w-screen pt-36 pb-3.5 mt-40">
      {/* newsletter */}
      <div className="flex w-full items-center justify-center">
        <Newsletter />
      </div>
      <section className="grid grid-cols-3 pt-5">
        <div className="text-white">
          <Image
            src={timsanLogo}
            alt="Timsan Logo"
            className="h-12 w-12"
            // width={120}
            // height={120}
          />
          <div className="flex items-center">
            <IoLogoFacebook size={20} />
            <IoLogoLinkedin size={20} />
            <IoLogoInstagram size={20} />
          </div>
          <div className="flex flex-col">
            <div className="flex space-x-2.5">
              <BiLogoGmail size={22} />
              <p className="">timsan.tuamm@gmail.com</p>
            </div>
            <p className="">+234-706-363-4744</p>
          </div>
        </div>
        <div className=""></div>
        <div>
          <h3>Quick Links</h3>
          {quickLinks.map(({ title, url }) => (
            <div key={url}>
              <Link className="text-xs" href={url}>
                {title}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <hr className="h-[0.2px] border border-green rounded-full my-2.5" />
      <p className="text-center">&copy; TIMSAN 2022. All rights reserved.</p>
    </footer>
  )
}

export default Footer
