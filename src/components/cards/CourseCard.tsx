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
          className="w-screen object-cover object-center h-[90px] sm:h-[180px] rounded-none"
        />
      </CardHeader>
      <CardBody className="space-y-1 sm:space-y-3.5 p-2.5">
        <h3 className="font-semibold text-sm sm:text-xl">{title}</h3>
        <div className="flex items-center space-x-2.5 w-full">
          <AiOutlineFieldTime className="text-xl" />
          <h4 className="font-medium text-xs sm:text-lg truncate">{duration}</h4>
        </div>
        <div className="flex items-center space-x-2.5">
          <BsBarChart className="text-xl" />
          <h5 className="font-medium text-xs sm:text-lg">{level}</h5>
        </div>
        <div className="flex ">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <div key={index} className="">
              <AiFillStar className="text-timsan-gray text-xs mt-2.5" />
            </div>
          ))}
        </div>
      </CardBody>
      <CardFooter className="border-t border-t-gray-300 sm:px-3.5 space-x-2.5 sm:space-x-3.5">
        <Avatar isBordered className="w-5 h-5" src={imageUrl} alt="Author Image" />
        <h5 className="truncate text-xs sm:text-lg">{name}</h5>
      </CardFooter>
    </Card>
  )
}

export default CourseCard
