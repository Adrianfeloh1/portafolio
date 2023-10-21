import hero from "../assets/coffee1.jpg";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

export const Hero = () => {

    const { t, i18n } = useTranslation()

    return (
        <section name="home" className="relative h-[550px] pt-24 sm:relative md:h-[850px]">

            <img
                src={hero}
                alt="Imagen hero"
                className=" w-full h-full object-cover "
            />

            <div className="absolute inset-0 bg-opacity-40 bg-black"></div>


            {/* Contenedor del contenido centrado */}
            <section className="absolute inset-0 flex flex-col items-center justify-center text-white">

                <Fade>
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-3 animate__animated animate__bounce">
                    {t("hello")}
                    </h1>
                    
                </Fade>
                <article>

                    <p className="text-lg mx-5 md:text-2xl text-center min-w-min ">
                        I'm Adrian F. Ochoa H, Developer and UX Designer passionate about creating digital experiences
                    </p>
                </article>
            </section>
        </section>

    )
}
