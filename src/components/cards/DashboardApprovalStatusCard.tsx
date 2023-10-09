import { StatusCardProps } from "@/types/app"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Button } from '@nextui-org/button'
import { Link } from "@nextui-org/link"

const DashboardApprovalStatusCard = ({
  approved,
  pending,
  title,
  active,
  url
}: StatusCardProps) => {
  return (
    <Card className="w-[300px]">
      <CardHeader className="w-full flex items-center justify-center">
        <h3 className="text-center text-green font-semibold text-2xl">
          {title}
        </h3>
      </CardHeader>
      <CardBody className="w-full">
        <h4 className="border-b grid grid-cols-2 py-1.5">
          Approved : <span>{approved}</span>
        </h4>
        <h5 className="border-b grid grid-cols-2 py-1.5">
          Pending : <span>{pending}</span>
        </h5>
        <h6 className="border-b grid grid-cols-2 py-1.5">
          Active : <span>{active}</span>
        </h6>
      </CardBody>
      <CardFooter className="flex w-full items-center justify-center">
        <Button as={Link} href={url} className="bg-green text-white font-semibold text-xl">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

export default DashboardApprovalStatusCard
