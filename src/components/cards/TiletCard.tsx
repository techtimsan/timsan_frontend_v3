import { TiletCardProps } from "@/types/app"
import { Card, CardBody } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { Link } from "@nextui-org/link"

const TiletCard = ({ thumbnailUrl, title, text, url }: TiletCardProps) => {
  return (
    <Card className="rounded-none" isPressable>
      <CardBody className="p-0 grid border-none grid-cols-2 sm:gap-x-10">
        <Image src={thumbnailUrl} alt={title} className="rounded-none h-full object-cover object-center" />
        <div className="py-5 px-2.5 sm:px-10 flex flex-col justify-evenly">
          {/* <h3 className="text-2xl font-semibold text-green">{title}</h3> */}
          <p className="text-xs">{text}</p>
          <Link href={url} className="text-green underline">Read More</Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default TiletCard
