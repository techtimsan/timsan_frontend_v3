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
          <div className="bg-white w-[85vw] h-[100px] z-10 px-3.5 flex items-center justify-center">
            <ChapterSearch />
          </div>
        </div>
        <ChapterMap />
      </div>
      <section className="custom__section">
        <h3>TIMSAN</h3>
        <h4>All Chapters</h4>

        <div>
          <h4>Explore by...</h4>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default StateChapter
