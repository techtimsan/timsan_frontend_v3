import { DashboardCardProps } from "@/types/app"
import { Card, CardBody } from "@nextui-org/card"

const DashboardCard = ({ title, total, Icon }: DashboardCardProps) => {
  return (
    <Card className="w-[300px] p-0" isPressable>
      <CardBody className="grid grid-cols-3">
        <div className="bg-gray-100 w-10 cursor-pointer h-10 rounded-full flex items-center justify-center">
          <Icon className="inline-flex text-3xl" />
        </div>
        <div className="col-span-2">
          <h5 className="text-timsan-gray font-semibold text-2xl">{total}</h5>
          <h6 className="text-xs">{title}</h6>
        </div>
      </CardBody>
    </Card>
  )
}

export default DashboardCard
