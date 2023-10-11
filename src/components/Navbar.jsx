import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.png";

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleWindowResize = () => {
        if (window.innerWidth >= 640) {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const toggleNav = () => setNav(!nav);

    return (
        <nav className="w-screen h-[100px] z-10 absolute drop-shadow-lg">
            <div className="pr-8 pl-2 sm:px-2 flex items-center w-full h-full">
                <div className="ml-12 w-full flex justify-center sm:justify-between md:mx-6">

                    <img className="w-40 md:w-48" src={logo} alt="mi imagen" />

                    <ul className="text-[#FEFFFF] hidden sm:flex">
                        <li>Home </li>
                        <li>About </li>
                        <li>Works </li>
                        <li>Contact </li>
                    </ul>
                </div>
                <div className="sm:hidden" onClick={toggleNav}>
                    {!nav ? <RiMenu3Line className="text-2xl w-7 text-[#FEFFFF]" />
                        : <RiCloseFill className="text-2xl w-7 text-[#FEFFFF]" />}
                </div>
            </div>
            {/* Si cambiamos el icono a menú, entonces esconder todo el UL; si está cerrado, entonces mostrar */}
            <ul className={!nav ? "hidden" : "absolute w-full text-center bg-[#171717] px-10 -mt-5 pb-7"}>
                <li className="border-[#c2c2c2] py-4">Home</li>
                <li className="border-[#c2c2c2] py-4">About</li>
                <li className="border-[#c2c2c2] py-4">Works</li>
                <li className="border-[#c2c2c2] py-4">Contact</li>
            </ul>
        </nav>
    );
};
