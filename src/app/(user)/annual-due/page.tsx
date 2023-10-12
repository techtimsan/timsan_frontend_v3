import { Footer, Navbar } from "@/components/ui"
import { Image } from "@nextui-org/image"
import AnnualDueForm from "./AnnualDueForm"

export default function AnnualDue() {
  return (
    <main>
      <Navbar />

      <section className="custom__section sm:grid sm:grid-cols-3 sm:gap-x-20 bg-gradient-to-b from-green/30 to-green/10">
        <div className="bg-green sm:col-span-1 px-10 py-10 rounded-3xl">
          <h3 className="text-white font-medium text-2xl text-center mb-10">Want to Pay Directly to our Bank Account ?</h3>
          <div className="space-y-5">
            <div>
              <h3 className="bg-white w-fit text-green font-medium px-3.5 py-1 rounded-md text-lg">
                Bank
              </h3>
              <h5 className="text-white font-semibold mt-1.5">
                Guaranty Trust Bank
              </h5>
            </div>
            <div>
              <h3 className="bg-white w-fit text-green font-medium px-3.5 py-1 rounded-md text-lg">
                Account Name
              </h3>
              <h5 className="text-white font-semibold mt-1.5">
                Tijaniyyah Muslim Students Association Of Nigeria
              </h5>
            </div>
            <div>
              <h3 className="bg-white w-fit text-green font-medium px-3.5 py-1 rounded-md text-lg">
                Account Number
              </h3>
              <h5 className="text-white font-semibold mt-1.5">
                567258736Y89R5
              </h5>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2 w-full">
          <h4 className="font-medium text-xl">Select your payment option : </h4>
          {/* payment options */}
          <AnnualDueForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}
