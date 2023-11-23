import { HeroCarouselCardProps } from "@/types/app"
import { Card, CardBody } from "@nextui-org/card"
import { Image } from "@nextui-org/image"

const HeroCarouselCard = ({ thumbnailUrl, title }: HeroCarouselCardProps) => {
  // const isActive = /slick-center/.test(document.querySelector('.slick-track')?.getAttribute('class') || '');
  // ${isActive ? 'h-[400px]' : 'h-96'}

  return (
    <Card className={`relative mx-5 rounded-none  shadow-none h-52 sm:h-96 overflow-hidden`}>
      <CardBody className="p-0 overflow-hidden">
        <Image src={thumbnailUrl} alt={title} className="object-cover object-center w-screen overflow-hidden rounded-none" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="bg-timsan-gray bg-opacity-60 text-white w-full">
            <h5 className="py-2.5 sm:py-5 px-5 sm:px-10 font-medium text-xl sm:text-2xl">{title}</h5>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default HeroCarouselCard
