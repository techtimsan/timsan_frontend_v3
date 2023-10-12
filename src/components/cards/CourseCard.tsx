import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { Avatar } from "@nextui-org/avatar"
import { AiOutlineFieldTime, AiOutlineStar, AiFillStar } from "react-icons/ai"
import { BsBarChart } from "react-icons/bs"
import { CourseCardProps } from "@/types/app"



const CourseCard = ({
  thumbnailUrl,
  title,
  duration,
  level,
  rating = 5,
  author: { imageUrl, name },
}: CourseCardProps) => {
  return (
    <Card className="my-5">
      <CardHeader className="p-0">
        <Image
          src={thumbnailUrl}
          alt="Course Thumbnail"
          className="w-screen object-cover object-center h-[180px] rounded-none"
        />
      </CardHeader>
      <CardBody className="space-y-3.5">
        <h3 className="font-semibold text-xl">{title}</h3>
        <div className="flex items-center space-x-2.5">
          <AiOutlineFieldTime size={28} />
          <h4 className="font-medium text-lg">{duration}</h4>
        </div>
        <div className="flex items-center space-x-2.5">
          <BsBarChart size={25} />
          <h5 className="font-medium text-lg">{level}</h5>
        </div>
        <div className="flex ">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <div key={index} className="">
              <AiFillStar size={22} className="text-timsan-gray" />
            </div>
          ))}
        </div>
      </CardBody>
      <CardFooter className="border-t border-t-timsan-gray px-3.5 space-x-3.5">
        <Avatar isBordered src={imageUrl} alt="Author Image" />
        <h5>{name}</h5>
      </CardFooter>
    </Card>
  )
}

export default CourseCard
