import { Footer, HeroSection, Navbar } from "@/components/ui"
import { Button } from "@nextui-org/button"
import news from "../data/news.json"
import excos from "../data/excos.json"
import { ExcoCard, NewsCard } from "@/components/cards"
import { Link } from "@nextui-org/link"
import { ChapterMap } from "@/components/utils"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* news */}
      <section className="custom__section">
        <h3 className="">TIMSAN BROADCAST</h3>
        <h4 className="">Latest News</h4>
        <div>
          {news.map((newsInfo) => (
            <NewsCard key={newsInfo.title} {...newsInfo} />
          ))}
        </div>
        <Button as={Link}>View all</Button>
      </section>
      {/* tilets */}
      <section className="custom__section">
        <h3>TILETS</h3>
        <h4 className="text-green font-semibold text-xl">Our Session</h4>

        {/* carousel */}

        <Button>View all</Button>
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
