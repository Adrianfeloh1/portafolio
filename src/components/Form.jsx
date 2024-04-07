import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import { GrLinkedin, GrInstagram, GrTwitter } from "react-icons/gr";

export const Form = () => {
    const { t } = useTranslation();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const send = (data) => {
        console.log(data);
    };

    const currentYear = new Date().getFullYear();

    return (
        <section
            name="contact"
            className=" bg-[#171717] dark:bg-white flex flex-col md:flex md:flex-row justify-center items-center md:pt-10 px-5 sm:px-10 md:pb-32 pb-20"
        >
            <article className=" flex flex-col w-2/2 md:w-1/2 text-center md:px-8 lg:px-20">
                <h2 className=" md:text-2xl lg:text-4xl mb-5 lg:mb-10 uppercase text-[#f55138e0] dark:text-[#134A66]">
                    {t("discuss")}
                </h2>
                <p className="sm:mb-10 mb-5 text-[#c2c2c2] dark:text-[#171717]">
                    {" "}
                    {t("p-discuss")}
                </p>
                <h3 className="sm:mb-2 md:text-lg lg:text-2xl dark:text-[#134A66] ">
                    E-mail
                </h3>
                <p className=" text-[#c2c2c2] dark:text-[#171717]">
                    adrianfeloh1@gmail.com
                </p>
                <div className="mt-4 mb-4 md:mb-16 text-2xl flex justify-center items-center gap-4 text-[white] dark:text-[#134A66] ">
                    <GrLinkedin />
                    <GrInstagram />
                    <GrTwitter />
                </div>

                <p className="pb-5 dark:text-[#171717]">
                    © AF {currentYear} - {t("all-rights")}
                </p>
            </article>

            <form
                onSubmit={handleSubmit(send)}
                className=" bg-[#171717] dark:bg-[#FFFFFF] flex flex-col w-full md:w-1/2 px-5 sm:px-10 lg:px-20 border-8 dark:border-[#171717] p-10 text-[white] dark:text-[#171717]"
            >
                <h2 className=" md:text-2xl lg:text-4xl text-center mb-8 text-[#f55138e0] dark:text-[#134A66]">
                    {t("contant-form")}
                </h2>

                <label htmlFor="name" className="mb-2">
                    {t("YourName")}
                </label>
                {errors.name && <p className="text-[#f55138e0] -mt-3">{t("required")}</p>}
                <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="outline-none bg-[#171717] dark:bg-[#FFFFFF] border-b dark:border-b-[#171717] mb-6"
                />                

                <label htmlFor="email" className="mb-2">
                    {t("email")}
                </label>
                {errors.email && <p className="text-[#f55138e0] -mt-3">{t("required")}</p>}
                <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="outline-none bg-[#171717] dark:bg-[#FFFFFF] border-b dark:border-b-[#171717] mb-6"
                />
                

                <label htmlFor="message" className="mb-2">
                    {t("helpYou")}
                </label>
                <textarea
                    {...register("message")}
                    id="message"
                    name="message"
                    rows="2"
                    className="outline-none bg-[#171717] dark:bg-[#FFFFFF] border-b dark:border-b-[#171717] mb-6"
                ></textarea>
                

                <div className=" flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#f55138e0] dark:bg-[#134A66] w-1/2 font-bold uppercase text-white border-none py-3 "
                    >
                        {t("send")}
                    </button>
                </div>
            </form>
        </section>
    );
};
