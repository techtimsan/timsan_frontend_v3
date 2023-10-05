import { Footer, Navbar } from "@/components/ui"
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import courses from "../../data/courses.json"
import { CourseCard } from "@/components/cards"

export default function Tilets() {
  const chaptersData = [
    {
      text: "Sessions Held",
      count: 13,
    },
    {
      text: "Available Courses",
      count: 12,
    },
  ]
  return (
    <main>
      <Navbar />
      <section className="custom__section bg-tilet-hero bg-cover bg-center">
        <h2 className="font-medium text-timsan-gray text-xl">TILETS</h2>
        <div className="w-full flex items-center justify-center my-7">
          <Image
            src="/assets/tilet_heroIMG.svg"
            alt="Tilet Image"
            className="object-cover object-center"
          />
        </div>
        <h5 className="text-center text-2xl text-timsan-gray font-medium">
          Access all Sessions and Other Online Learning Resources.
        </h5>
        <h6 className="text-center my-2.5">
          All of your learning resources in one place.
        </h6>

        <div className="flex items-center justify-center my-3.5">
          <Button className="bg-green text-white px-10 font-semibold text-lg py-2.5">
            Explore
          </Button>
        </div>
      </section>

      <section className="custom__section my-5">
        {/* cards */}
        <div className="grid grid-cols-2 gap-3.5">
          {chaptersData.map(({ text, count }) => (
            <Card key={text} shadow="sm" isPressable className="p-5">
              <CardBody className="overflow-visible py-3.5 px-0">
                <h3 className="text-green font-bold text-6xl">{count}</h3>
                <p className="font-semibold text-sm">{text}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* courses */}
        <h4 className="my-5 text-3xl font-semibold">Popular Courses</h4>
        <p className="text-center ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus magnam
        </p>

        {/* course cards */}
        <div className="my-5">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
