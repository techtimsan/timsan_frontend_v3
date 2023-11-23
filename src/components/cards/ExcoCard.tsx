import type { ExcoCardProps } from "@/types/app"
import { Avatar } from "@nextui-org/avatar"
import { BsArrowReturnLeft, BsArrowReturnRight } from "react-icons/bs"

const ExcoCard = ({ name, imageUrl, position }: ExcoCardProps) => {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="flex items-center justify-center bg-transparent relative border-2 border-green w-[130px] h-[130px] rounded-full">  
        <Avatar src={imageUrl} className="w-28 h-28 border-4 border-black object-cover object-center"  />
      </div>
      {/* description */}
      <div className="w-full">
        <div className="bg-green text-white rounded-md">
          <h3 className="text-center font-semibold py-1.5 truncate">{name}</h3>
        </div>
        <div className="flex w-full items-center justify-center space-x-1.5 text-gray-900">
          <BsArrowReturnRight size={25} color="black" />
          <h4 className="whitespace-pre-wrap text-center truncate">{position}</h4>
          <BsArrowReturnLeft size={25} color="black" />
        </div>
      </div>
    </div>
  )
}

export default ExcoCard
