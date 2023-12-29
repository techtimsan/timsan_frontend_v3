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
import { Avatar } from "@nextui-org/avatar"
import Image from "next/image"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useState } from "react"
import { useAuth } from "@/hooks"
import { useRouter } from "next/router"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const auth = useAuth((state) => state)

  const handleLogout = () => {
    if (auth.user !== null) {
      auth.logout(auth.user)
    }

    return
  }

  const menuItems = [
    {
      title: "Tilets",
      url: "/tilets",
      isDisabled: true,
    },
    {
      title: "E-Library",
      url: "e-library",
      isDisabled: true,
    },
    {
      title: "Our Chapters",
      url: "/chapters",
    },
    {
      title: "Membership",
      url: "/membership",
    },
    {
      title: "Conference",
      url: "/conference",
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
          <Link color="foreground" href="/tilets" isDisabled>
            TILETS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/e-library" isDisabled>
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
              <Link
                href="/chapters/institution"
                color="foreground"
                className="w-full"
              >
                Institution
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/chapters/state" color="foreground" className="w-full">
                State
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/chapters/zonal" color="foreground" className="w-full">
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
        <NavbarItem>
          <Link color="foreground" href="/conference">
            CONFERENCE
          </Link>
        </NavbarItem>
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

        {/* avatar */}
        {auth.authState === "logged in" && (
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Avatar
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  size="sm"
                  className="cursor-pointer"
                />
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="Our Chapters" className="w-full">
              <DropdownItem>
                <Link
                  href="/profile"
                  isDisabled
                  color="foreground"
                  className="w-full"
                >
                  Profile
                </Link>
              </DropdownItem>
              <DropdownItem>
                {auth.user !== null ? (
                  <Button size="sm" onClick={() => handleLogout()} className="font-semibold text-red-800 text-sm px-0 w-full mx-0 bg-transparent text-left">
                    Log out
                  </Button>
                ) : (
                  <Link href="/login" color="foreground">
                    Log in
                  </Link>
                )}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>

      {/* menu */}
      <NavbarMenu className="h-fit">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              href={item.url}
              className="uppercase w-full items-center justify-center"
              size="lg"
              isDisabled={item.isDisabled}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
