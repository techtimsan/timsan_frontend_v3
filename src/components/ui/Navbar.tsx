"use client"

import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown"
import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button"
import Image from "next/image"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useState } from "react"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const menuItems = [
    {
      title: "Tilets",
      url: "/tilets",
    },
    {
      title: "E-Library",
      url: "e-library",
    },
    {
      title: "Our Chapters",
      url: "/chapters",
    },
    {
      title: "Membership",
      url: "/membership",
    },
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        />

        <NavbarBrand className="space-x-3.5">
          {/* <Button as={Link} variant="flat" className="bg-none"> */}

          <Link href="/">
            <Image
              src="/assets/timsan_logo.png"
              alt="Timsan Logo"
              width={35}
              height={35}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link color="foreground" href="/tilets">
            TILETS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/e-library">
            E-LIBRARY
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link className="cursor-pointer" color="foreground">
                OUR CHAPTERS <BiChevronDown />
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Our Chapters"
            className="w-full"
            // itemClasses={{
            //   base: "gap-4",
            // }}
          >
            <DropdownItem>
              <Link href="/institution/oau" color="foreground" className="w-full">
                Institution
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/chapter/state" color="foreground" className="w-full">
                State
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/chapter/zonal" color="foreground" className="w-full">
                Zonal
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link className="cursor-pointer" color="foreground">
                MEMBERSHIP <BiChevronDown />
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Membership"
            className="w-full"
            // itemClasses={{
            //   base: "gap-4",
            // }}
          >
            <DropdownItem>
              <Link href="/login" color="foreground" className="w-full">
                Log In
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/register" color="foreground" className="w-full">
                Register
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/annual-due" color="foreground" className="w-full">
                Annual Due
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <Button size="sm" className="" variant="flat" as={Link} href="/about">
            About Us
          </Button>
        </NavbarItem>
        <NavbarItem className="">
          <Button
            size="sm"
            as={Link}
            className="bg-green text-white"
            href="/donate"
            variant="flat"
          >
            Donate Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* menu */}
      <NavbarMenu className="h-[200px]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              href={item.url}
              className="uppercase w-full items-center justify-center"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
