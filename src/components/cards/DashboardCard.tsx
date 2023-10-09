"use client"

import { DashboardCardProps } from "@/types/app"
import { Card, CardBody } from "@nextui-org/card"

const DashboardCard = ({ title, total, Icon }: DashboardCardProps) => {
  return (
    <Card>
      <CardBody>
        <div>
          <Icon />
        </div>
        <div>
          <h5>{total}</h5>
          <h6>{title}</h6>
        </div>
      </CardBody>
    </Card>
  )
}

export default DashboardCard
