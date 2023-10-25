import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

import videoSource from "../assets/home.mp4"; // Reemplaza "your_video.mp4" con la ruta de tu video

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
                <source src={videoSource} type="video/mp4" /> {/* Agrega otros formatos de video si es necesario */}
            </video>

            <div className="absolute inset-0 bg-opacity-40 bg-black"></div>

            {/* Contenedor del contenido centrado */}
            <section className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <Fade>
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-3 animate__animated animate__bounce">
                        {t("hello")}
                    </h1>
                </Fade>
                <article>
                    <p className="text-lg mx-5 md:text-2xl text-center min-w-min">
                        {t("hero")}
                    </p>
                </article>
            </section>
        </section>
    );
}
