import { DashboardApprovalStatusCard } from "@/components/cards"
import { StatusCardProps } from "@/types/app"

export default function ApprovalStatus() {
  const details: StatusCardProps[] = [
    {
      title: "News",
      approved: 120,
      pending: 10,
      active: 40,
      url: "/admin/approval/news",
    },
    {
      title: "Events",
      approved: 120,
      pending: 10,
      active: 40,
      url: "/admin/approval/events",
    },
    {
      title: "Broadcast",
      approved: 120,
      pending: 10,
      active: 40,
      url: "/admin/approval/broadcast",
    },
    {
      title: "Activities",
      approved: 120,
      pending: 10,
      active: 40,
      url: "/admin/approval/activities",
    },
  ]
  return (
    <main>
      <section className="custom__section grid grid-cols-2 gap-10">
        {details.map((detail) => (
          <DashboardApprovalStatusCard key={detail.title} {...detail} />
        ))}
      </section>
    </main>
  )
}
