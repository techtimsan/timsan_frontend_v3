import timsanLogo from "../../../public/assets/timsan_logo.png"
import excos from "../../data/excos.json"
import courses from "../../data/courses.json"
import feedbacks from "../../data/feedbacks.json"
import news from "../../data/news.json"
import books from "../../data/books.json"
import tilets from '../../data/tilets.json'
import loginRegisterBG from '../../../public/assets/login_bg.jpg'

export { timsanLogo, excos, courses, feedbacks, news, books, tilets, loginRegisterBG }

// Api Url
export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL  as string


export const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string