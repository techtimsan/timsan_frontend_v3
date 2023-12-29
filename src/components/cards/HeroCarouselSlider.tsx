"use client"

import { HeroCarouselCardProps } from "@/types/app"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { HeroCarouselCard } from "."

const HeroCarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "25%",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: true
        },
      },
    ],
  };

  const carouselData: HeroCarouselCardProps[] = [
    {
      title: "TIMSAN SOUTHWEST Camping Exercise at Ogun State 02",
      thumbnailUrl: "/assets/carousel_bg02.jpg",
    },
    {
      title: "TIMSAN SOUTHWEST Camping Exercise at Ogun State 01",
      thumbnailUrl: "/assets/news/news_thumbnail01.png",
    },
    {
      title: "TIMSAN SOUTHWEST Camping Exercise at Ogun State 02",
      thumbnailUrl: "/assets/carousel_bg02.jpg",
    },
    {
      title: "TIMSAN SOUTHWEST Camping Exercise at Ogun State 03",
      thumbnailUrl: "/assets/news/news_thumbnail01.png",
    },    
  ]
  return (
    <Slider {...settings} className="timsan_custom__slider">
      {carouselData.map((carousel, index) => (
        <HeroCarouselCard key={carousel.title} {...carousel} />
      ))}
    </Slider>
  )
}

export default HeroCarouselSlider
