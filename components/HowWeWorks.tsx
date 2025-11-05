"use client"

import { useState } from "react";
import XPaddinText from "./XPaddingText"

const HowWeWorks = () => {
    const [opened, setOpened] = useState("02"); // Start with the first step open

    return (
        <div className='w-full text-white flex flex-col gap-4 xl:py-10 sm:pb-5 items-center relative lg:translate-y-0 md:-translate-y-16 translate-y-0 z-0'>
            <XPaddinText>
                how we work
            </XPaddinText>

            <h2 className="font-['Space_Grotesk'] text-5xl text-center font-medium">
                Fast 4-Step Service
            </h2>

            <div
                className="flex md:flex-row flex-col border border-gray-800 rounded-2xl mt-10 z-10 w-fit xl:max-w-[80%] max-w-[90%] overflow-hidden"
            >
                {steps.map((st, index) => {
                    const { step, heading, description } = st;
                    const isOpened = opened === step;

                    return (
                        <div
                            key={index}
                            onClick={() => setOpened(step)}
                            className={`transition-all duration-500 ease-in-out sm:cursor-pointer overflow-hidden flex md:flex-col md:items-start items-center justify-between lg:h-[400px] md:h-[300px] md:py-0 py-5 ${isOpened ? "md:w-sm sm:bg-[#0c0c0c]" : "md:w-xs"} ${index === 0 ? "md:rounded-l-2xl rounded-t-2xl" : ""} ${index === steps.length - 1 ? "md:rounded-r-2xl rounded-b-2xl" : ""}`}
                        >
                            <h2
                                className={`${index % 2 === 0 ? "text-[#EF644C]" : "text-white"} font-['Space_Grotesk'] font-bold lg:text-9xl md:text-6xl text-7xl lg:-translate-x-10 -translate-x-4`}
                            >
                                {step}
                            </h2>

                            <div className={"sm:p-8 p-4 " + `${isOpened ? "" : "mt-auto"}`}>
                                <h2
                                    className={`${isOpened ? "lg:text-3xl sm:text-2xl text-xl" : "lg:text-2xl text-xl"} font-['Space_Grotesk'] font-medium md:text-left text-right`}
                                >
                                    {heading}
                                </h2>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out md:text-left text-right ${isOpened ? "max-h-40 opacity-100 mt-4" : "sm:max-h-0 max-h-40 sm:opacity-0 opacity-100 sm:mt-0 mt-4"}`}
                                >
                                    <p className="lg:text-base sm:text-sm text-xs font-[Manrope]">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <>
                <svg className="absolute right-0 xl:-top-1/2 -top-20 -z-50 md:translate-x-4" width="500" height="1222" viewBox="0 0 631 1222" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_235_1896)">
                        <circle cx="611" cy="611" r="157" fill="#C25340" floodOpacity="0.9" />
                    </g>
                    <defs>
                        <filter id="filter0_f_235_1896" x="0" y="0" width="1222" height="1222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="227" result="effect1_foregroundBlur_235_1896" />
                        </filter>
                    </defs>
                </svg>

                <svg className="absolute left-0 top-0 z-0 -translate-x-4 sm:block hidden" width="598" height="1222" viewBox="0 0 598 1222" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_235_2212)">
                        <circle cx="-13" cy="611" r="157" fill="#C25340" floodOpacity="0.9" />
                    </g>
                    <defs>
                        <filter id="filter0_f_235_2212" x="-624" y="0" width="1222" height="1222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="227" result="effect1_foregroundBlur_235_2212" />
                        </filter>
                    </defs>
                </svg>
            </>
        </div>
    )
};

const steps = [
    {
        step: "01",
        heading: "Book your Service",
        description: "Book your service now"
    },
    {
        step: "02",
        heading: "Diagnosis",
        description: "Our skilled team will run diagnostics to identify the issue"
    },
    {
        step: "03",
        heading: "Repair the Device",
        description: "We repair it within 4-5 hours"
    },
    {
        step: "04",
        heading: "Test and Deliver",
        description: "Before delivering we test it to confirm the fitness"
    }
]

export default HowWeWorks