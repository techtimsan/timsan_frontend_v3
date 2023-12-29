import { DashboardCardProps } from "@/types/app";
import { HiMiniUsers } from "react-icons/hi2";
import { FcCustomerSupport } from "react-icons/fc";
import { PiNotebook } from "react-icons/pi";
import { DashboardCard } from "@/components/cards";
import { BASE_API_URL } from "@/utils/constants";
import { ManageConfAttendees } from "@/components/admin";

const conferenceData: DashboardCardProps[] = [
  {
    Icon: FcCustomerSupport,
    title: "Speakers",
    total: 7,
  },
  {
    Icon: PiNotebook,
    title: "Conference held",
    total: 13,
  },
];

const getAllConferenceAttendees = async () => {
  const res = await fetch(`${BASE_API_URL}/api/v1/conference/attendee`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const attendees = await res.json();
  return attendees.data;
};

export default async function Conf() {
  const attendees = await getAllConferenceAttendees();
  return (
    <main className="p-5 sm:px-20">
      <div className="flex w-full items-center justify-between mb-10">
        <DashboardCard
          key="Registered Attendees"
          Icon={HiMiniUsers}
          title="Registered Attendees"
          total={attendees.length}
        />
        {conferenceData.map((data) => (
          <DashboardCard key={data.title} {...data} />
        ))}
      </div>

      {/* conf attendees */}
      <ManageConfAttendees attendees={attendees} />
    </main>
  );
}
