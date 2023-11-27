import { Footer, HeroSection, Navbar } from "@/components/ui"
import { Button } from "@nextui-org/button"
import { Swiper, SwiperSlide } from "swiper/react"

import {
  ExcoCard,
  HeroCarouselCard,
  HeroCarouselSlider,
  NewsCard,
} from "@/components/cards"
import { Link } from "@nextui-org/link"
import { ChapterMap } from "@/components/utils"
import { BASE_API_URL, excos, news } from "@/utils/constants"

async function getData() {
  const res = await fetch(`${BASE_API_URL}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log("Failed to fetch data")
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* carousel slider */}
      <HeroCarouselSlider />

      {/* news */}
      <section className="custom__section sm:mt-10">
        <h3 className="">TIMSAN BROADCAST</h3>
        <h4 className="mb-5">Latest News</h4>
        <div>
          {news.map((newsInfo) => (
            <NewsCard key={newsInfo.title} {...newsInfo} />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <Button
            as={Link}
            size="lg"
            className="bg-white text-timsan-gray border-2"
          >
            View all
          </Button>
        </div>
      </section>

      {/* executives */}
      <section className="custom__section">
        <h3>EXECUTIVES</h3>
        <h4 className="text-green text-center">Our National Executives</h4>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-10 my-5 sm:my-10">
          {excos.map((exco) => (
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
