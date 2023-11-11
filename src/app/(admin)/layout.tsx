import { Navbar, Sidebar } from "@/components/ui"
import { SidebarProvider } from "@/contexts"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Admin Dashboard - TIMSAN",
  description: "",
}

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SidebarProvider>
          {/* dashboard wrapper */}
          <section className="admin__layout">
            <Sidebar />
            <section className="min-h-screen w-full">
              <Navbar />
              <section className="ml-10">{children}</section>
            </section>
          </section>
        </SidebarProvider>
      </body>
    </html>
  )
}
