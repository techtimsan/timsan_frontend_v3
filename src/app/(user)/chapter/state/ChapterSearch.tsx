"use client"

import { CustomInput } from "@/components/custom"
import { CustomInputProps, LocationSearchQuery } from "@/types/app"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

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

  // handle search on Enter key press

  const handleChapterSearch: SubmitHandler<LocationSearchQuery> = (data, e) => {
    e!.preventDefault()

    console.log(data)
  }
  return (
    <div className="mx-3.5">
      <CustomInput
        {...chapterSearchQuery}
        className="bg-green font-medium px-2.5 text-lg py-1.5 placeholder:text-white text-white rounded-md"
      />
    </div>
  )
}

export default ChapterSearch
