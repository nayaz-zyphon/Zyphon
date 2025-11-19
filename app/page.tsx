import Home from "../components/Home"
import HowWeWork from "../components/HowWeWorks"
import WhoWeAre from "../components/WhoWeAre"
import ServicesCounts from "../components/ServicesCounts"
import OurServices from "../components/OurServices"
import AnimatedContactUs from "../components/AnimatedContactUs"
import WhyChooseUs from "../components/WhyChooseUs"
import About from "../components/About"
import FAQ from "../components/FAQ"
import ContactUs from "../components/ContactUs"
import Footer from "../layout/Footer"
import NavBar from "@/layout/NavBar"

const Hero = () => {
  return (
    <div className="bg-black">
      <NavBar />

      <div className="sm:p-4">
        <Home />

        <ServicesCounts />

        <WhoWeAre />

        <OurServices />
      </div>

      <div id="process">
        <div className="sm:p-4">
          <HowWeWork />
        </div>
        <AnimatedContactUs />

        <div className="sm:p-4">
          <WhyChooseUs />
        </div>
      </div>

      <div className="sm:p-4">
        <About />

        <FAQ />

        <ContactUs />

        <Footer />
      </div>
    </div>
  )
}

export default Hero