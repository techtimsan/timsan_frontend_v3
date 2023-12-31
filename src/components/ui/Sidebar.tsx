"use client";

import { Button } from "@nextui-org/button";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "@nextui-org/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  BiSolidGridAlt,
  BiLoaderCircle,
  BiSolidTrashAlt,
  BiSolidLogOutCircle,
} from "react-icons/bi";
import { ImFolderUpload } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { RiFileEditFill } from "react-icons/ri";
import { PiNotebook } from "react-icons/pi";
import { useContext, useState } from "react";
import { IconType } from "react-icons";
import { SidebarContext } from "@/contexts/SidebarContext";

type SidebarItemProps = {
  Icon: IconType;
  title: string;
  url?: string;
};

const Sidebar = () => {
  const { isSidebarCollapsed, toggleSidebarCollapseHandler } =
    useContext(SidebarContext);

    const sidebarClass = isSidebarCollapsed ? 'collapsed' : 'expanded';

  const sidebarItems: SidebarItemProps[] = [
    {
      Icon: BiSolidGridAlt,
      title: "Dashboard",
      url: "/admin/dashboard",
    },
    {
      Icon: BiLoaderCircle,
      title: "Approval Status",
      url: "/admin/approval",
    },
    {
      Icon: ImFolderUpload,
      title: "Upload Courses",
      url: "/admin/uploads",
    },
    {
      Icon: FaUsers,
      title: "Conference",
      url: "/admin/conf",
    },
    {
      Icon: RiFileEditFill,
      title: "Manage Users",
      url: "/admin/members",
    },
    {
      Icon: BiSolidTrashAlt,
      title: "Trash",
      url: "/admin/trash",
    },
    {
      Icon: BiSolidLogOutCircle,
      title: "Log out",
    },
  ];
  return (
    <section className="sidebar__wrapper">
      <button
        className="collapse__button"
        onClick={toggleSidebarCollapseHandler}
      >
        {isSidebarCollapsed ? (
          <BiChevronRight className="text-2xl text-green" />
        ) : (
          <BiChevronLeft className="text-2xl text-green" />
        )}
      </button>
      {/* sidebar content */}
      <aside className={`sidebar ${sidebarClass}`} data-collapse={isSidebarCollapsed}>
        {/* sidebar items -- change ul ? */}
        <ul className="sidebar__items">
          {sidebarItems.map(({ Icon, title, url }) =>
            title === "Upload Courses" ? (
              <li key={title} className="sidebar__item group">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="light" className="hover:bg-none">
                      <Icon />
                      <span>{title}</span>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link href={`${url}/course`} className="w-full">Course</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link href={`${url}/e-library`}>E-Library</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link href={`${url}/tilets`}>Tilets</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            ) : (
              <li key={title} className="sidebar__item group">
                <Link
                  href={url ? url : "/admin/dashboard"}
                  className="sidebar__link"
                >
                  <Icon className="sidebar__icon" />
                  <span className="sidebar__title">{title}</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </aside>
    </section>
  );
};

export default Sidebar;
