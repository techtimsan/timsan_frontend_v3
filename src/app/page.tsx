import { Footer, HeroSection, Navbar } from "@/components/ui"
import { Button } from "@nextui-org/button"
import news from "../data/news.json"
import { NewsCard } from "@/components/cards"
import { Link } from "@nextui-org/link"
import { ChapterMap } from "@/components/utils"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* news */}
      <section className="custom__section">
        <h3 className="text-center">TIMSAN BROADCAST</h3>
        <h4 className="text-green text-center">Latest News</h4>
        <div>
          {news.map((newsInfo) => (
            <NewsCard key={newsInfo.title} {...newsInfo} />
          ))}
        </div>
        <Button as={Link}>View all</Button>
      </section>
      {/* tilets session */}
      <section className="custom__section">
        <h3>TILETS</h3>
        <h4 className="text-green font-semibold text-xl">Our Session</h4>

        
      </section>
      
      {/* google map */}
      <div>
        <ChapterMap />
      </div>
      <Footer />
    </main>
  )
}
