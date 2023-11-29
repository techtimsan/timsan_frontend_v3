import { Button } from "@nextui-org/button"
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card"
import { Link } from "@nextui-org/link"
import DonationForm from "./DonationForm"
import { Footer, Navbar } from "@/components/ui"

export default function Donate() {
  return (
    <main>
      <Navbar />
      <section className="custom__section bg-gradient-to-b from-green/10 to-green/50 sm:grid sm:grid-cols-2 sm:gap-x-10">
        <div className="">
          <h2 className="uppercase font-semibold text-4xl my-10">
            Donate to the Cause of Allah!
          </h2>
          <p className="mb-10">
            &ldquo;For those who give in charity, men and women, and loan to
            Allah a Beautiful loan, it shall be increased manifold (to their
            credit), and they shall have (besides) a liberal reward.&rdquo;
          </p>
          <Button
            as={Link}
            href="#donate"
            className="bg-green text-white font-medium mb-10"
          >
            Donate Now
          </Button>
        </div>
      </section>

      {/* card ? */}
      <section id="donate" className="custom__section">
        <Card>
          <CardBody className="px-5 sm:px-10">
            <div className="flex text-center space-y-5 items-center justify-center flex-col">
              <h3 className="uppercase text-4xl text-green font-medium">
                We are glad to get your donation
              </h3>
              <p>
                You can help make a difference by donating to us, Your generous
                donations go directly towards the cause of Allah and help us
                continue to develop the association and facilitate different
                activities of the association.
              </p>

              <p>
                Together, we can continue to fight and contribute to the cause
                of Allah.
              </p>
              <p>Thank you for your support!</p>
            </div>
            <DonationForm />
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </section>

      <section className="custom__section">
        <div className="w-full flex items-center justify-center">
          <h2 className="uppercase text-center font-semibold text-4xl mb-10 max-w-md">
            Donate Directly to Our Bank Account
          </h2>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="bg-green w-fit text-white font-medium px-3.5 py-1 rounded-md text-lg">
              Bank
            </h3>
            <h5 className="text-timsan-gray font-semibold mt-1.5">
              Guaranty Trust Bank
            </h5>
          </div>
          <div>
            <h3 className="bg-green w-fit text-white font-medium px-3.5 py-1 rounded-md text-lg">
              Account Name
            </h3>
            <h5 className="text-timsan-gray font-semibold mt-1.5">
              Tijaniyyah Muslim Students Association Of Nigeria
            </h5>
          </div>
          <div>
            <h3 className="bg-green w-fit text-white font-medium px-3.5 py-1 rounded-md text-lg">
              Account Number
            </h3>
            <h5 className="text-timsan-gray font-semibold mt-1.5">
            0157080925
            </h5>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </main>
  )
}
