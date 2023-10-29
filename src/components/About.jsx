import profile from "../assets/adrian3.jpg";
import { useTranslation } from 'react-i18next';
import { Fade } from "react-awesome-reveal";

export const About = () => {

    const { t } = useTranslation()

    return (

        <section name="about" className=" md:flex md:justify-center md:items-center md:h-[760px] bg-[#171717] dark:bg-[#FFFFFF] ">

            <article className=" h-[520px] sm:h-[400px] md:flex flex-col justify-center
                                bg-[#f55138e0] dark:bg-[#066BAE] md:ml-8 md:h-[650px] md:w-[850px] ">
                <div className=" px-8 pt-4 sm:p-16 md:mr-24 ">
                    <h2 className=" text-2xl mb-5">{t("aboutme")}</h2>
                    <p>{t("p-about")}</p>

                </div>
            </article>

            <div>
                <Fade fraction={0.8} triggerOnce={true} >
                    <img className=" m-auto relative bottom-16 max-h-[370px] sm:max-h-[500px] sm:relative
                        sm:bottom-16 md:relative md:bottom-0 md:right-32 md:max-h-[550px]" src={profile} alt="Image profile" />
                </Fade>
            </div>
        </section>
    )
}
