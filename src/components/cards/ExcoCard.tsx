import type { ExcoCardProps } from "@/types/app"
import { Avatar } from "@nextui-org/avatar"
import { BsArrowReturnLeft, BsArrowReturnRight } from "react-icons/bs"

const ExcoCard = ({ name, imageUrl, position }: ExcoCardProps) => {
  return (
    <div className="">
      <div className="w-full flex items-center justify-center">
        <Avatar src={imageUrl} className="w-28 h-28 border-4 border-black"  />
      </div>
      {/* description */}
      <div>
        <div className="bg-green text-white rounded-md">
          <h3 className="text-center font-semibold py-1.5">{name}</h3>
        </div>
        <div className="flex items-start space-x-1.5 text-gray-900 mx-5">
          <BsArrowReturnRight size={25} color="black" />
          <h4 className="whitespace-pre-wrap text-center">{position}</h4>
          <BsArrowReturnLeft size={25} color="black" />
        </div>
      </div>
    </div>
  )
}

export default ExcoCard
