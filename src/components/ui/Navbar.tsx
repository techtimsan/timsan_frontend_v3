import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar"
import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button"
import Image from "next/image"
import { HiOutlineMenuAlt1 } from "react-icons/hi"

export default function App() {
  return (
    <Navbar>
      <NavbarBrand className="space-x-3.5">
        {/* <Button as={Link} variant="flat" className="bg-none"> */}
        <HiOutlineMenuAlt1 size={20} />

        <Image
          src="/assets/timsan_logo.png"
          alt="Timsan Logo"
          width={35}
          height={35}
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} href="/about">
            About Us
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/donate" variant="flat">
            Donate Now
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
