import DashboardNewsCard from "@/components/cards/DashboardNewsCard"
import { DashboardCardProps } from "@/types/app"
import { HiMiniUsers } from "react-icons/hi2"
import { FcCustomerSupport } from "react-icons/fc"
import { PiNotebook } from "react-icons/pi"
import { DashboardCard } from "@/components/cards"

const dashboardData: DashboardCardProps[] = [
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

export default function AdminDashboard() {
  const user = {
    name: "Awwal",
  }

  return (
    <main className="text-white">
      <h2>Hi {user.name}!</h2>

      {/* small cards */}
      <div>
        {/* <DashboardCard Icon={HiMiniUsers} title="Registered Attendees" total={550} /> */}
      </div>

      {/* chart */}
      <section className="space-y-10">
        <DashboardNewsCard title="News / Broadcast Engagement" />
        <DashboardNewsCard title="Courses Engagement" />
      </section>
    </main>
  )
}
