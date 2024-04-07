import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

import videoSource from "../assets/home.mp4";

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section name="home" className="relative h-[550px] pt-24 sm:relative md:h-[880px]">

            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            >
                <source src={videoSource} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-opacity-40 bg-black"></div>

            <section className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <Fade>
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-3 animate__animated animate__bounce">
                        {t("hello")}
                    </h1>
                </Fade>
                <article>
                    <h2 className=" text-center mt-8">
                    <span className=" text-xl text-black md:text-3xl font-medium bg-white p-2 rounded-s-sm"> {t("i")}</span>
                    <span className=" text-xl p text-black dark:text-white md:text-3xl md:font-black p-2 bg-[#f55138e0] dark:bg-[#134A66] rounded-r-sm"> {t("name")}</span>
                    </h2>
                    <p className="w-[350px] mt-10 text-lg sm:w-[500px] md:text-xl text-center">
                        {t("hero")}
                    </p>
                </article>
            </section>
        </section>
    );
}
