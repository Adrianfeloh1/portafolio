import { useEffect, useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
export const LigthMode = () => {

    const [theme, setTheme] = useState("ligth");
    const [buttonText, setButtonText] = useState("dark");

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");

        } else {
            document.querySelector("html").classList.remove("dark");

        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "ligth" : "dark"));
        setButtonText((prevText) => (prevText === "dark" ? "ligth" : "dark"));
    };

    return (
        <div className="h-20 flex flex-col justify-center items-center bg-[#171717] dark:bg-[#FFFFFF]">

            <button onClick={handleChangeTheme} className="rounded-full flex flex-col justify-center items-center">
                {buttonText === "dark" ? (
                    <div className=" flex flex-col items-center ">
                        <p className=" sm:text-[#c2c2c2] py-1 sm:block hidden"> Light</p>
                        <IoSunnyOutline className="text-2xl text-[#c2c2c2] hover:text-white dark:text-[#171717]" />
                    </div>
                ) : (
                    <div className=" flex flex-col items-center">
                        <p className=" sm:text-black py-1 sm:block hidden">Dark</p>
                        <IoMoonSharp className="text-2xl text-[#c2c2c2] hover:text-white dark:text-[#171717]" />
                    </div>
                )}
            </button>

        </div>
    );
};
