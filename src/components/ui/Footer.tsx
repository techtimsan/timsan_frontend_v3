import Image from "next/image"
import Newsletter from "./Newsletter"
import { Link } from "@nextui-org/link"
import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io"

import { BiLogoGmail } from "react-icons/bi"
import { timsanLogo } from "@/utils/constants"

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
    <footer className="relative bg-black px-5 text-xs w-screen pt-36 sm:pt-32 pb-3.5 mt-40 sm:px-20">
      {/* newsletter */}
      <div className="flex w-full items-center justify-center">
        <Newsletter />
      </div>
      <section className="grid grid-cols-3 pt-5 sm:pt-0">
        <div className="text-white">
          <Image
            src={timsanLogo}
            alt="Timsan Logo"
            className="h-16 w-16 bg-white rounded-full"
            // width={120}
            // height={120}
          />
          <div className="flex items-center space-x-5 my-2.5">
            <IoLogoFacebook className="text-3xl" />
            <IoLogoLinkedin className="text-3xl" />
            <IoLogoInstagram className="text-3xl" />
          </div>
          <div className="flex flex-col">
            <div className="flex space-x-2.5 items-center">
              <BiLogoGmail className="text-3xl" />
              <p className="font-medium text-base">timsan.tuamm@gmail.com</p>
            </div>
            <p className="font-medium text-base">+234-706-363-4744</p>
          </div>
        </div>
        <div className=""></div>
        <div>
          <h3 className="text-white font-medium sm:text-xl">Quick Links</h3>
          <hr className="border-green w-10 border-[1.5px] rounded-full mb-3.5" />
          <div className="space-y-2.5">
            {quickLinks.map(({ title, url }) => (
              <div key={url} className="">
                <Link className="text-sm font-medium text-white" href={url}>
                  {title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="h-[0.2px] border border-green rounded-full my-2.5" />
      <p className="text-center text-white text-base">
        &copy; TIMSAN 2022. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
