import type { FeedbackCardProps } from "@/types/app"
import { Card, CardHeader, CardBody } from "@nextui-org/card"
import { Avatar } from "@nextui-org/avatar"

const FeedbackCard = ({
  user: { imageUrl, name, institution },
  comment,
}: FeedbackCardProps) => {
  return (
    <Card className="">
      <CardHeader className="flex justify-between pb-0">
        <div className="flex items-center space-x-3.5">
          <div>
            <Avatar src={imageUrl} alt="User Image" className="w-16 h-16" />
          </div>
          <div>
            <h5 className="text-green text-lg font-normal">{name}</h5>
            <h6 className="uppercase text-lg text-timsan-gray font-medium">
              {institution}
            </h6>
          </div>
        </div>
        <span className="text-8xl -rotate-0 text-green">&ldquo;</span>
      </CardHeader>
      <CardBody className="pt-0">
        <p>{comment}</p>
      </CardBody>
    </Card>
  )
}

export default FeedbackCard
