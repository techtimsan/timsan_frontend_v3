import { Footer, Navbar } from "@/components/ui"
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { CourseCard, FeedbackCard, TiletCard } from "@/components/cards"
import { courses, feedbacks, tilets } from "@/utils/constants"

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
        <div className="sm:grid sm:grid-cols-2 sm:gap-x-20">
          <div className="sm:col-span-1">
            <h2 className="font-medium text-timsan-gray text-xl sm:mb-5">
              TILETS
            </h2>

            <div className="hidden sm:block">
              <h2 className="font-semibold text-5xl sm:mb-5">
                Leadership and Empowerment Training Scheme
              </h2>
              <p className="sm:mb-10">
                Aimed at equipping the whole TIMSAN membership with the crucial
                skills they need in all spheres of their in and out of school
                situations. This is in accordance with the committee&apos;s
                mission and motto of &ldquo;Training the Trainer&rdquo; as it is
                our belief that every member is a Leader / Trainer and a
                prospective member of a growing and greater community of
                Intellectuals.
              </p>

              <Button className="bg-green text-white px-5 font-semibold text-lg py-2.5">
                Explore TILETS
              </Button>
            </div>
          </div>
          <div className="flex items-center w-full justify-center sm:p-10 sm:block sm:col-span-1">
            <Image
              src="/assets/tilet_heroIMG.svg"
              alt="Tilet Image"
              className="object-cover object-center sm:w-screen"
            />
          </div>
        </div>
        <div className="sm:hidden">
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
        </div>
      </section>

      <section className="custom__section my-5">
        {/* cards */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 sm:w-full sm:flex sm:items-center sm:justify-center mb-10">
          {chaptersData.map(({ text, count }) => (
            <Card
              key={text}
              shadow="sm"
              isPressable
              className="p-5 sm:w-[190px]"
            >
              <CardBody className="overflow-visible py-3.5 px-0">
                <h3 className="text-green font-bold text-6xl">{count}</h3>
                <p className="font-semibold text-sm">{text}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* courses */}
        <h4 className="my-5 text-3xl font-semibold">Popular Courses</h4>
        <div className="flex items-center justify-center">
          <p className="text-center max-w-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            magnam
          </p>
        </div>

        {/* course cards */}
        <div className="my-5 sm:grid sm:grid-cols-4 sm:gap-x-10">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      <section className="custom__section">
        <h2 className="font-medium text-timsan-gray text-xl sm:mb-5">
          Learn Anything
        </h2>
        <div className="sm:grid sm:grid-cols-2 sm:gap-x-20">
          <div className="w-full sm:order-1">
            <Image
              src="/assets/tilet_group_IMG.png"
              alt="Tilet Group Image"
              className="w-full object-cover object-center h-[500px]"
            />
          </div>
          <div>
            <h3 className="text-5xl sm:mb-5 text-green font-semibold">
              Benefit from our online TILETS platform
            </h3>
            <p className="sm:mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              nihil delectus sapiente in, eveniet dolor ducimus consequatur
              ratione rerum laboriosam harum molestiae eius doloribus ad facilis
              vLorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              nihil delectus sapiente in, eveniet dolor ducimus consequatur
              ratione rerum laboriosam harum molestiae eius doloribus ad facilis
              voluptatemoluptatem architecto illum? Suscipit magnam aperiam rem
              at, totam aspernatur officia, quo cumque maxime nulla ducimus
              explicabo id molestiae?
            </p>

            {/* info */}
            <div className="sm:mb-10">
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

            <div className="flex items-center justify-center sm:justify-start space-x-10">
              <Button className="bg-transparent text-timsan-gray border border-gray-400">
                Explore Courses
              </Button>
              <Button className="bg-green text-white">Access TILETS</Button>
            </div>
          </div>
        </div>
      </section>

      {/* popular courses */}
      <section className="custom__section">
        <h3>Recommended Courses</h3>
        {/* course cards */}
        {/* showing just 2 */}
        <div className="my-5 sm:grid sm:grid-cols-4 sm:gap-x-10">
          {courses.splice(0, 2).map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      {/* tilets sessions */}
      <section className="custom__section">
        <h3 className="sm:mb-10">TILETS Sessions</h3>
        <div>{tilets.map((tilet) => (
          <TiletCard key={tilet.title} {...tilet} />
        ))}</div>
      </section>

      {/* feedback carousel */}
      <section className="custom__section">
        <h3 className="sm:mb-10">Feedback From Members</h3>

        <div className="sm:grid sm:grid-cols-2 sm:gap-x-10">
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.user.name} {...feedback} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
