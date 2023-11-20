import { Footer, Navbar } from "@/components/ui";
import { ConferenceSearchForm } from "./ConferenceSearchForm";

export default function Conference() {
    return <main>
        <Navbar />
        <section className="custom__section h-[80vh] py-auto bg-page-bg bg-cover bg-center flex items-center justify-center flex-col text-white relative">
            <div className="absolute inset-0 bg-black/50" />
            <div className="z-10 text-center space-y-5 sm:w-[50vw]"><h2 className="font-semibold text-3xl">Welcome to IOTB and TIMSAN Annual National Conference Page</h2>
            <p>Participate in an extraordinary experience while delving into the heart of leadership excellence, creativity, innovation, brotherhood, and exponential growth.</p>
            <ConferenceSearchForm /></div>
        </section>
        <Footer />
    </main>
}