import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Navbar = () => {
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div
            className={`h-20 w-full flex items-center justify-around font-[Poppins]  px-4 z-[100] fixed top-0 left-0 select-none transition-all duration-300   ${scrolled ? "bg-black/90 shadow-md backdrop-blur" : "bg-transparent"}`}
        >
            {/* Logo */}
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="font-extrabold text-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 flex justify-around items-center"
            > 
                
                    <div className="relative w-30 h-12 border-5 border-white/20 rounded-full -rotate-35 ">
                        <div className="absolute inset-0 flex items-center justify-center rotate-35">
                            <div className='flex flex-col items-center'>
                            <h1 className="text-white font-beau-rivag e-regular text-4xl text-outline">M.M </h1>
                            <h1 className=" font-beau-rivage-regular text-4xl text-outline pl-2 text-red-500"> Enterprises </h1>
                            </div>
                        </div>
                    </div>



                
            </div>

            {/* Hamburger icon for mobile */}
            <div className="sm:hidden text-3xl text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                ☰
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex max-w-[100%] text-[15px] gap-16 justify-around">
                {["Home", "About us", "Services", "Contact"].map((item, i) => (
                    <div
                        key={i}
                        className="cursor-pointer text-white text-outline transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-b-2"
                        onClick={() => navigate(`/${item.toLowerCase()}`)}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Buttons */}
            {/* <div className="hidden md:flex gap-4">
                <button className="text-whi te cursor-pointer py-2 bg-wh ite  rounded-full font-medium hover:scale-105 " onClick={() => navigate('https://www.linkedin.com/in/sumitkrsinghh/')}>
                    <FaLinkedin className='text-white text-xl rounded bg-white/20  ' />
                </button>
                <button className="text-white bg-wh ite cursor-pointer px-6 py-2  rounded-full font-medium hover:scale-105" onClick={() => navigate('https://github.com/sumiit-siingh')}>
                    <FaGithub className='text-xl text-white' />
                </button>
            </div> */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black flex flex-col items-center  text-white py-4 space-y-4 absolute top-20 left-0 w-full z-[99] cursor-pointer">
                    {["Home", "About us", "Services", "Contact"].map((item, i) => (
                        <div
                            key={i}
                            className="cursor-pointer text-lg"
                            onClick={() => {
                                navigate(`/${item.toLowerCase()}`);
                                setIsMobileMenuOpen(false); // Close menu after click
                            }}
                        >
                            {item}
                        </div>
                    ))}
{/* 
                    <div className="flex  flex-col gap-3 w-full items-center justify-center">
                        <button className="w-10 cursor-pointer text-white py-2  flex items-center justify-center rounded-full font-medium" onClick={() => {
                            window.open("https://www.linkedin.com/in/sumitkrsinghh/");
                            setIsMobileMenuOpen(false);
                        }}>
                            <FaLinkedin />
                        </button>
                        <button className="w-10 cursor-pointer text-white py-2  flex items-center justify-center  rounded-full font-medium" onClick={() => {
                            window.open('https://github.com/sumiit-siingh');
                            setIsMobileMenuOpen(false);
                        }}>
                            <FaGithub />
                        </button>
                    </div> */}
                </div>
            )}

        </div>

    );
}

export default Navbar;
