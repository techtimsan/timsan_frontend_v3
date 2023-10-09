"use client"

import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { Card, CardBody } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"
import { IoCalendarNumberOutline } from "react-icons/io5"

// news Cards
type NewsStatusCardProps = {
  thumbnailUrl: string
  title: string
  text: string
  createdAt: string // Date
  updatedAt?: Date
}
const NewsStatusCard = ({
  thumbnailUrl,
  title,
  text,
  createdAt,
  updatedAt,
}: NewsStatusCardProps) => {
  return (
    <Card>
      <CardBody>
        <div>
          <Image src={thumbnailUrl} alt="Image Url" />
        </div>
        <div>
          <div>
            <IoCalendarNumberOutline className="text-2xl text-timsan-gray" />
            <span>{createdAt}</span>
          </div>
          <h4>{title}</h4>
          <p className="truncate">{text}</p>
          <Button>Review</Button>
        </div>
      </CardBody>
    </Card>
  )
}

const newsData: NewsStatusCardProps = {
  thumbnailUrl: "/assets/timsan_logo.png",
  createdAt: "Oct 20, 2023",
  text: "lorem ipsum dolor sit amet",
  title: "Lorem ipsum dolor sit",
}

export default function NewsApproval() {
  return (
    <main>
      <section className="custom__section">
        <Accordion>
          <AccordionItem key="approved" aria-label="Approved" title="Approved">
            <NewsStatusCard {...newsData} />
            
          </AccordionItem>
          <AccordionItem key="pending" aria-label="Pending" title="Pending">
            <NewsStatusCard {...newsData} />
          </AccordionItem>
          <AccordionItem key="active" aria-label="Active" title="Active">
            <NewsStatusCard {...newsData} />
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}
