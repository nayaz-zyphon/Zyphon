import { IoCallOutline } from "react-icons/io5"
import XPaddinText from "./XPaddingText"
import { GoDotFill } from "react-icons/go"

const WhyChooseUs = () => {
    return (
        <div className="bg-[#1F1F1F] text-white p-4 sm:rounded-2xl flex md:flex-row flex-col items-center xl:gap-10 gap-6 relative">
            <div className="lg:w-2/5 md:w-1/2 w-full bg-white rounded-2xl sm:h-[550px] h-[300px]"></div>

            <div className="lg:w-3/5 md:w-1/2 w-full flex flex-col lg:gap-10 gap-6 justify-center md:py-10 py-6 md:px-0 sm:px-6 px-0 md:max-w-xl mx-auto">
                <div className="flex flex-col gap-6 items-start">
                    <XPaddinText>why choose us</XPaddinText>

                    <h2 className="font-['Space_Grotesk'] sm:text-5xl text-4xl font-medium">
                        Top Reasons to Choose Our Gadget Repair
                    </h2>
                </div>

                <p className="sm:text-base text-sm font-[Manrope]">
                    We’re passionate about keeping your gadgets in top shape. Our team of experienced technicians combine technical expertise with exceptional customer service.
                </p>

                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-0 font-[Manrope]">
                    {["Same-day Service", "Genuine Parts", "12-Month Warranty", "Transparent Pricing", "Free Doorstep Pickup & Delivery"].map((tag) => (
                        <p key={tag} className="flex flex-row items-center gap-2 sm:text-base text-sm">
                            <GoDotFill className="sm:text-2xl text-xl" />
                            {tag}
                        </p>
                    ))}
                </div>

                <div className="flex flex-row gap-3 font-[Manrope]">
                    <button className="cursor-pointer hover:bg-white p-3 rounded-full bg-[#EF644C] text-white hover:text-[#EF744C] transition">
                        <IoCallOutline className="text-xl" />
                    </button>

                    <div className="text-sm flex flex-col gap-0.5 justify-center">
                        <p className="text-[#D9D9D9]">Need any help?</p>
                        <p className="text-white">
                            <a href="tel:+919148078233">
                                +91 - 9148078233
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs