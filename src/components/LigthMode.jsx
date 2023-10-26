import { useEffect, useState } from "react";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
export const LigthMode = () => {
    const [theme, setTheme] = useState("dark");
    

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
            
        } else {
            document.querySelector("html").classList.remove("dark");
            
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="h-20 flex justify-center items-center bg-white dark:bg-[#171717]">
            <button onClick={handleChangeTheme} className="bg-[#171717] py-4 rounded-full dark:text-white">             
                <WiMoonAltThirdQuarter className="text-4xl mr-8"/>
            </button>
        </div>
    );
};
