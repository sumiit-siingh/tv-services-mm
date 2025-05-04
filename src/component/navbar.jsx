import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Services");
    const menuRef = useRef(); // Menu container ref
    const toggleRef = useRef(); // Hamburger button ref
    const menuItems = ["Home", "About us", "Services", "Contact"];

    // Scroll effect
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

    // Close mobile menu on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(e.target)
            ) {
                setIsMobileMenuOpen(false); // Close the menu
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
            className={`h-20 w-full flex items-center justify-between font-[Poppins] px-4 z-[100] fixed top-0 left-0 select-none transition-all duration-300 ${scrolled ? "bg-transparent shadow-md backdrop-blur" : "bg-transparent"}`}
        >
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
                ref={toggleRef}
                className="sm:hidden text-3xl text-white p-2 bg-red-400 cursor-pointer transition hover:scale-110 ease-in-out shadow-sm shadow-red-500"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle the menu on click
            >
                {isMobileMenuOpen ? '✖' : '☰'} {/* Change icon based on menu state */}
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex max-w-[100%] text-[15px] gap-16 justify-around">
                {menuItems.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setActiveItem(item);
                            navigate(`/${item.toLowerCase().replace(/\s+/g, "")}`);
                        }}
                        className={`cursor-pointer transition hover:underline hover:scale-110 ease-in-out duration-250 
                            ${activeItem === item ? "text-red-500 font-semibold" : "text-black hover:text-red-400"}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    ref={menuRef}
                    className="md:hidden bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center py-4 space-y-4 absolute top-20 left-0 w-full cursor-pointer rounded-xl z-50"
                >
                    {menuItems.map((item, i) => (
                        <div
                            key={i}
                            className="cursor-pointer text-lg"
                            onClick={() => {
                                setActiveItem(item);
                                navigate(`/${item.toLowerCase().replace(/\s+/g, "")}`);
                                setIsMobileMenuOpen(false); // Close menu after clicking an item
                            }}
                        >
                            <div
                                className={`transition hover:underline hover:scale-110 ease-in-out duration-250 ${activeItem === item
                                    ? "text-red-500 font-semibold"
                                    : "text-black hover:text-red-400"
                                    }`}
                            >
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Navbar;
