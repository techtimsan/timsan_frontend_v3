"use client"

import { Button } from "@nextui-org/button"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "@nextui-org/link"
import {
  BiSolidGridAlt,
  BiLoaderCircle,
  BiSolidTrashAlt,
  BiSolidLogOutCircle,
} from "react-icons/bi"
import { ImFolderUpload } from "react-icons/im"
import { FaUsers } from "react-icons/fa"
import { RiFileEditFill } from "react-icons/ri"
import { PiNotebook } from "react-icons/pi"
import { useContext, useState } from "react"
import { IconType } from "react-icons"
import { SidebarContext } from "@/contexts/SidebarContext"

type SidebarItemProps = {
  Icon: IconType
  title: string
  url?: string
}

const Sidebar = () => {
  const { isSidebarCollapsed, toggleSidebarCollapseHandler } =
    useContext(SidebarContext)

  const sidebarItems: SidebarItemProps[] = [
    {
      Icon: BiSolidGridAlt,
      title: "Dashboard",
      url: "/admin/dashboard",
    },
    {
      Icon: BiLoaderCircle,
      title: "Approval Status",
      url: "/admin/dashboard",
    },
    {
      Icon: ImFolderUpload,
      title: "Upload Courses",
      url: "/admin/dashboard",
    },
    {
      Icon: FaUsers,
      title: "Conference",
      url: "/admin/dashboard",
    },
    {
      Icon: RiFileEditFill,
      title: "Manage Users",
      url: "/admin/dashboard",
    },
    {
      Icon: BiSolidTrashAlt,
      title: "Trash",
      url: "/admin/dashboard",
    },
    {
      Icon: BiSolidLogOutCircle,
      title: "Log out",
    },
  ]
  return (
    <section className="sidebar__wrapper">
      <button
        className="collapse__button"
        onClick={toggleSidebarCollapseHandler}
      >
        <AiOutlineClose className="text-2xl text-timsan-gray" />
      </button>
      {/* sidebar content */}
      <aside className="sidebar" data-collapse={isSidebarCollapsed}>
        {/* sidebar items -- change ul ? */}
        <ul className="sidebar__items">
          {sidebarItems.map(({ Icon, title, url }) => (
            <li key={title} className="sidebar__item">
              <Link
                href={url ? url : "/admin/dashboard"}
                className="sidebar__link"
              >
                <Icon className="sidebar__icon" />
                <span className="sidebar__title">{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

export default Sidebar
