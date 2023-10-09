import { DashboardApprovalStatusCard } from "@/components/cards"
import { StatusCardProps } from "@/types/app"

export default function ApprovalStatus() {
  const details: StatusCardProps[] = [
    {
      title: "News",
      approved: 120,
      pending: 10,
      active: 40,
    },
    {
      title: "Events",
      approved: 120,
      pending: 10,
      active: 40,
    },
    {
      title: "Broadcast",
      approved: 120,
      pending: 10,
      active: 40,
    },
    {
      title: "Activities",
      approved: 120,
      pending: 10,
      active: 40,
    },
  ]
    return <main>
        <section className="custom__section">
            {details.map((detail) => (
                <DashboardApprovalStatusCard key={detail.title} {...detail} />
            ))}
      </section>
  </main>
}
