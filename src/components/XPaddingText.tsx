
const XPaddinText = ({ children }: { children: string }) => {
    return (
        <div className='border-x-2 text-nowrap rounded-md border-white sm:text-base text-sm w-fit px-3'>
            {children}
        </div>
    )
}

export default XPaddinText