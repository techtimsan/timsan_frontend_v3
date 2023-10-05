import { Footer, Navbar } from "@/components/ui"
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"

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
      <section className="custom__section">
        <h2>TILETS</h2>

        <h5>Access all Sessions and Other Online Learning Resources.</h5>
        <h6>All of your learning resources in one place.</h6>

        <Button className="bg-green text-white">Explore</Button>
      </section>

      <section className="custom__section">
        {/* cards */}
        <div className="grid grid-cols-2">
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
        <h4>Popular Courses</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus magnam
          non vero doloremque esse asperiores similique ad nostrum magni sed
          facilis, libero est. Quod aspernatur ea quas quidem velit cupiditate?
        </p>

        {/* course cards */}
        <div></div>
      </section>
      <Footer />
    </main>
  )
}
