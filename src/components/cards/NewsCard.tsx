import { Image } from "@nextui-org/image"
import { Link } from "@nextui-org/link"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"

type NewsProps = {
  thumbnailUrl: string
  title: string
  content: string
  contentUrl: string
}
const NewsCard = ({ thumbnailUrl, title, content, contentUrl }: NewsProps) => {
  return (
    <Card className="my-3.5 sm:grid sm:grid-cols-2 rounded-none shadow-none sm:h-96">
      <CardHeader className="p-0 sm:col-span-1 w-full h-full">
        <Image
          src={thumbnailUrl}
          alt={title}
          className="w-screen object-cover object-center rounded-none"
        />
      </CardHeader>
      <CardBody className="space-y-3.5 sm:col-span-1">
        <h3 className="text-green font-semibold text-lg">{title}</h3>
        <p className="">{content}</p>
        <Link href={contentUrl} className="underline text-green">
          Read More
        </Link>
      </CardBody>
    </Card>
  )
}

export default NewsCard
