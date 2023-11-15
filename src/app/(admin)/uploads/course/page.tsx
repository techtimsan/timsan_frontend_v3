import { ManageCourseCard } from "@/components/cards";
import courses from '@/data/courses.json'

export default function CourseUploads() {
  return (
    <main>
      <h2>Manage Course</h2>

      {/* search box */}

      {/* cards */}
      <section className="grid grid-cols-3 gap-5">
        <ManageCourseCard {...courses[0]} />
        <ManageCourseCard {...courses[1]} />
        <ManageCourseCard {...courses[2]} />
      </section>
    </main>
  )
}
