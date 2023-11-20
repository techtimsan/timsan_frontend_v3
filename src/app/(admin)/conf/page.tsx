import { DashboardCardProps } from "@/types/app"
import { HiMiniUsers } from "react-icons/hi2"
import { FcCustomerSupport } from "react-icons/fc"
import { PiNotebook } from "react-icons/pi"
import { DashboardCard } from "@/components/cards"

const conferenceData: DashboardCardProps[] = [
  {
    Icon: HiMiniUsers,
    title: "Registered Attendees",
    total: 550,
  },
  {
    Icon: FcCustomerSupport,
    title: "Speakers",
    total: 40,
  },
  {
    Icon: PiNotebook,
    title: "Conference held",
    total: 280,
  },
]

export default function Conf() {
  return (
    <main>
      <h1>Conference</h1>

      <div>
        {conferenceData.map((data) => (
          <DashboardCard key={data.title} {...data}  />
        ))}
      </div>
    </main>
  )
}
