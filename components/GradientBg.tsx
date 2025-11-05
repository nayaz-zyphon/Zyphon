import { type JSX } from 'react'

const GradientBg = ({ children, }: { children: JSX.Element }) => {
    return (
        <div
            className='p-[0.9px] text-nowrap lg:text-base sm:text-sm text-xs bg-[linear-gradient(175deg,#8d8d8d,#00000000,#8d8d8d)] rounded-full'
        >
            <div className='flex flex-row gap-1 items-center px-4 py-2 rounded-full bg-black'>
                {children}
            </div>
        </div>
    )
}

export default GradientBg;