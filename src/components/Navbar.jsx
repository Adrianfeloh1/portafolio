import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";

import { useTranslation } from "react-i18next";
import { Language } from "./Language";
import { LigthMode } from "./LigthMode";
import { Logo } from "./Logo";

export const Navbar = () => {

    const { t } = useTranslation()

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
        <nav className="w-screen h-[120px] z-10 fixed bg-[#171717] dark:bg-[#FFFFFF] drop-shadow-2xl">
            <div className="pr-4 sm:px-1 flex items-center w-full h-full">
                <div className="ml-12 w-full flex justify-center items-center sm:justify-between sm:mx-5 md:mx-20 sm:mr-10">

                    <Link className=" cursor-pointer" to="home" smooth={true} offset={-10} onClick={scroll.scrollToTop}>
                        <Logo />
                    </Link>

                    <ul className=" text-[#FEFFFF] hidden sm:flex items-center">
                        <li><Link className=" cursor-pointer py-5 p-4 md:p-5" to="home" smooth={true} offset={-10} duration={800}>{t("home")}</Link></li>
                        <li><Link className=" cursor-pointer py-5 p-4 md:p-5" to="about" smooth={true} offset={-110} duration={600}>{t("about")}</Link></li>
                        <li><Link className=" cursor-pointer py-5 p-4 md:p-5" to="works" smooth={true} offset={-150} duration={800}>{t("works")}</Link></li>
                        <li><Link className=" cursor-pointer py-5 p-4 md:p-5 lg:mr-10" to="contact" smooth={true} offset={-140} duration={1000}>{t("contact")}</Link></li>
                        <LigthMode />
                        <Language />
                    </ul>

                </div>
                <div className="sm:hidden" onClick={toggleNav}>
                    {!nav ? <RiMenu3Line className="text-4xl w-7 text-[#FEFFFF] dark:text-black" />
                        : <RiCloseFill className="text-4xl w-7 text-[#FEFFFF] dark:text-black" />}
                </div>
            </div>
            {/* Si cambiamos el icono a menú, entonces esconder todo el UL; si está cerrado, entonces mostrar */}

            <ul className={!nav ? "hidden" : "w-full text-center bg-[#171717] px-5 -mt-3 pb-5 dark:bg-white"}>
                <div className="flex justify-center">
                    <LigthMode />
                    <Language />
                </div>
                <li className="  mt-3" ><Link onClick={handleClose} className=" cursor-pointer p-5" to="home" smooth={true} offset={-10} duration={600}>{t("home")}</Link></li>
                <li className="  my-10"><Link onClick={handleClose} className=" cursor-pointer p-5" to="about" smooth={true} offset={-110} duration={600}>{t("about")}</Link></li>
                <li className="  my-10"><Link onClick={handleClose} className=" cursor-pointer p-5" to="works" smooth={true} offset={-150} duration={800}>{t("works")}</Link></li>
                <li className="  my-10"><Link onClick={handleClose} className=" cursor-pointer p-5" to="contact" smooth={true} offset={-120} duration={1000}>{t("contact")}</Link></li>
            </ul>
        </nav>
    );
};
