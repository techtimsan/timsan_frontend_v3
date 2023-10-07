"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps, LocationSearchQuery } from "@/types/app"
import { useState } from "react"
import { useForm } from "react-hook-form"

const ChapterSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const { register } = useForm<LocationSearchQuery>({
    defaultValues: {
      query: "",
    },
  })

  const chapterSearchQuery: CustomInputProps<LocationSearchQuery> = {
    name: "query",
    type: "search",
    label: "Input A Chapter Name",
    register,
  }
  return (
    <div className="mx-3.5">
      {/* <CustomInput customStyle="bg-green" {...chapterSearchQuery} /> */}
      <input
        type="search"
        name=""
        id=""
        value={searchQuery}
        placeholder="Input A Chapter Name..."
        className="bg-green font-medium px-2.5 text-lg py-1.5 placeholder:text-white text-white rounded-md"
      />
    </div>
  )
}

export default ChapterSearch
