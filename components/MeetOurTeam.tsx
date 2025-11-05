import type { JSX } from "react";

const MeetOurTeam = () => {
    return (
        <div className="bg-black text-white flex flex-col items-center xl:gap-20 sm:gap-14 gap-8 sm:p-10 py-8 px-5 mx-auto md:mb-10 sm:mb-5">
            <h2 className="font-['Space_Grotesk'] sm:text-5xl text-4xl font-medium text-center">
                Meet Our Expert Team
            </h2>

            <div className="lg:flex grid sm:grid-cols-2 grid-cols-1 flex-row w-full xl:gap-10 sm:gap-6 gap-3">
                {teamList.slice(0, 4).map((team, index) => (
                    <Gradientbg key={index}>
                        <div className="sm:px-6 px-3 xl:py-12 py-6 flex flex-col items-center gap-1 bg-linear-to-b from-[#161616] from-60% to-[#0a0a0a] rounded-2xl">
                            <img src={team.image} alt="Image" className="xl:w-52 w-44 xl:h-52 h-44 rounded-full object-cover" />

                            <p className="text-xl mt-4">{team.name}</p>
                            <p className="text-sm">{team.role}</p>
                        </div>
                    </Gradientbg>
                ))}
            </div>
        </div>
    )
};

const Gradientbg = ({ children }: { children: JSX.Element }) => {
    return (
        <div
            className='p-px bg-[linear-gradient(135deg,#00000000_0%,#757575_20%,#00000000_60%,#00000000_100%)] rounded-2xl flex-1'
        >
            {children}
        </div>
    )
};

const teamList = [
    {
        image: "https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg",
        name: "Nayaz Ahmed",
        role: "CEO & Founder"
    },
    {
        image: "https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg",
        name: "Nayaz Ahmed",
        role: "CEO & Founder"
    },
    {
        image: "https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg",
        name: "Nayaz Ahmed",
        role: "CEO & Founder"
    },
    {
        image: "https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg",
        name: "Nayaz Ahmed",
        role: "CEO & Founder"
    },
    {
        image: "https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg",
        name: "Nayaz Ahmed",
        role: "CEO & Founder"
    },
]

export default MeetOurTeam