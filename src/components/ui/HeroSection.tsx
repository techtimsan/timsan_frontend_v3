import { chaptersData } from "@/data/api"
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import { Link } from '@nextui-org/link'

const HeroSection = () => {
  

  return (
    <section className="custom__section">
      <h2 className="text-center font-semibold text-2xl mb-10">
        Tijaniyyah <span className="text-green">Muslim</span> Students&apos;{" "}
        <span className="text-green">Association</span> of Nigeria
      </h2>
      <p className="text-center">
        Our Vision is to establish an Islamic Sufi Inclined Community goverened by the teachings of the Qur&apos;an and Sunnah tailored towards the spiritual, moral, economic and social uprightness of Tijaniyyah adherents and its lovers which would be a model worthy of emulation. And our mission is to develop a united and enlightened society of Tijaniyyah adherents on campus fostered by true understanding of principles of Islam and Tijaniyyah doctrinces for the spiritual upliftment of its members throught its peaceful congregational obligatory worships and nurturing the love and characters of the Prophet (S.A.W) in them.
      </p>
      <div className="flex items-center space-x-3.5 w-full justify-center mt-5">
        <Button as={Link} href="/register">
          Register
        </Button>
        <Button as={Link} href="/donate" className="bg-green text-white">
          Donate Now
        </Button>
      </div>

      {/* hero cards */}
      <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-4 sm:gap-x-10">
        {chaptersData.map(({ text, count }) => (
          <Card key={text} shadow="sm" isPressable className="p-5">
            <CardBody className="overflow-visible py-3.5 px-0">
              <h3 className="text-green font-bold text-5xl sm:text-6xl">
                {count}
              </h3>
              <p className="font-semibold text-sm">{text}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
