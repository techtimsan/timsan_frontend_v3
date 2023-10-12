import { TiletCardProps } from "@/types/app"
import { Card, CardBody } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { Link } from "@nextui-org/link"

const TiletCard = ({ thumbnailUrl, title, text, url }: TiletCardProps) => {
  return (
    <Card className="rounded-none">
      <CardBody className="p-0 sm:grid border-none sm:grid-cols-2 sm:gap-x-10 ">
        <Image src={thumbnailUrl} alt={title} className="rounded-none" />
        <div className="py-5 pr-10 flex flex-col justify-evenly">
          <h3 className="text-2xl font-semibold text-green">{title}</h3>
          <p>{text}</p>
          <Link href={url} className="text-green underline">Read More</Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default TiletCard
