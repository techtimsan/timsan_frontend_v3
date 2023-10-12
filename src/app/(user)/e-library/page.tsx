"use client"

import { BookCard } from "@/components/cards"
import { CustomInput } from "@/components/custom"
import { CustomInputProps } from "@/types/app"
import { books } from "@/utils/constants"
import { useForm } from "react-hook-form"
import { LuMenuSquare } from "react-icons/lu"
import { Button } from "@nextui-org/button"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown"
import { Footer } from "@/components/ui"

type SearchProps = {
  search: string
}

type CustomDropdownItemsProps = {
  label: string
  key: string
}

export default function ELibrary() {
  const dropdownItems = [
    { key: "library", label: "My Library" },
    { key: "faydah", label: "Faydah Books" },
    { label: "Poetry", key: "poetry" },
    { label: "Seerah", key: "seerah" },
    { label: "Hadith", key: "hadith" },
    { label: "Fiqh", key: "fiqh" },
    { label: "Projects", key: "projects" },
    { label: "Articles", key: "articles" },
    { label: "Magazine", key: "magazine" },
  ]
  //   const { register } = useForm<SearchProps>({
  //     defaultValues: {
  //       search: "",
  //     },
  //   })

  //   const searchField: CustomInputProps<SearchProps> = {
  //     name: "search",
  //     register,
  //     placeholder: "Search for a keyword title or author",
  //   }
  return (
    <main>
      <section className="custom__section">
        <h2>Your Home of Islamic Book Collections</h2>
        {/* <CustomInput {...searchField} /> */}
        <h5>
          Discover Islamic journals, articles & books on one seamless platform
        </h5>
      </section>

      <h4>Categories</h4>

      <div className="px-5 py-3.5 border-y">
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="p-0 shadow-none bg-transparent"
              size="sm"
              variant="light"
            >
              <LuMenuSquare className="text-2xl" />
              <h2>Faydah Books</h2>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Faydah Books" items={dropdownItems}>
            <DropdownItem key="library">My Library</DropdownItem>
            <DropdownItem key="faydah">Faydah Books</DropdownItem>
            <DropdownItem key="poetry">Poetry</DropdownItem>
            <DropdownItem key="seerah">Seerah</DropdownItem>
            <DropdownItem key="hadith">Hadith</DropdownItem>
            <DropdownItem key="fiqh">Fiqh</DropdownItem>
            <DropdownItem key="project">Project</DropdownItem>
            <DropdownItem key="article">Article</DropdownItem>
            <DropdownItem key="magazine">Magazine</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* books */}
      <section className="grid custom__section grid-cols-2 gap-5">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </section>

      <Footer />
    </main>
  )
}
