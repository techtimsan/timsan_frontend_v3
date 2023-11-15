import timsanLogo from "../../../public/assets/timsan_logo.png"
import excos from "../../data/excos.json"
import courses from "../../data/courses.json"
import feedbacks from "../../data/feedbacks.json"
import news from "../../data/news.json"
import books from "../../data/books.json"
import tilets from '../../data/tilets.json'

export { timsanLogo, excos, courses, feedbacks, news, books, tilets }

// Api Url
export const BASE_API_URL = process.env.BASE_API_URL ? process.env.BASE_API_URL  as string : "http://localhost:3000"
