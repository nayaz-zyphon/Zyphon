import type { JSX } from "react";

const ActionGradientButton = ({ text, icon, onClickHandle }: { text: string; icon: JSX.Element; onClickHandle: () => void; }) => {
    return (
        <button onClick={onClickHandle} className="flex bg-linear-to-r from-[#E60283] via-[#F1D507] to-[#DA4A02] rounded-[10px] relative cursor-pointer group">
            <div className='py-0.5 p-0.5 pr-0 font-[Manrope]  rounded-r-none flex flex-row'>
                <div className="bg-[#0c0c0c] text-nowrap lg:text-base sm:text-sm text-xs rounded-lg pl-6 py-3 pr-16 group-hover:bg-[#151515]">
                    {text}
                </div>
            </div>

            <div className="bg-linear-to-b from-[#F1D507] to-[#DA4A02] rounded-[10px] lg:p-4.5 p-4 text-xl absolute right-0">
                {icon}
            </div>
        </button>
    )
}

export default ActionGradientButton