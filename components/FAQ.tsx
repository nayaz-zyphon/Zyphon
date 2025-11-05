import { FiArrowUpRight } from "react-icons/fi"
import FAQ_QandA from "./FAQ_QandA";
import type { JSX } from "react";

const FAQ = () => {
  return (
    <>
      <div className="md:h-[0.5px] h-px w-full bg-linear-to-r from-[#C2534050]  via-[#E0E0E060] to-black/50 via-50% -translate-x-4" />

      <div id="faq" className="font-[Urbanist] bg-black text-white sm:space-y-10 space-y-4 xl:px-16 sm:px-10 px-5 lg:py-16 sm:py-10 py-6 flex flex-col items-center relative z-10">
        <div>
          <h2 className="font-['Space_Grotesk'] sm:text-5xl text-4xl font-medium">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 w-full md:text-base text-sm text-gray-500">
            Get answers to common questions about our Apple device repair services
          </p>
        </div>

        <div className="flex lg:flex-row flex-col items-start xl:gap-20 gap-6 w-full z-0">
          <FAQ_QandA />

          <StillHaveQuestion />
        </div>

        <>
          <img src={"/faq/right-gradient.svg"} alt="Gradient" className="absolute right-0 bottom-0 -z-10 translate-x-4 h-[70%] pointer-events-none select-none" />
          <img src={"/faq/left-gradeint.svg"} alt="Gradient" className="absolute left-0 top-0 -z-10 -translate-x-4 h-[70%] pointer-events-none select-none" />

          <svg className="absolute right-0 -bottom-1/4 -z-10 md:translate-x-4 h-full" width="500" height="1222" viewBox="0 0 631 1222" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          <svg className="absolute left-0 bottom-1/4 -z-10 -translate-x-4 h-full sm:w-auto w-fit" width="598" height="1222" viewBox="0 0 598 1222" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </>
  )
};

const StillHaveQuestion = () => {
  return (
    <Gradientbg>
      <div className="w-full sm:py-6 py-4 sm:px-10 px-4 bg-[#000000] rounded-3xl sm:text-nowrap text-center">
        <h2 className="font-['Space_Grotesk'] sm:text-4xl text-3xl font-medium text-white">
          Still have questions?
        </h2>
        <p className="w-full md:text-base text-sm text-[#787878]">
          Our support team is available 24/7 to help with any queries
        </p>

        <div className="flex flex-row sm:flex-nowrap flex-wrap mt-4 gap-2 justify-center">
          <a href="https://wa.me/919148078233" target="blank" className="group text-sm flex sm:w-fit w-full items-center justify-center gap-2 px-6 py-3 rounded-full cursor-pointer bg-linear-to-r from-[#37D569] to-[#00B34E] text-white font-medium hover:opacity-90 transition">
            WhatsApp Support
            <FiArrowUpRight className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="tel:+919148078233" className="group text-sm flex sm:w-fit w-full items-center justify-center gap-2 px-6 py-3 rounded-full cursor-pointer bg-linear-to-r from-[#E60283] to-[#DA4A02] text-white font-medium hover:opacity-90 transition">
            Talk to Our Suport
            <FiArrowUpRight className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </Gradientbg>
  )
};

const Gradientbg = ({ children }: { children: JSX.Element }) => {
  return (
    <div
      className='lg:w-fit w-full p-[0.8px] bg-[linear-gradient(160deg,#757575_10%,#00000000_60%,#757575)] rounded-3xl flex-1'
    >
      {children}
    </div>
  )
};


export default FAQ