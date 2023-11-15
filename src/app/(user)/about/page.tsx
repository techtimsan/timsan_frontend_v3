import { ExcoCard } from "@/components/cards"
import { Card, CardBody } from "@nextui-org/card"
import { Footer, Navbar } from "@/components/ui"
import { ChapterMap } from "@/components/utils"
import { chaptersData } from "@/data/api"
import { excos } from "@/utils/constants"
import { Image } from "@nextui-org/image"

export default function About() {
  return (
    <main>
      <Navbar />
      <section className="py-20 bg-about-hero bg-cover w-full flex items-center justify-center">
        <h3 className="bg-opacity-50 bg-black w-fit px-10 py-5 text-white font-semibold text-3xl text-center">
          About Us
        </h3>
      </section>

      {/* hero cards */}
      <section className="custom__section">
        <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-4 sm:gap-x-10">
          {chaptersData.map(({ text, count }) => (
            <Card key={text} shadow="sm" isPressable className="p-5">
              <CardBody className="overflow-visible py-3.5 px-0">
                <h3 className="text-green font-bold text-6xl">{count}</h3>
                <p className="font-semibold text-sm">{text}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="custom__section">
        {/* top */}
        <div className="sm:flex sm:justify-between sm:items-center sm:gap-x-20">
          {/* left */}
          <div className="space-y-3.5">
            <h3 className="font-medium sm:text-2xl text-black">Our Vision</h3>
            <h4 className="text-3xl text-green font-semibold">Establishing a Sufi Inclined Community</h4>
            <p>
              Establishing a community governed by the teachings of the Quran
              and Sunnah tailored towards the spiritual, moral, economic and
              social uprightness of Tijaniyyah adherents and its lovers which
              will be a model worthy of emulation.
            </p>
          </div>

          {/* right */}
          <div>
            <Image
              src="/assets/tilet_group_IMG.png"
              alt="Tilet Group Image"
              className="w-full object-cover object-center h-[500px]"
            />
          </div>
        </div>

        {/* bottom */}
        <div className="sm:flex sm:justify-between sm:items-center sm:gap-x-20">
          {/* left */}
          <div className="space-y-3.5">
            <h3 className="font-medium sm:text-2xl text-black">Our Mission</h3>
            <h4 className="text-3xl text-green font-semibold">Develop a United and Enlightened Society</h4>
            <p>
              Building Tijanniyah adherents on campus fostered by true
              understanding of principles of Islam and Tijanniyah doctrines for
              the spiritual upliftment of its members through its peaceful
              congregational obligatory worships and nurturing the love and
              characters of Prophet (SAW) in them.
            </p>
          </div>

          {/* right */}
          <div>
            <Image
              src="/assets/tilet_group_IMG.png"
              alt="Tilet Group Image"
              className="w-full object-cover object-center h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* executives */}
      <section className="custom__section">
        <h3>EXECUTIVES</h3>
        <h4 className="text-green text-center">Our National Executives</h4>

        <div className="grid grid-cols-2 gap-3.5 my-5">
          {excos.splice(0, 4).map((exco) => (
            <ExcoCard key={exco.name} {...exco} />
          ))}
        </div>
      </section>

      {/* google map */}
      <div className="custom__section">
        <h3>OUR MAP</h3>
        <h4>Locate a Chapter</h4>
      </div>
      <ChapterMap />
      <Footer />
    </main>
  )
}
