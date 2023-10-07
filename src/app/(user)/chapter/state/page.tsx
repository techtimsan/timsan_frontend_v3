import { CustomInput } from "@/components/custom"
import { Footer, Navbar } from "@/components/ui"
import { ChapterMap } from "@/components/utils"
import { CustomInputProps } from "@/types/app"
import { useForm } from "react-hook-form"
import ChapterSearch from "./ChapterSearch"

const StateChapter = () => {
  return (
    <main>
      <Navbar />
      {/* map */}
      <div className="relative w-full h-full">
        {/* input */}
        <div className="absolute flex w-full h-full items-center justify-center">
          <div className="bg-white py-8 w-[85vw] h-[10 0px] z-10 px-2.5 flex items-center justify-center">
            <ChapterSearch />
          </div>
        </div>
        <ChapterMap />
      </div>
      <section className="custom__section">
        <h3>TIMSAN</h3>
        <h4>All Chapters</h4>

        <div className="border-2 border-t-0 mt-5 border-green">
          <h4 className="bg-green py-2.5 text-white text-center font-semibold text-2xl">
            Explore by...
          </h4>
          {/* dropdown ? */}
          <div className="border-b-2 border-b-green p-3.5">
            <h4>STATE CHAPTERS</h4>
          </div>
          {/* chapters list */}
          <div className="p-3.5">
            <h4>Hello</h4>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default StateChapter
