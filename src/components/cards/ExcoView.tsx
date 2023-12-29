"use client"

import { excos } from "@/utils/constants"
import { ExcoCard } from "."
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { useState } from "react"
import { ExcoProps } from "@/types/app"

const ExcoView = () => {
    const [showAllExcos, setShowAllExcos] = useState<boolean>(false)

    let allExcos: ExcoProps[]
    allExcos = showAllExcos ? excos : excos.slice(0, 4)
    const handleToggleExcos = () => {
        setShowAllExcos((prev) => !prev)
    }
    return (
        <section>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-10 my-5 sm:my-10">
          {allExcos.map((exco) => (
            <ExcoCard key={exco.name} {...exco} />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <Button
          onPress={handleToggleExcos}
            as={Link}
            size="lg"
            className="bg-white text-timsan-gray border-2"
          >
            {showAllExcos ? "View Less" : "View all"}
          </Button>
        </div>
        </section>
    )
}

export default ExcoView