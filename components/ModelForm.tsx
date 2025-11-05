"use client"

import { useState } from 'react'
import { DropDown, Input } from './ContactUs';

const ModelForm = ({ formFor, defaultDeviceBrand }: { formFor: string; defaultDeviceBrand: "iPhone" | "iPad" | "iWatch" | "MacBook/Mac" | "" }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [deviceType, setDeviceType] = useState("");
    const [deviceBrand, setDeviceBrand] = useState("");
    const [message, setMessage] = useState("");

    const [isAgreed, setIsAgreed] = useState(false);
    const [preferredService, setPreferredService] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCheckboxChange = (event: any) => {
        setIsAgreed(event.target.checked);
    };

    const [selectedDeviceBrand, setSelectedDeviceBrand] = useState<"iPhone" | "iPad" | "iWatch" | "MacBook/Mac" | "">(defaultDeviceBrand === "" ? defaultDeviceBrand : "")

    console.log(formFor);

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
                        message,
                        preferredService,
                    }),
                }
            );

            if (!response.ok) throw new Error("Network response was not ok");

            console.log("Form submitted successfully!");

            // Trigger Google Ads conversion here
            if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "conversion", {
                    send_to: "AW-17631803811/sReaCIfD3agbEKPzv9dB",
                    value: 1.0,
                    currency: "INR",
                });

                console.log("Google Ads Testing");
            };
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
            setFullName("");
            setEmail("");
            setPhoneNum("");
            setDeviceType("");
            setDeviceBrand("");
            setMessage("");
            setPreferredService("");
        }
    };

    return (
        <div className="w-full space-y-3">
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
                    value={defaultDeviceBrand ? defaultDeviceBrand : deviceType}
                    setValue={(value: any) => {
                        setDeviceType(value);
                        setSelectedDeviceBrand(value)
                    }}
                    title='Device Type'
                    options={["iPhone", "iPad", "iWatch", "MacBook/Mac"]}
                />
                <DropDown
                    value={deviceBrand}
                    setValue={setDeviceBrand}
                    title='Device Brand'
                    options={
                        selectedDeviceBrand === "iPhone"
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
                            : selectedDeviceBrand === "iPad"
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
                                selectedDeviceBrand === "iWatch"
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
                                    selectedDeviceBrand === "MacBook/Mac"
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='border border-gray-600 rounded-xl w-full p-3 min-h-28 text-sm bg-transparent focus:outline-0 resize-none'
            />

            <div className="flex flex-col gap-3">
                <label className="text-sm text-gray-400">
                    Preferred Service <span className="text-red-500">*</span>
                </label>

                {options.map((option) => (
                    <label
                        key={option}
                        className={`flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-all duration-300 border ${preferredService === option ? "border-[#EF644C] bg-[#111]" : "border-gray-700 bg-[#0a0a0a] hover:border-gray-600"}`}
                    >
                        <input
                            type="radio"
                            name={formFor === "Contact Us" ? "contact us" : "preferredService"}
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
                disabled={!isAgreed}
                onClick={handleSubmit}
                className={`${isAgreed ? "cursor-pointer hover:bg-[#EF644C90] transition-colors" : "cursor-default"} +" w-full bg-[#EF644C50] py-2 sm:mt-6 mt-4 rounded-lg`} >
                {loading ? "Submitting..." : "Submit"}
            </button>
        </div >
    )
}

export default ModelForm