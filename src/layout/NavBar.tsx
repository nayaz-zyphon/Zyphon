import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../logo.svg";
import { IoCallOutline } from "react-icons/io5";

interface NavItem {
    name: string;
    targetId: string;
}

const NavBar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems: NavItem[] = [
        { name: "Home", targetId: "home" },
        { name: "Services", targetId: "services" },
        // { name: "Partners", targetId: "partners" },
        // { name: "Why Us", targetId: "why-us" },
        { name: "Process", targetId: "process" },
        { name: "About Us", targetId: "about" },
        // { name: "Reviews", targetId: "reviews" },
        { name: "FAQ", targetId: "faq" },
        { name: "Contact Us", targetId: "contact" },
    ];

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        setActiveSection(id);

        if (section) {
            const yOffset = -60; // offset from top
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setMenuOpen(false); // close menu after click
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // offset for navbar height
            let current = "home";

            navItems.forEach((item) => {
                const section = document.getElementById(item.targetId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = item.targetId;
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run on mount to set default

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`top-0 z-50 transition-colors sticky sm:p-4 p-2 w-full`}>
            <div className="font-[Manrope] sm:p-4 py-2 px-4 flex flex-row items-center justify-between border border-[#5E5B5B] bg-black rounded-2xl w-full">
                {/* Logo */}
                <Link to="/">
                    <img className="sm:w-full w-20 sm:h-12 h-10" src={logo} alt="Logo" />
                </Link>

                {/* Desktop Nav */}
                <div className="lg:flex hidden gap-1 text-base">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(item.targetId)}
                            className={`cursor-pointer transition-colors duration-200 text-white border rounded-lg px-6 py-1.5
                                ${activeSection === item.targetId
                                    ? "border-white"
                                    : "border-black hover:border-white"}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className="xl:flex gap-6 hidden">
                    <div className="flex flex-row gap-3">
                        <button className="cursor-pointer hover:bg-white p-3 rounded-full bg-black text-white hover:text-black border border-white transition">
                            <IoCallOutline className="text-xl" />
                        </button>
                        <div className="text-sm flex flex-col gap-0.5 justify-center">
                            <p className="text-[#D9D9D9]">Ask Questions?</p>
                            <p className="text-white">
                                <a href="tel:+919148078233">
                                    +91 - 9148078233
                                </a>
                            </p>
                        </div>
                    </div>

                    <button className="text-black bg-gradient-to-r from-[#E60283] via-[#F1D507] to-[#DA4A02] rounded-xl font-semibold px-8 py-3 text-sm">
                        Get A Quote
                    </button>
                </div>

                {/* Hamburger for mobile */}
                <button
                    className="lg:hidden text-white sm:text-2xl bg-[#000000] backdrop-blur-lg rounded-full border-2 border-[#E5F0F336] px-4 py-2.5 cursor-pointer"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Full-Screen Dropdown */}
            {menuOpen && (
                <div className="fixed inset-0 h-fit bg-black backdrop-blur-lg flex flex-wrap gap-2 flex-row items-start sm:px-8 px-4 pt-16 sm:pb-10 pb-6 space-y-6 z-50 rounded-b-3xl shadow-2xl shadow-gray-900 border border-t-0 border-gray-700">
                    {/* Close Button (top-right) */}
                    <button
                        className="absolute top-6 right-6 text-white text-3xl cursor-pointer hover:text-[#F1D507]"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FiX />
                    </button>

                    {/* Nav Items */}
                    {navItems.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleScroll(item.targetId)}
                            className={`text-left sm:text-base text-sm font-medium transition-colors bg-[#00000020] backdrop-blur-lg rounded-full border-2 border-[#E5F0F336] px-4 sm:py-2.5 py-2 mb-0 cursor-pointer
                                ${activeSection === item.targetId
                                    ? "text-[#F1D507]"
                                    : "text-white hover:text-[#F1D507]"}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavBar;
