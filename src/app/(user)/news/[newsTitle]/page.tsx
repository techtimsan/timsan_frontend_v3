import { ChapterMap } from "@/components/utils"
import { BASE_API_URL } from "@/utils/constants"



export default function NewsTitle({
  params,
}: {
  params: { newsTitle: string }
}) {
  // format slug
  const decodedTitle = decodeURIComponent(params.newsTitle)
  return (
    <main>
      {/* top nav */}

      <section className="custom__section sm:grid sm:grid-cols-6 sm:gap-x-3">
        <div className="sm:col-span-4">
          <div className="sm:grid sm:grid-cols-6 sm:gap-x-2">
            <div className="sm:col-span-1">
              <div>
                <h5>Share</h5>
                {/* icons */}
              </div>
            </div>
            <div className="sm:col-span-5">
              <h2>{decodedTitle}</h2>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <h3>Other Broadcast</h3>
        </div>
      </section>

      <section className="custom__section">
        <h3>Latest News</h3>
      </section>

      <ChapterMap />
    </main>
  )
}
