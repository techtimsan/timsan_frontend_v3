import NewsletterForm from "./NewsletterForm"

const Newsletter = () => {
  
  return (
    <div className="bg-green text-white absolute -top-20 p-5 mx-2.5 sm:flex sm:items-center sm:justify-between sm:gap-x-10 sm:w-fit">
      <div className="sm:w-1/2">
        <h3 className="font-semibold text-xl mb-1.5">
          Subscribe to our bi-weekly Newsletter
        </h3>
        <hr className="border-2 border-white rounded-full mb-1.5" />
        <h5 className="font-medium text-base">TIMSAN Alert and Events</h5>
        <p className="pb-5">Stay up to date with our weekly close.</p>
      </div>

      <div className="flex sm:h-fit sm:w-1/2 flex-col items-start bg-white sm:flex-row sm:justify-center rounded-md px-1.5 sm:px-3.5 sm:py-1.5">
        <NewsletterForm />
        
      </div>
    </div>
  )
}

export default Newsletter
