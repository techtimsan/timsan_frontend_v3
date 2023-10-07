import type { BookCardProps } from "@/types/app"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { GoBookmark, GoBookmarkFill } from "react-icons/go"

const BookCard = ({ author, imageUrl, title, rating }: BookCardProps) => {
  const bookmarked = true // change to state
  return (
    <Card>
      <CardHeader className="p-0 rounded-none border-b">
        <Image src={imageUrl} alt={title} className="w-screen h-[120px] object-cover object-center" />
      </CardHeader>
      <CardBody className="">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex items-center justify-between">
          <div></div>
          <span>
            {bookmarked ? (
              <GoBookmarkFill className="text-green" />
            ) : (
              <GoBookmark />
            )}
          </span>
        </div>
      </CardBody>
      <CardFooter className="border-t">
        <h5 className="text-xs">{author}</h5>
      </CardFooter>
    </Card>
  )
}

export default BookCard
