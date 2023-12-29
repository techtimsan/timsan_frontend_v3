import { ExcoCard } from "@/components/cards";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io";
import { Footer, Navbar } from "@/components/ui";
import { excos, timsanLogo } from "@/utils/constants";

const StateInstitutionPage = ({
  params,
}: {
  params: { institutionName: string };
}) => {
  return (
    <main>
      <Navbar />
      <section className="relative">
        <div className="absolute bg-institution-hero bg-contain bg-no-repeat bg-opacity-50 bg-center z-0 inset-x-0 inset-y-0" />

        <div className="relative bg-timsan-gray/50 pt-20 px-28 pb-10">
          {/* chapter Name */}
          <h2 className="text-white font-semibold text-7xl">
            {params.institutionName}.
          </h2>
          <div className="flex items-center space-x-5 my-5 mb-24">
            <IoLogoFacebook className="text-4xl text-white ring-2 ring-white rounded-md" />
            <IoLogoLinkedin className="text-4xl text-white ring-2 ring-white rounded-md" />
            <IoLogoInstagram className="text-4xl text-white ring-2 ring-white rounded-md" />
          </div>

          <div className="w-full flex items-center justify-center">
            <Button className="bg-green text-white">Join This Chapter</Button>
          </div>
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
        Establishing a community governed by the teachings of the Quran and Sunnah tailored towards the spiritual, moral, economic and social uprightness of Tijaniyyah adherents and its lovers which will be a model worthy of emulation.
        </p>
        <p>
        Building Tijanniyah adherents on campus fostered by true understanding of principles of Islam and Tijanniyah doctrines for the spiritual upliftment of its members through its peaceful congregational obligatory worships and nurturing the love and characters of Prophet (SAW) in them.
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
  );
};

export default StateInstitutionPage;
