import { chaptersData } from "@/data/api"
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import { Link } from '@nextui-org/link'

const HeroSection = () => {
  

  return (
    <section className="custom__section">
      <h2 className="text-center font-semibold text-3xl sm:text-5xl sm:mt-5  mb-10">
        Tijaniyyah <span className="text-green">Muslim</span> Students&apos;{" "}
        <span className="text-green">Association</span> of Nigeria
      </h2>
      <p className="text-center sm:px-20 sm:text-xl sm:mb-10">
        Our Vision is to establish an Islamic Sufi Inclined Community goverened by the teachings of the Qur&apos;an and Sunnah tailored towards the spiritual, moral, economic and social uprightness of Tijaniyyah adherents and its lovers which would be a model worthy of emulation. And our mission is to develop a united and enlightened society of Tijaniyyah adherents on campus fostered by true understanding of principles of Islam and Tijaniyyah doctrinces for the spiritual upliftment of its members throught its peaceful congregational obligatory worships and nurturing the love and characters of the Prophet (S.A.W) in them.
      </p>
      <div className="flex items-center space-x-3.5 w-full justify-center mt-5 sm:mt-10">
        <Button as={Link} href="/register" size="lg" className="bg-green text-white sm:font-semibold shadow-md sm:w-[150px]">
          Register
        </Button>
        <Button as={Link} href="/donate" size="lg" className="bg-white text-timsan-gray border-2 shadow-md sm:w-[150px] hover:bg-white/30">
          Donate Now
        </Button>
      </div>

      {/* hero cards */}
      <div className="grid grid-cols-2 gap-4 sm:space-x-8 mt-8 sm:mt-12 sm:my-10 sm:flex sm:w-full sm:items-center sm:justify-center">
        {chaptersData.map(({ text, count }) => (
          <Card key={text} shadow="sm" isPressable className="pl-5 sm:w-[180px] sm:h-[150px] rounded-none">
            <CardBody className="py-3.5 px-0 flex items-start justify-center">
              <h3 className="text-green font-bold text-5xl sm:text-5xl">
                {count}
              </h3>
              <p className="font-semibold text-sm sm:text-xl">{text}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
