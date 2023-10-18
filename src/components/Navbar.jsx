import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.png";

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleWindowResize = () => {
        if (window.innerWidth >= 640) {
            setNav(false);
        }
    }

    const handleClose = () => setNav(!nav);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const toggleNav = () => setNav(!nav);

    return (
        <nav className="w-screen h-[120px] z-10 fixed bg-[#171717] drop-shadow-2xl">
            <div className="pr-4 sm:px-1 flex items-center w-full h-full">
                <div className="ml-12 w-full flex justify-center items-center sm:justify-between sm:mx-12 md:mr-20">

                    <Link className=" cursor-pointer" to="home" smooth={true} offset={-10} duration={600}>
                        <img className="w-40 md:w-52" src={logo} alt="mi imagen" />
                    </Link>


                    <ul className="text-[#FEFFFF] hidden sm:flex">

                        <li><Link className=" cursor-pointer py-5" to="home" smooth={true} offset={-10} duration={600}>Home</Link></li>
                        <li><Link className=" cursor-pointer py-5" to="about" smooth={true} offset={-110} duration={600}>About</Link></li>
                        <li><Link className=" cursor-pointer py-5" to="works" smooth={true} offset={-150} duration={800}>Works</Link></li>
                        <li><Link className=" cursor-pointer py-5" to="contact" smooth={true} offset={-140} duration={1000}>Contact</Link></li>

                    </ul>
                </div>
                <div className="sm:hidden" onClick={toggleNav}>
                    {!nav ? <RiMenu3Line className="text-4xl w-7 text-[#FEFFFF]" />
                        : <RiCloseFill className="text-4xl w-7 text-[#FEFFFF]" />}
                </div>
            </div>
            {/* Si cambiamos el icono a menú, entonces esconder todo el UL; si está cerrado, entonces mostrar */}
            <ul className={!nav ? "hidden" : "w-full text-center bg-[#171717] px-5 -mt-3 pb-7"}>

                <li><Link onClick={handleClose} className=" cursor-pointer py-3" to="home" smooth={true} offset={-10} duration={600}>Home</Link></li>
                <li><Link onClick={handleClose} className=" cursor-pointer py-3" to="about" smooth={true} offset={-110} duration={600}>About</Link></li>
                <li><Link onClick={handleClose} className=" cursor-pointer py-3" to="works" smooth={true} offset={-150} duration={800}>Works</Link></li>
                <li><Link onClick={handleClose} className=" cursor-pointer py-3" to="contact" smooth={true} offset={-120} duration={1000}>Contact</Link></li>

            </ul>
        </nav>
    );
};
