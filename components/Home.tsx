"use client"

import GradientBackground from "../components/GradientBg"
import ActionGradientButton from "../components/ActionGradientButton"
import { FaIndianRupeeSign } from "react-icons/fa6"
import { IoFlash } from "react-icons/io5"
import XPaddinText from "../components/XPaddingText"
import { useState } from "react"
import Model from "./Model"
import ModelForm from "./ModelForm"

const Home = () => {
    const [bookRepairModelOpen, setBookRepairModelOpen] = useState(false);
    const [getFreeQuoteModelOpen, setGetFreeQuoteModelOpen] = useState(false);

    return (
        <>
            <div
                id="home"
                className="font-[Urbanist] text-white overflow-x-hidden bg-linear-to-r from-[#0C0C0C] from-60% to-black sm:rounded-2xl p-4 pb-0 w-full z-0 relative lg:-translate-y-34 sm:-translate-y-40 -translate-y-36"
            >
                <div className="flex flex-row xl:gap-6 gap-4 items-center h-screen pt-20 xl:px-20 lg:px-0 md:px-10 p-0">
                    <img src={"/iphones.svg"} alt="Iphones" className="lg:block hidden h-full w-2/5 pointer-events-none select-none" />

                    <div className="lg:space-y-8 md:space-y-12 space-y-4 lg:w-3/5">
                        <div className="flex md:flex-row flex-col items-start flex-wrap gap-2 font-[Vazirmatn]">
                            <GradientBackground>
                                <>
                                    🏆 Expert Apple Service Provider
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
                            <ActionGradientButton
                                onClickHandle={() => setBookRepairModelOpen(true)}
                                text="Book Repair now - Same Day Service"
                                icon={<IoFlash
                                    className="sm:text-base text-xs" />}
                            />
                            <ActionGradientButton
                                onClickHandle={() => setGetFreeQuoteModelOpen(true)}
                                text="Get FREE Quote"
                                icon={<FaIndianRupeeSign
                                    className="sm:text-base text-xs" />}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Model
                open={bookRepairModelOpen}
                title={"Book Repair now - Same Day Service"}
                subTitle={"Doorstep Pickup & Delivery"}
                onClose={() => setBookRepairModelOpen(false)}
            >
                <ModelForm defaultDeviceBrand="" formFor="Book Repair" />
            </Model>

            <Model
                open={getFreeQuoteModelOpen}
                title={"Get A Free Quote!"}
                onClose={() => setGetFreeQuoteModelOpen(false)}
            >
                <ModelForm defaultDeviceBrand="" formFor="Free Quote" />
            </Model>
        </>
    )
};

export default Home