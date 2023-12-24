import { DashboardCardProps } from "@/types/app"
import { HiMiniUsers } from "react-icons/hi2"
import { FcCustomerSupport } from "react-icons/fc"
import { PiNotebook } from "react-icons/pi"
import { DashboardCard } from "@/components/cards"
import { BASE_API_URL } from "@/utils/constants"
import { ManageConfAttendees } from "@/components/admin"

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

const getAllConferenceAttendees = async () => {
  const res = await fetch(`${BASE_API_URL}/api/v1/conference/attendee`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const attendees = await res.json()
  return attendees.data
}

export default async function Conf() {
  const attendees = await getAllConferenceAttendees()
  return (
    <main className="p-5 sm:px-20">
      <h1>Conference</h1>

      <div className="flex w-full items-center justify-between">
        {conferenceData.map((data) => (
          <DashboardCard key={data.title} {...data}  />
        ))}
      </div>

      {/* conf attendees */}
      <ManageConfAttendees attendees={attendees} />
    </main>
  )
}
