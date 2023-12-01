import { Footer, Navbar } from "@/components/ui"
import { Link } from "@nextui-org/link"

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="my-20 text-center sm:my-0 sm:h-screen space-y-10 flex flex-col items-center justify-center px-5">
        <h3 className="font-bold text-4xl">You&apos;ve washed ashore on null island</h3>
        <p>
          Sadly, the party is over. Head back to the{" "}
          <Link href="/">mainland</Link>.
        </p>
      </section>
      <Footer />
    </main>
  )
}
