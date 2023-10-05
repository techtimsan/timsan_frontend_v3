import type { ExcoCardProps } from "@/types/app"
import { Avatar } from "@nextui-org/avatar"
import { BsArrowReturnLeft, BsArrowReturnRight } from "react-icons/bs"

const ExcoCard = ({ name, imageUrl, position }: ExcoCardProps) => {
  return (
    <div>
      <div>
        <Avatar src={imageUrl} size="lg" />
      </div>
      {/* description */}
      <div>
        <div className="bg-green text-white">
          <h3>{name}</h3>
        </div>
        <div className="flex items-center space-x-1.5 text-gray-900">
          <BsArrowReturnRight size={15} />
          <h4>{position}</h4>
          <BsArrowReturnLeft size={15} />
        </div>
      </div>
    </div>
  )
}

export default ExcoCard
