import { LuDot } from 'react-icons/lu';
import XPaddinText from './XPaddingText'
import { FiArrowUpRight } from 'react-icons/fi';
import iPhone from "../assets/services/iphone.svg"
import iPad from "../assets/services/ipad.svg"
import Watch from "../assets/services/watch.svg"
import MacBook from "../assets/services/macbook.svg"
import type { JSX } from 'react';

const OurServices = () => {
    return (
        <div
            id='services'
            className='xl:py-14 py-10 xl:px-20 sm:px-10 px-5 font-[Urbanist] bg-[#120D0D] text-white w-full sm:rounded-2xl space-y-3 xl:-translate-y-0 lg:-translate-y-6 md:-translate-y-20 -translate-y-6'
        >
            <XPaddinText>
                our services
            </XPaddinText>
            <h2 className="font-['Space_Grotesk'] sm:text-5xl text-4xl font-medium bg-gradient-to-r from-[#E60283] via-[#F1D507] to-[#DA4A02] bg-clip-text text-transparent">
                Got a Device Issue?
            </h2>

            <p className='sm:text-base text-sm'>Same-day iPhone repair in Bangalore with genuine Apple parts and 12-month warranty. Free pickup and delivery across all areas.</p>

            <RepairServices />
        </div>
    )
};

const RepairServices = () => {
    return (
        <div className="xl:flex grid sm:grid-cols-2 grid-cols-1 flex-row gap-4 mt-6">
            {servicesJson.screenReplacement.map((card, index) => {
                const { title, services, image } = card;
                return (
                    <Gradientbg key={index}>
                        <div className="flex-1 flex flex-col gap-4 h-full p-4 sm:rounded-3xl rounded-2xl bg-gradient-to-r from-[#181414] from-40% to-[#141313]">
                            <img src={image} className='w-full xl:h-fit md:h-80 h-48 rounded-2xl pointer-events-none select-none object-cover' />

                            <div className="space-y-1">
                                <p className="sm:text-2xl text-lg font-['Space_Grotesk'] font-medium bg-gradient-to-r from-[#E60283] via-[#F1D507] to-[#DA4A02] bg-clip-text text-transparent">
                                    {title}
                                </p>

                                {services?.map((ser, index) => (
                                    <div key={index} className="flex flex-row gap-2 items-start text-white">
                                        <LuDot className="mt-1" />
                                        <p className='sm:text-sm text-xs text-gray-200 flex-1'>
                                            {ser}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="font-['Space_Grotesk'] sm:text-sm text-xs bg-gradient-to-r from-[#E60283] via-[#F1D507] to-[#DA4A02] p-[1.5px] w-fit rounded-full mt-auto">
                                <button className="group bg-[#1B1B1B] flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer text-white font-medium transition whitespace-nowrap">
                                    Book {title}
                                    <FiArrowUpRight className="sm:text-lg text-sm transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </button>
                            </div>
                        </div>
                    </Gradientbg>
                )
            })}
        </div>
    )
};

const Gradientbg = ({ children }: { children: JSX.Element }) => {
    return (
        <div
            className='p-[1px] bg-[linear-gradient(250deg,#757575,#00000000,#757575)] sm:rounded-3xl rounded-2xl flex-1'
        >
            {children}
        </div>
    )
};

const servicesJson = {
    screenReplacement: [
        {
            image: iPhone,
            title: "iPhone Repair",
            services: [
                "Screen & Backglass Replacement (All Models)",
                "Battery & Charging Port Replacement",
                "Water Damage Repair",
                "Camera & Face ID Fix",
                "Network & Wifi Fix",
                "Logic Board & Physical damage Repair",
            ]
        },
        {
            image: iPad,
            title: "iPad Repair",
            services: [
                "Screen replacement",
                "Battery & Charging",
                "Touch Digitizer",
                "Logic board, Water damage & physical damages",
                "iPadOS Software Issues"
            ]
        },
        {
            image: Watch,
            title: "Apple Watch Repairs",
            services: [
                "Screen replacement",
                "Touch Digitizer",
                "Battery & Back glass"
            ]
        },
        {
            image: MacBook,
            title: "MacBook and Mac",
            services: [
                "Screen replacement",
                "Battery & Charging",
                "Keyboard & light",
                "Logic board, Water damage & physical damages",
                "SSD & RAM Upgrades",
                "Overheating & Fan Issues",
                "macOS Software Troubleshooting"
            ]
        }
    ]
}

export default OurServices