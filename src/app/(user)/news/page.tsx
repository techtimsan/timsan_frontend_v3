import { Footer, Navbar } from "@/components/ui"
import { ChapterMap } from "@/components/utils"
import { news } from "@/utils/constants"
import { Card, CardBody } from "@nextui-org/card"
import { IoCalendarNumberOutline } from "react-icons/io5"

// generate all news params at build time
// export async function generateStaticParams(newsTitle: string) {
//   const news = await fetch(`${BASE_API_URL}/news/${newsTitle}`, {
//     cache: "force-cache",
//   })
//     .then((res) => res.json())
//     .catch((e) => console.log(e))

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

const NewsCard = ({}) => {
  return (
    <Card className="rounded-none bg-about-hero">
      <CardBody className="p-0">
        <div className="bg-black bg-opacity-50 backdrop-blur-lg px-5 py-3.5 text-white mt-auto">
          <h4 className="font-medium text-lg mb-2.5">{news[1].title}</h4>
          <div className="flex items-center space-x-2.5">
            <IoCalendarNumberOutline className="text-xl text-white" />
            <h6>April 20, 2023</h6>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default function NewsAndBroadcasts() {
  return (
    <main>
      <Navbar />
      <section className="custom__section sm:grid sm:grid-cols-5 sm:gap-x-2">
        <Card className="sm:col-span-3 rounded-none sm:h-[420px] bg-about-hero">
          <CardBody className="p-0 flex flex-col justify-between">
            <h3 className="bg-black bg-opacity-50 font-semibold backdrop-blur-lg text-3xl text-white px-5 py-2.5 w-fit">
              Latest Broadcast
            </h3>
            <div className="bg-black bg-opacity-50 backdrop-blur-lg px-5 py-3.5 text-white">
              <h4 className="font-medium text-2xl mb-2.5">{news[0].title}</h4>
              <div className="flex items-center space-x-2.5">
                <IoCalendarNumberOutline className="text-xl text-white" />
                <h6>April 20, 2023</h6>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* right */}
        <div className="sm:col-span-2 sm:grid sm:grid-rows-2 sm:gap-y-2">
          {/* top */}
          <Card className="rounded-none bg-about-hero">
            <CardBody className="p-0">
              <div className="bg-black bg-opacity-50 backdrop-blur-lg px-5 py-3.5 text-white mt-auto">
                <h4 className="font-medium text-lg mb-2.5">{news[1].title}</h4>
                <div className="flex items-center space-x-2.5">
                  <IoCalendarNumberOutline className="text-xl text-white" />
                  <h6>April 20, 2023</h6>
                </div>
              </div>
            </CardBody>
          </Card>
          {/* bottom */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-2">
            <Card className="sm:col-span-1 rounded-none bg-about-hero">
              <CardBody className="p-0">
                <div className="bg-black bg-opacity-50 backdrop-blur-lg px-5 py-3.5 text-white mt-auto">
                  <h4 className="font-medium text-base mb-2.5 truncate">
                    {news[2].title}
                  </h4>
                  <div className="flex items-center space-x-2.5">
                    <IoCalendarNumberOutline className="text-xl text-white" />
                    <h6>April 20, 2023</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="rounded-none bg-about-hero sm:col-span-1">
              <CardBody className="p-0">
                <div className="bg-black bg-opacity-50 backdrop-blur-lg px-5 py-3.5 text-white mt-auto">
                  <h4 className="font-medium text-base mb-2.5 truncate">
                    {news[2].title}
                  </h4>
                  <div className="flex items-center space-x-2.5">
                    <IoCalendarNumberOutline className="text-xl text-white" />
                    <h6>April 20, 2023</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="custom__section sm:grid sm:grid-cols-5 sm:gap-x-5">
        {/* left */}
        <div className="col-span-3">
          <h3>Latest News</h3>
        </div>

        {/* right */}
        <div className="col-span-2">
          <h4>Follow Us</h4>
          {/* social icons */}
          <h5>Our Broadcast</h5>
        </div>
      </section>

      <ChapterMap />
      <Footer />
    </main>
  )
}
