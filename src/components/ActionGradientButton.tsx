import type { JSX } from "react";

const ActionGradientButton = ({ text, icon }: { text: string; icon: JSX.Element }) => {
    return (
        <div className="flex bg-gradient-to-r from-[#E60283] via-[#F1D507] to-[#DA4A02] rounded-[10px] relative">
            <div className='py-0.5 p-0.5 pr-0 font-[Manrope]  rounded-r-none flex flex-row'>
                <div className="bg-[#0c0c0c] text-nowrap lg:text-base sm:text-sm text-xs rounded-lg rounded-r-none pl-6 py-3 pr-16">
                    {text}
                </div>
            </div>

            <div className="bg-gradient-to-b from-[#F1D507] to-[#DA4A02] rounded-[10px] lg:p-4.5 p-4 text-xl absolute right-0">
                {icon}
            </div>
        </div>
    )
}

export default ActionGradientButton