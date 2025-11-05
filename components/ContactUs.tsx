import { IoCallOutline, IoChevronDownOutline } from "react-icons/io5"
import XPaddinText from "./XPaddingText"
import { HiOutlineMail } from "react-icons/hi"
import { LuClock4 } from "react-icons/lu"
import { type JSX } from "react"
import { SlLocationPin } from "react-icons/sl"
import ModelForm from "./ModelForm"
// import Gradient from '../public/gradient-image.png'

const ContactUs = () => {

    return (
        <div id="contact" className="font-[Urbanist] bg-linear-to-b from-[#30303547] text-white from-40% t-[#3030350A] sm:rounded-2xl xl:px-20 md:px-10 px-5 xl:py-16 sm:py-12 py-6 flex flex-col items-center sm:gap-14 gap-10 relative z-0 md:mb-16">
            <h2 className="font-['Space_Grotesk'] sm:text-5xl text-4xl font-medium text-white">
                Contact Us
            </h2>

            <div className="flex md:flex-row flex-col xl:gap-20 gap-10 lg:items-center items-start w-full">
                <div className="lg:flex-1 flex-2/5 space-y-4">
                    <XPaddinText>
                        get in touch
                    </XPaddinText>
                    <h2 className="font-['Space_Grotesk'] sm:text-5xl text-4xl font-medium text-white">
                        Need help? We’ve got you covered
                    </h2>

                    <p className="sm:text-base text-sm">
                        We’re passionate about keeping your gadgets in top shape. Our team of experienced technicians.
                    </p>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 sm:mt-10 mt-6">
                        <ContactWays heading='Phone' icon={<IoCallOutline className="text-xl" />} value={['+919148078233']} />
                        <ContactWays heading='Email' icon={<HiOutlineMail className="text-xl" />} value={['nayaz@zyphon.in']} />
                        <ContactWays heading='Our Locations' icon={<SlLocationPin className="text-xl" />} value={['                                No. S3 Ground Floor, Madhuban Apartment, Hosur main road, next to IFB point, near Koramangala Forum Mall, Bengaluru - 560030']} />
                        <ContactWays heading='Opening Hours' icon={<LuClock4 className="text-xl" />} value={['Mon-Sat: 9AM-8PM', 'Sunday: 10AM-6PM']} />
                    </div>
                </div>

                <div className="lg:flex-1 md:flex-3/5 w-full">
                    <div className="border border-gray-600 w-full bg-blend-saturation rounded-2xl lg:p-10 sm:p-6 p-4 space-y-3">
                        <h3 className="font-['Space_Grotesk'] text-4xl font-medium text-[#EF644C] sm:mb-10 mb-4">
                            Get In Touch
                        </h3>

                        <ModelForm formFor="Contact Us" defaultDeviceBrand="" />
                    </div>
                </div>
            </div>

            {/* <img
                src={Gradient}
                className='absolute -bottom-82 w-full h-full object-contain pointer-events-none -z-0'
            /> */}
        </div>
    )
};


export const ContactWays = ({ icon, heading, value }: { icon: JSX.Element; heading: string; value: string[] }) => {

    return (
        <div className="flex gap-3 items-start">
            <div className="bg-[#EF644C] text-white sm:p-4 p-3 sm:rounded-2xl rounded-xl">
                {icon}
            </div>

            <div className="sm:text-sm text-xs text-white space-y-1">
                <p>{heading}</p>
                {value.map((val) => (
                    <p key={val}>
                        {heading === "Email" || heading == "Phone" ?
                            <a href={heading === "Email" ? `mailto:${val}` : heading === "Phone" ? `tel:${val}` : ""} >
                                {val}
                            </a>
                            :
                            <span>
                                {val}
                            </span>
                        }
                    </p>
                ))}
            </div>
        </div>
    )
};

export const Input = ({ title, type, value, setValue }: { title: string; type: "text" | "number" | "email"; value: string; setValue: (value: string) => void; }) => {
    return (
        <div className='space-y-2 flex-1'>
            <input
                type={type}
                value={value}
                placeholder={title}
                onChange={(e) => setValue(String(e.target.value))}
                className='border border-gray-600 rounded-xl w-full p-3 text-sm focus:outline-0 bg-transparent'
            />
        </div>
    )
};

export const DropDown = ({ title, value, setValue, options }: { title: string; value: string; setValue: (value: string) => void; options: string[]; }) => {
    return (
        <div className='space-y-2 flex-1 flex items-center relative'>
            <select
                name={title}
                id={title}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className='border border-gray-600 rounded-xl w-full p-3 text-sm bg-transparent focus:outline-0 appearance-none'
            >
                <option value="" disabled className="bg-black text-white">Select {title}</option>
                {options.map((op) => (
                    <option key={op} value={op} className="bg-black">{op}</option>
                ))}
            </select>

            <IoChevronDownOutline className='text-gray-500 absolute right-4 -translate-y-1' />
        </div>
    )
};

export default ContactUs