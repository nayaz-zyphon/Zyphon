import GradientBackground from "../components/GradientBg"
import Phones from '../assets/iphones.svg'
import ActionGradientButton from "../components/ActionGradientButton"
import { FaIndianRupeeSign } from "react-icons/fa6"
import { IoFlash } from "react-icons/io5"
import XPaddinText from "../components/XPaddingText"

const Home = () => {
    return (
        <div
            id="home"
            className="font-[Urbanist] text-white bg-gradient-to-r from-[#0C0C0C] from-60% to-black sm:rounded-2xl p-4 w-full z-0 relative lg:-translate-y-30 sm:-translate-y-40 -translate-y-36"
        >
            <div className="flex flex-row xl:gap-6 gap-4 items-center h-screen pt-20 xl:px-20 lg:px-0 md:px-10 p-0">
                <img src={Phones} alt="Iphones" className="lg:block hidden h-full w-2/5 pointer-events-none select-none" />

                <div className="lg:space-y-8 md:space-y-12 space-y-4 lg:w-3/5">
                    <div className="flex md:flex-row flex-col items-start flex-wrap gap-2 font-[Vazirmatn]">
                        <GradientBackground>
                            <>
                                🏆 Apple Authorized Service Provider
                            </>
                        </GradientBackground>
                        <GradientBackground>
                            <>
                                🔧 Certified Technicians
                            </>
                        </GradientBackground>
                        <GradientBackground>
                            <>
                                ⭐ 4.9/5 Rating
                            </>
                        </GradientBackground>
                    </div>

                    <XPaddinText>
                        your device
                    </XPaddinText>

                    <h1 className="font-['Space_Grotesk'] xl:text-7xl lg:text-6xl sm:text-5xl text-4xl font-medium">
                        Bengaluru’s #1 Apple Device Repair Center
                    </h1>

                    <p className="sm:text-base text-sm">
                        Expert iPhone, iPad, Macbook, & Apple Watch repair services in Bengaluru. Same-day repairs with genuine
                        Apple parts, Apple-certified technicians, free doorstep pickup & delivery. 12-month warranty guaranteed.
                    </p>

                    <div className="flex gap-x-6 gap-y-2 md:flex-row flex-col items-start md:flex-nowrap flex-wrap">
                        <ActionGradientButton text="Book Repair now - Same Day Service" icon={<IoFlash className="sm:text-base text-xs" />} />
                        <ActionGradientButton text="Get FREE Quote" icon={<FaIndianRupeeSign className="sm:text-base text-xs" />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home