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
        <nav className="w-screen h-[110px] z-10 bg-[#10222E] fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="mx-2 w-full flex justify-between md:mx-6">
                    <img className="w-40 font-bold mr-4 sm:w-48" src={logo} alt="mi imagen" />
                    <ul className="text-[#FEFFFF] hidden sm:flex">
                        <li>Home</li>
                        <li>About</li>
                        <li>Works</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="sm:hidden" onClick={toggleNav}>
                    {!nav ? <RiMenu3Line className="text-2xl w-7 text-[#FEFFFF]" />
                        : <RiCloseFill className="text-2xl w-7 text-[#FEFFFF]" />}
                </div>
            </div>
            {/* Si cambiamos el icono a menú, entonces esconder todo el UL; si está cerrado, entonces mostrar */}
            <ul className={!nav ? "hidden" : "absolute w-full text-center bg-[#10222E] px-10 pb-4"}>
                <li className="border-[#c2c2c2] py-4">Home</li>
                <li className="border-[#c2c2c2] py-4">About</li>
                <li className="border-[#c2c2c2] py-4">Works</li>
                <li className="border-[#c2c2c2] py-4">Contact</li>
            </ul>
        </nav>
    );
};
