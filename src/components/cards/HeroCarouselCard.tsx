import { HeroCarouselCardProps } from "@/types/app"
import { Card, CardBody } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { SwiperSlide } from "swiper/react"

const HeroCarouselCard = ({ thumbnailUrl, title }: HeroCarouselCardProps) => {
  return (
    <Card className="w-fit">
      <CardBody className="relative p-0">
        <Image src={thumbnailUrl} alt={title} className="w-full object-cover" />
        <div className="absolute inset-x-0 inset-y-0 z-10 flex items-center justify-center">
          <div className="bg-timsan-gray bg-opacity-60 text-white w-full">
            <h5 className="py-5 px-10 font-medium text-2xl">{title}</h5>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default HeroCarouselCard
