import React from 'react'
import { useTranslation } from 'react-i18next'
import flagSpain from "../assets/espana.png";
import flagEngland from "../assets/reino-unido.png";

export const Language = () => {

    const { t, i18n } = useTranslation()

    const handleChangeLanguage = (lng) => {

        i18n.changeLanguage(lng)

        localStorage.setItem("lng", lng)
    }

    return (
        <div className=' flex sm:flex-col  bg-[#171717] dark:bg-[#FFFFFF] text-[#c2c2c2] dark:text-black md:ml-8 ml-2'>
            <div onClick={() => handleChangeLanguage("en")} className='flex items-center py-1 cursor-pointer px-2 sm:px-0 '>
                <img className="h-6 cursor-pointer mr-2 " src={flagEngland} alt="img inglaterra" />
                <span>En</span>
            </div>

            <div onClick={() => handleChangeLanguage("es")} className='flex items-center py-1 cursor-pointer'>
                <img className="h-6 cursor-pointer mr-2" src={flagSpain} alt="img españa" />
                <span>Es</span>
            </div>

        </div>
    )
}
