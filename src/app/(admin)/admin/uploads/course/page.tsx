import { ManageCourseCard } from "@/components/cards";
import courses from '@/data/courses.json'
import FormFields from "./FormFields";

export default function CourseUploads() {
  return (
    <main className="p-5 sm:px-10">
      <h2>Add Course</h2>

      <FormFields />
    </main>
  )
}
