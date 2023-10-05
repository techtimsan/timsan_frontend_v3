import { Button } from "@nextui-org/button"

const HeroSection = () => {
  return (
    <section className="custom__section">
      <h2 className="text-center font-semibold text-2xl">
        Tijaniyyah <span className="text-green">Muslim</span> Students&apos;{" "}
        <span className="text-green">Association</span> of Nigeria
      </h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        cupiditate fuga exercitationem amet quisquam minima labore eius
        voluptatibus? Reprehenderit ipsam maiores illum odio repudiandae sequi
        quas velit quam consectetur? Enim eius veritatis culpa tenetur eveniet
        nostrum optio sequi quos voluptatum pariatur consequuntur ipsam autem
        repellat voluptas nulla, quibusdam fuga ratione?
      </p>
      <div className="flex items-center space-x-3.5">
        <Button>About Us</Button>
        <Button className="bg-green text-white">Donate Now</Button>
      </div>
    </section>
  )
}

export default HeroSection
