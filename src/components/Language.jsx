import React from 'react'
import { useTranslation } from 'react-i18next'
import flagSpain from "../assets/espana.jpg";
import flagEngland from "../assets/england.jpg";

export const Language = () => {

    const { t, i18n } = useTranslation()

    const handleChangeLanguage = (lng) => {

        i18n.changeLanguage(lng)

        localStorage.setItem("lng", lng)
    }

    return (
        <div className='flex flex-col bg-[#171717] text-center text-[#c2c2c2]'>
            <div className='flex py-2 '>                
                <img onClick={() => handleChangeLanguage("en")} className="md:w-10 md:h-6 sm:w-8 cursor-pointer "src={flagEngland} alt="img inglaterra" />
            </div>

            <div className='flex py-2'>              
                <img onClick={() => handleChangeLanguage("es")} className="md:w-10 md:h-6 sm:w-8 cursor-pointer "src={flagSpain} alt="img españa" />
            </div>




        </div>
    )
}
