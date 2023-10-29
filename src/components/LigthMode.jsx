import { useEffect, useState } from "react";
import { CgToggleSquareOff } from "react-icons/cg";
import { CgToggleSquare } from "react-icons/cg";
export const LigthMode = () => {

    const [theme, setTheme] = useState("ligth");
    const [buttonText, setButtonText] = useState("Dark");

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
                    <>                        
                        <CgToggleSquareOff className="text-3xl text-[#c2c2c2] hover:text-white dark:text-[#171717]" />                        
                    </>
                ) : (
                    <>                        
                        <CgToggleSquare className="text-3xl text-[#c2c2c2] hover:text-white dark:text-[#171717]" />                        
                    </>
                )}
            </button>

        </div>
    );
};
