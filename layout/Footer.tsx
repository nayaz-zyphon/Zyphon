"use client"

import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';
import { LiaArrowUpSolid } from 'react-icons/lia';
import { IoCallOutline, IoLogoInstagram } from 'react-icons/io5';
import { SlLocationPin } from 'react-icons/sl';
import { HiOutlineMail } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="font-[Urbanist] bg-[#131313] text-white sm:rounded-2xl md:mt-10 mt-4">
            <div className='lg:w-[80%] w-full mx-auto flex sm:flex-row flex-col'>
                <div className="flex-1 flex flex-row items-center gap-10 sm:border-r border-b border-[#3c3c3c] sm:px-10 px-5 lg:py-20 sm:py-14 py-8">
                    <div className="flex-1 space-y-3">
                        <h2 className="font-['Space_Grotesk'] text-4xl font-medium text-white">
                            Need Any Support
                        </h2>
                        <p className="sm:text-base text-sm">"Quick, reliable, and professional! My phone was fixed the same day. Highly recommend their service.</p>
                    </div>

                    <button className='group p-3 rounded-xl border h-fit border-[#3c3c3c] cursor-pointer hover:bg-black'>
                        <FiArrowUpRight className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all' />
                    </button>
                </div>

                <div className="flex-1 flex flex-row items-center gap-10 border-b border-[#3c3c3c] sm:px-10 px-5 lg:py-20 sm:py-14 py-8">
                    <div className="flex-1 space-y-3">
                        <h2 className="font-['Space_Grotesk'] text-4xl font-medium text-white">
                            Join Our Team
                        </h2>
                        <p className="sm:text-base text-sm">"Quick, reliable, and professional! My phone was fixed the same day. Highly recommend their service.</p>
                    </div>

                    <button className='group p-3 rounded-xl border h-fit border-[#3c3c3c] cursor-pointer hover:bg-black'>
                        <FiArrowUpRight className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all' />
                    </button>
                </div>
            </div>


            <div className="lg:w-[80%] w-full mx-auto lg:py-20 sm:py-14 py-8 lg:px-0 sm:px-10 px-5 flex md:flex-row flex-col gap-10 justify-between">
                <div className='space-y-4 md:sm: w-fit'>
                    <img src={"/logo.svg"} alt="ZyPhone" />
                    <p className='sm:text-base text-sm text-gray-200'>
                        Bengaluru’s #1 Apple Device Repair Center
                    </p>

                    <h3 className='font-medium'>Follow Us: </h3>
                    <div className="flex items-center gap-1.5">
                        <button className='text-base border border-[#3c3c3c] p-2 rounded-lg cursor-pointe hover:bg-white hover:text-black transition cursor-pointer'>
                            <IoLogoInstagram />
                        </button>
                        <button className='text-base border border-[#3c3c3c] p-2 rounded-lg cursor-pointe hover:bg-white hover:text-black transition cursor-pointer'>
                            <RiFacebookFill />
                        </button>
                        <button className='text-base border border-[#3c3c3c] p-2 rounded-lg cursor-pointe hover:bg-white hover:text-black transition cursor-pointer'>
                            <RiTwitterXFill />
                        </button>
                        <button className='text-base border border-[#3c3c3c] p-2 rounded-lg cursor-pointe hover:bg-white hover:text-black transition cursor-pointer'>
                            <RiLinkedinFill />
                        </button>
                    </div>
                </div>

                <div className='md:w-3/4 flex-1 flex flex-wrap sm:flex-row flex-col md:justify-end justify-between lg:gap-20 gap-6'>
                    {footerLinks.map((footer, index) => (
                        <div key={index} className='space-y-3 flex flex-col flex-1'>
                            <p className="text-base font-medium">{footer.heading}</p>

                            {footer.links.map((link, index) => {
                                const [text, url] = Object.entries(link)[0]; // extract key & value
                                return (
                                    <Link key={index} href={url} className='text-sm'>
                                        {text}
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                    <div className='space-y-3 flex flex-col sm:w-1/4'>
                        <p className="text-base font-medium">Contact Us</p>

                        <div className='flex flex-row gap-1 items-start text-sm'>
                            <SlLocationPin className='translate-y-1 flex-none' />
                            <p className='flex-1'>
                                No. S3 Ground Floor, Madhuban Apartment, Hosur main road, next to IFB point, near Koramangala Forum Mall, Bengaluru - 560030
                            </p>
                        </div>

                        <div className='flex flex-row gap-1 items-start text-sm'>
                            <IoCallOutline className='translate-y-1 flex-none' />

                            <div className='space-y-1 flex-1'>
                                <p className='underline'>
                                    <a href="tel:+919148078233">
                                        +91 9148078233
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-1 items-start text-sm'>
                            <HiOutlineMail className='translate-y-1 flex-none' />

                            <p className='underline flex-1'>
                                <a href="mailto:support@zyphon.in">
                                    support@zyphon.in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full relative flex items-center justify-center">
                <div className="bg-[#3c3c3c] to-98% h-[0.5px] lg:w-[80%] w-full mx-auto" />

                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className='bg-[#EF644C] sm:p-3 p-2 sm:rounded-xl rounded-lg absolute cursor-pointer hover:bg-[#EF645C] transition'>
                    <LiaArrowUpSolid className='sm:text-xl text-base' />
                </button>
            </div>

            <div className="lg:w-[80%] w-full p-6 flex sm:flex-row flex-col gap-1 justify-between mx-auto">
                <p className='text-gray-300 sm:text-base text-sm text-center'>
                    &copy; Designthemes all rights Reserved
                </p>

                <p className='text-gray-300 sm:text-base text-sm text-center'>
                    Terms & Conditions |  Privacy Policy
                </p>
            </div>
        </div >
    )
};

const footerLinks = [
    {
        heading: "Services",
        links: [
            { "iPhone Repair": "/" },
            { "iPad Repair": "/" },
            { "MacBook Repair": "/" },
            { "Apple Watch": "/" },
            { "Repair": "/" },
        ]
    },
    {
        heading: "Company",
        links: [
            { "About Us": "/" },
            { "Warrenty": "/" },
            { "Privacy Policy": "/" },
            { "Terms and Services": "/" },
        ]
    },
]

export default Footer;