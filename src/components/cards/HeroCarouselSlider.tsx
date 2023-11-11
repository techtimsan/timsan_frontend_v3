"use client"

import { HeroCarouselCardProps } from "@/types/app"
import { Swiper, SwiperSlide } from "swiper/react"
import { HeroCarouselCard } from "."

const HeroCarouselSlider = () => {
  const carouselData: HeroCarouselCardProps[] = [
    {
      title: "TIMSAN SOUTHWEST Camping Exercise at Kebbi State 01",
      thumbnailUrl: "/assets/news/news_thumbnail01.png",
    },
    {
      title: "TIMSAN SOUTHWEST Camping Exercise at Kebbi State 02",
      thumbnailUrl: "/assets/news/news_thumbnail01.png",
    },
    {
      title: "TIMSAN SOUTHWEST Camping Exercise at Kebbi State 03",
      thumbnailUrl: "/assets/news/news_thumbnail01.png",
    },
  ]
  return (
    // <Swiper className="flex">
    //   {carouselData.map((data) => (
    //     <SwiperSlide key={data.title} className="">
    //       <HeroCarouselCard {...data} />
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
    <Swiper slidesPerView={1} spaceBetween={60}>
      <SwiperSlide className="">
        {/* <HeroCarouselCard {...carouselData[0]} /> */}
        one
      </SwiperSlide>
      <SwiperSlide>
        {/* <HeroCarouselCard {...carouselData[1]} /> */}
        two
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroCarouselSlider
