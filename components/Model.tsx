"use client"

import { useEffect, type JSX } from "react"
import { IoClose } from "react-icons/io5";

const Model = ({ children, title, subTitle, open, onClose }: { children: JSX.Element; title: string; subTitle?: string; open: boolean; onClose: () => void; }) => {

    useEffect(() => {
        const root = document.getElementById("root");

        if (open) {
            document.body.style.overflow = "hidden";
            if (root) root.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            if (root) root.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            if (root) root.style.overflow = "";
        };
    }, [open]);

    return open && (
        <div onClick={onClose} className="font-[Manrope] fixed top-0 bottom-0 z-50 w-full h-screen overflow-y-auto bg-[#00000090] flex flex-col md:justify-center md:py-0 py-6 items-center">
            <div onClick={(e) => e.stopPropagation()} className="bg-black text-white max-w-2xl w-[90%] border border-gray-500 rounded-2xl p-4">
                <div className="flex flex-row w-full justify-between items-start space-y-6">
                    <div>
                        <h2 className="font-['Space_Grotesk'] sm:text-3xl text-xl font-medium text-[#EF644C]">
                            {title}
                        </h2>
                        {subTitle && <p className="text-sm text-gray-50 font-['Space_Grotesk']">{subTitle}</p>}
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-800 text-white cursor-pointer">
                        <IoClose className="text-xl" />
                    </button>
                </div>

                {children}
            </div>
        </div>
    )
}

export default Model