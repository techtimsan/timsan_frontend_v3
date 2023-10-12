"use client"

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineProps,
  BarProps,
} from "chart.js"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown"
import {BiChevronDown} from 'react-icons/bi'
import { useEffect, useState } from "react"
import { Button } from "@nextui-org/button"

ChartJs.register(
  CategoryScale, // x axis
  LinearScale, // y axis
  BarElement,
  Title,
  Tooltip,
  Legend
)

type DashboardNewsCardProps = {
  title: string
}

const DashboardNewsCard = ({title}: DashboardNewsCardProps) => {
  const [chartData, setChartData] = useState<any>({
    datasets: [],
    labels: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "",
          data: [12, 56, 600, 45, 67, 80, 550, 250, 350, 200, 180, 120],
          borderColor: "",
          backgroundColor: "#38A926",
          barThickness: 20, // Set the bar width in pixels
        },
      ],
    })

    // chart options
    setChartOptions({
      scales: {
        x: {
          grid: {
            display: false, // Hide x-axis grid lines
          },
        },
        y: {
          grid: {
            drawBorder: false, // Hide y-axis borders
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: "Title Text",
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    })
  }, [])
  return (
    <Card className="w-[800px] h-full m-auto p-5">
      <CardHeader className="flex items-center justify-between">
        <h3>{title}</h3>
        <Dropdown>
          <DropdownTrigger>
            <Button className="flex items-center space-x-2.5">
              <span>2023</span>
              <BiChevronDown />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Months">
            <DropdownItem key="2023">2023</DropdownItem>
            <DropdownItem key="2022">2022</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <CardBody className="w-full">
        <Bar data={chartData} options={chartOptions} />
      </CardBody>
    </Card>
  )
}

export default DashboardNewsCard
