import { useEffect, useState } from "react";
import { PiToggleRightLight } from "react-icons/pi";
export const LigthMode = () => {
    const [theme, setTheme] = useState("ligth");
    

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
            
        } else {
            document.querySelector("html").classList.remove("dark");
            
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "ligth" : "dark"));
    };

    return (
        <div className="h-20 flex flex-col justify-center items-center bg-[#171717] dark:bg-[#FFFFFF]">
            <p className="-mb-2">Dark On</p>            
            <button onClick={handleChangeTheme} className=" rounded-full">             
                <PiToggleRightLight className="text-5xl text-[#FFFFFF] dark:text-[#171717]"/>
            </button>
            <p className=" text-[#171717] -mt-2">Ligth On</p>
        </div>
    );
};
