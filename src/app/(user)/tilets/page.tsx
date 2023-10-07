import { Footer, Navbar } from "@/components/ui"
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { CourseCard, FeedbackCard } from "@/components/cards"
import { courses, feedbacks } from "@/utils/constants"

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

      <section className="custom__section">
        <h2>Learn Anything</h2>
        <div className="w-full">
          <Image
            src="/assets/tilet_group_IMG.png"
            alt="Tilet Group Image"
            className="w-full object-cover object-center h-[500px]"
          />
        </div>
        <h3>Benefit from our online TILETS platform</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nihil
          delectus sapiente in, eveniet dolor ducimus consequatur ratione rerum
          laboriosam harum molestiae eius doloribus ad facilis vLorem ipsum
          dolor sit amet consectetur adipisicing elit. Quod nihil delectus
          sapiente in, eveniet dolor ducimus consequatur ratione rerum
          laboriosam harum molestiae eius doloribus ad facilis
          voluptatemoluptatem architecto illum? Suscipit magnam aperiam rem at,
          totam aspernatur officia, quo cumque maxime nulla ducimus explicabo id
          molestiae?
        </p>

        {/* info */}
        <div>
          <div>
            <h5>Free crash courses.</h5>
          </div>
          <div>
            <h5>Free Islamic Courses.</h5>
          </div>
          <div>
            <h5>Access to TILETS session of various chapters.</h5>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button>Explore Courses</Button>
          <Button>Access TILETS</Button>
        </div>
      </section>

      {/* popular courses */}
      <section className="custom__section">
        <h3>Popular Courses</h3>
        {/* course cards */}
        <div className="my-5">
          {courses.splice(0, 2).map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      {/* tilets sessions */}
      <section className="custom__section">
        <h3>TILETS Sessions</h3>
        <div></div>
      </section>

      {/* feedback carousel */}
      <section className="custom__section">
        <h3>Feedback From Members</h3>

        <div>
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.user.name} {...feedback} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
