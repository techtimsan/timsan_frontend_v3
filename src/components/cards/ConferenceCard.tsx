import { ConferenceCardProps } from "@/types/app"
import { Card, CardBody } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import { IoCalendarNumberOutline } from "react-icons/io5"
import { HiOutlineLocationMarker } from "react-icons/hi"

const ConferenceCard = ({
  thumbnailUrl,
  title,
  location,
  date,
  content,
}: ConferenceCardProps) => {
  return (
    <Card>
      <CardBody>
        <Image src={thumbnailUrl} alt="Image" />
        <div>
          <div className="flex items-center">
            <IoCalendarNumberOutline />
            <HiOutlineLocationMarker />
          </div>
          <h2>{title}</h2>
          <p>{content}</p>
          <div className="flex items-center">
            <Button className="bg-green">Edit</Button>
            <Button className="bg-red-600">Delete</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ConferenceCard
