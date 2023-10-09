import { StatusCardProps } from "@/types/app"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Button } from '@nextui-org/button'

const DashboardApprovalStatusCard = ({
  approved,
  pending,
  title,
  active,
}: StatusCardProps) => {
  return (
    <Card>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardBody>
        <h4>
          Approved : <span>{approved}</span>
        </h4>
        <h5>
          Pending : <span>{pending}</span>
        </h5>
        <h6>
          Active : <span>{active}</span>
        </h6>
          </CardBody>
          <CardFooter>
              <Button>View Details</Button>
          </CardFooter>
    </Card>
  )
}

export default DashboardApprovalStatusCard
