import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';  // Import react-scroll for smooth scrolling

const Navbar = () => {
    const [isHover, setIsHover] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("");
    const menuItems = ["Home", "About us", "Services", "Contact"];

    // Scroll effect for the navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`h-20 w-full flex items-center justify-between font-[Poppins] px-4 z-[100] fixed top-0 left-0 select-none transition-all duration-300 ${scrolled ? "bg-transparent shadow-md backdrop-blur" : "bg-transparent"}`}>
            {/* Logo */}
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="font-extrabold text-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 flex justify-around items-center"
            >
                <div className="relative w-25 h-12 rounded-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <img src="https://res.cloudinary.com/dq829orud/image/upload/v1746332762/mms_eksqmr.jpg" className="h-20 w-auto object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hamburger Icon */}
            <div
                className="sm:hidden text-3xl text-white p-2 bg-red-400 cursor-pointer transition hover:scale-110 ease-in-out shadow-sm shadow-red-500"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? '✖' : '☰'}
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex max-w-[100%] text-[15px] gap-16 justify-around">
                {menuItems.map((item, i) => (
                    <Link
                        key={i}
                        to={item.toLowerCase().replace(/\s+/g, "")} // Target the section by its ID
                        smooth={true}
                        duration={500}
                        offset={-100}
                        onClick={() => setActiveItem(item)}
                        className={`cursor-pointer transition hover:underline hover:scale-110 ease-in-out duration-250 ${activeItem === item ? "text-red-500 font-semibold" : "text-black hover:text-red-400"}`}
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center py-4 space-y-4 absolute top-20 left-0 w-full cursor-pointer rounded-xl z-50"
                >
                    {menuItems.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                setActiveItem(item);
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            <Link
                                to={item.toLowerCase().replace(/\s+/g, "")}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                 onClick={() => setActiveItem(item)}
                              className={`cursor-pointer transition hover:underline hover:scale-110 ease-in-out duration-250 ${activeItem === item ? "text-red-500 font-semibold" : "text-black hover:text-red-400"}`}
                            >
                                {item}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
