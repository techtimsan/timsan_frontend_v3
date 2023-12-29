import { Footer, HeroSection, Navbar } from "@/components/ui";
import { Button } from "@nextui-org/button";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  ExcoCard,
  ExcoView,
  HeroCarouselCard,
  HeroCarouselSlider,
  NewsCard,
} from "@/components/cards";
import { Link } from "@nextui-org/link";
import { ChapterMap } from "@/components/utils";
import { BASE_API_URL, excos, news } from "@/utils/constants";
import { NewsProps } from "@/types/app";

const getNews = async (): Promise<NewsProps[]> => {
  const resp = await fetch(`${BASE_API_URL}/api/v1/news`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await resp.json();
  return data.data as NewsProps[];
};

export default async function Home() {
  const news = await getNews();
  

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

        <ExcoView />
      </section>

      {/* google map */}
      <div className="custom__section">
        <h3>OUR MAP</h3>
        <h4>Locate a Chapter</h4>
      </div>
      <ChapterMap />
      <Footer />
    </main>
  );
}
