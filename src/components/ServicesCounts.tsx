
const ServicesCounts = () => {
    return (
        <div className="bg-[#1F1F1F] font-[Manrope] text-white py-10 sm:rounded-2xl lg:flex grid flex-row grid-cols-2 xl:gap-x-10 lg:gap-x-2 sm:gap-x-4 gap-y-6 justify-evenly w-full xl:-translate-y-24 lg:-translate-y-24 sm:-translate-y-34 -translate-y-30">
            {[
                { count: 15, sign: "+", text: "Years Of Experience" },
                { count: 20, sign: "K+", text: "Happy Customers" },
                { count: 25, sign: "+", text: "Areas Covered" },
                { count: 16, sign: "K+", text: "Devices Repaired" },
            ].map((obj) => (
                <DataMapper key={obj.count} count={obj.count} sign={obj.sign} text={obj.text} />
            ))}
        </div>
    )
};

const DataMapper = ({ count, sign, text }: { count: number; sign: string; text: string }) => {

    return (
        <div className="flex flex-row items-center gap-2 lg:mx-0 mx-auto sm:px-0 px-4">
            <h2 className="sm:text-7xl text-4xl font-medium font-['Space_Grotesk']">
                {count}
                <span className="text-[#EF644C]">
                    {sign}
                </span>
            </h2>

            <p className="sm:text-base text-xs max-w-24">
                {text}
            </p>
        </div>
    )
}

export default ServicesCounts