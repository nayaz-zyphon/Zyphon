import { IoCallOutline, IoChevronDownOutline } from "react-icons/io5"
import XPaddinText from "./XPaddingText"
import { HiOutlineMail } from "react-icons/hi"
import { LuClock4 } from "react-icons/lu"
import { useState, type JSX } from "react"
import { SlLocationPin } from "react-icons/sl"
// import Gradient from '../assets/gradient-image.png'

const ContactUs = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [deviceType, setDeviceType] = useState("");
    const [deviceBrand, setDeviceBrand] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [preferredService, setPreferredService] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCheckboxChange = (event: any) => {
        setIsAgreed(event.target.checked);
    };

    const [selectedDeviceType, setSelectedDeviceType] = useState("")

    const options = [
        "Doorstep Service (Free pickup & delivery)",
        "Visit Service Center",
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(
                "https://cloud.activepieces.com/api/v1/webhooks/trgAte5BA5ys7IoMOLeow/test",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullName,
                        email,
                        phoneNum,
                        deviceType,
                        deviceBrand,
                        preferredService,
                    }),
                }
            );

            if (!response.ok) throw new Error("Network response was not ok");

            console.log("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="contact" className="font-[Urbanist] bg-gradient-to-b from-[#30303547] text-white from-40% t-[#3030350A] sm:rounded-2xl xl:px-20 md:px-10 px-5 xl:py-16 sm:py-12 py-6 flex flex-col items-center sm:gap-14 gap-10 relative z-0 md:mb-16">
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

                        <Input
                            title='Name *'
                            value={fullName}
                            setValue={setFullName}
                            type='text'
                        />

                        <div className="flex sm:flex-row flex-col gap-3">
                            <Input
                                title='Email*'
                                value={email}
                                setValue={setEmail}
                                type='email'
                            />
                            <Input
                                title='Phone Number*'
                                value={phoneNum}
                                setValue={setPhoneNum}
                                type='number'
                            />
                        </div>

                        <div className="flex sm:flex-row flex-col sm:gap-3 gap-1">
                            <DropDown
                                value={deviceType}
                                setValue={(value) => {
                                    setDeviceType(value);
                                    setSelectedDeviceType(value)
                                }}
                                title='Device Type'
                                options={["iPhone", "iPad", "iWatch", "MacBook/Mac"]}
                            />
                            <DropDown
                                value={deviceBrand}
                                setValue={setDeviceBrand}
                                title='Device Brand'
                                options={
                                    selectedDeviceType === "iPhone"
                                        ? [
                                            "iPhone X",
                                            "iPhone XR",
                                            "iPhone XS/XS Max",
                                            "iPhone 11",
                                            "iPhone 11 Pro/Pro Max",
                                            "iPhone SE (2nd gen)",
                                            "iPhone 12",
                                            "iPhone 12 mini",
                                            "iPhone 12 Pro/Pro Max",
                                            "iPhone 13",
                                            "iPhone 13 mini",
                                            "iPhone 13 Pro/Pro Max",
                                            "iPhone SE (3rd gen)",
                                            "iPhone 14",
                                            "iPhone 14 Plus",
                                            "iPhone 14 Pro/Pro Max",
                                            "iPhone 15",
                                            "iPhone 15 Plus",
                                            "iPhone 15 Pro/Pro Max",
                                            "iPhone 16",
                                            "iPhone 16 Plus",
                                            "iPhone 16 Pro/Pro Max",
                                            "iPhone 17",
                                            "iPhone 17 Pro/Pro Max",
                                            "iPhone Air",
                                        ]
                                        : selectedDeviceType === "iPad"
                                            ? [
                                                "iPad",
                                                "iPad Mini",
                                                "iPad Mini 2",
                                                "iPad Mini 3",
                                                "iPad Mini 4",
                                                "iPad Mini 5th gen",
                                                "iPad Mini 6th gen",
                                                "iPad Mini 7th gen",
                                                "iPad Air 1st gen",
                                                "iPad Air 2nd gen",
                                                "iPad Air 3rd gen",
                                                "iPad Air 4th gen",
                                                "iPad Air 5th gen",
                                                "iPad Air 6th gen",
                                                "iPad Air 7th gen",
                                                "iPad Pro 1st gen",
                                                "iPad Pro 2nd gen",
                                                "iPad Pro 3rd gen",
                                                "iPad Pro 4th gen",
                                                "iPad Pro 5th gen",
                                                "iPad Pro 6th gen",
                                                "iPad Pro 7th gen",
                                                "Others"
                                            ]
                                            :
                                            selectedDeviceType === "iWatch"
                                                ?
                                                [
                                                    "iWatch Series 1",
                                                    "iWatch Series 2",
                                                    "iWatch Series 3",
                                                    "iWatch Series 4",
                                                    "iWatch Series 5",
                                                    "iWatch Series 6",
                                                    "iWatch Series 7",
                                                    "iWatch Series 8",
                                                    "iWatch Series 9",
                                                    "iWatch Series 10",
                                                    "iWatch Ultra 1",
                                                    "iWatch Ultra 2",
                                                    "iWatch SE (1st gen)",
                                                    "iWatch SE (2nd gen)",
                                                    "iWatch SE (3rd gen)",
                                                    "Others"
                                                ]
                                                :
                                                selectedDeviceType === "MacBook/Mac"
                                                    ?
                                                    [
                                                        "MacBook Pro 2010",
                                                        "MacBook Pro Retina 2012",
                                                        "MacBook Retina (12-inch) 2015",
                                                        "MacBook Pro with touchbar 2016",
                                                        "MacBook Air Retina 2018",
                                                        "MacBook Pro (16-inch) 2019",
                                                        "MacBook Air M1 2020",
                                                        "MacBook Pro M1 (13-inch) 2020",
                                                        "MacBook Pro 14/16-inch M1 Pro/Max (2021)",
                                                        "MacBook Pro 13-inch M2 (2022)",
                                                        "MacBook Air M2 (2022)",
                                                        "MacBook Pro 14/16-inch M2 Pro/Max",
                                                        "MacBook Air 15-inch M2 (2023)",
                                                        "MacBook Pro 14/16-inch M3 (2023)",
                                                        "MacBook Air 13/15-inch M3 (2024)",
                                                        "MacBook Pro 14/16-inch M4 Pro/Max (2024)",
                                                        "MacBook Air 13/15-inch M4 (2025)",
                                                        "Mac Mini",
                                                        "iMac (Retina 5k, 27-inch) 2020",
                                                        "Mac Mini M1 2020",
                                                        "iMac (24-inch) M1 2021",
                                                        "Mac Studio (M1 Max/Ultra) 2022",
                                                        "Mac Mini (M2/Pro) 2023",
                                                        "Mac Studio (M2 Max/Ultra) 2023",
                                                        "Mac Pro (M2 Ultra) 2023",
                                                        "iMac (24-inch, M3) 2023",
                                                        "iMac (24-inch, M4) 2023",
                                                        "Mac Studio (M4 Max/M3 Ultra) 2025",
                                                        "Others"
                                                    ]
                                                    :
                                                    []
                                }
                            />
                        </div>

                        <textarea
                            name="issue description"
                            id="issue description"
                            placeholder="Message..."
                            className='border border-gray-600 rounded-xl w-full p-3 min-h-28 text-sm bg-transparent focus:outline-0 resize-none'
                        />

                        <div className="flex flex-col gap-3">
                            <label className="text-sm text-gray-400">
                                Preferred Service <span className="text-red-500">*</span>
                            </label>

                            {options.map((option) => (
                                <label
                                    key={option}
                                    id="contact us"
                                    className={`flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-all duration-300 border ${preferredService === option ? "border-[#EF644C] bg-[#111]" : "border-gray-700 bg-[#0a0a0a] hover:border-gray-600"}`}
                                >
                                    <input
                                        type="radio"
                                        name="contact-us-services"
                                        value={option}
                                        checked={preferredService === option}
                                        onChange={() => setPreferredService(option)}
                                        className="custom-radio cursor-pointer w-5 h-5"
                                    />
                                    <span className="text-sm md:text-base">{option}</span>
                                </label>
                            ))}
                        </div>

                        <div className="flex flex-row items-center gap-3">
                            <input
                                type="checkbox"
                                name="agreement"
                                checked={isAgreed}
                                onChange={handleCheckboxChange}
                                className="custom-checkbox"
                            />

                            <p className="text-sm text-gray-400 flex-1">
                                Appointment is confirmed after we receive your service request.
                            </p>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={!isAgreed}
                            className={`${isAgreed ? "cursor-pointer hover:bg-[#EF644C90] transition-colors" : "cursor-default"}` + " w-full bg-[#EF644C50] py-4 sm:mt-10 mt-4 rounded-2xl"}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
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