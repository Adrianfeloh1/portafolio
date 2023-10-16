import { GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";

export const Form = () => {

    const currentYear = new Date().getFullYear();

    return (
        <section name="contact" className=" bg-[#171717] flex flex-col md:flex md:flex-row justify-center items-center md:pt-10 px-10 md:pb-32 pb-20">

            <article className=" flex flex-col w-2/2 md:w-1/2 text-center md:px-8 lg:px-20">
                <h2 className=" md:text-2xl lg:text-4xl mb-5 lg:mb-10 uppercase text-[white]">
                    Let's Discuss Your Project!
                </h2>
                <p className="mb-10 text-[#c2c2c2]"> I'm thrilled about the opportunity to collaborate
                    on your project. Please, complete the following form with your contact details. I will get
                    back to you as soon as possible to discuss how I can assist you in developing your website.
                </p>
                <h3 className="sm:mb-2 md:text-lg lg:text-2xl">E-mail</h3>
                <p className=" text-[#c2c2c2]">adrianfeloh1@gmail.com</p>
                <div className="mt-4 mb-4 md:mb-16 text-2xl flex justify-center items-center gap-4 text-[white]">
                    <GrLinkedin />
                    <GrInstagram />
                    <GrTwitter />
                </div>

                <p className="pb-5">© AF {currentYear} - Todos los derechos reservados.</p>

            </article>

            <form action="" className=" bg-[#171717] flex flex-col w-full md:w-1/2 px-5 sm:px-10 lg:px-20 border-8 p-10 text-[white] ">
                <h2 className=" md:text-2xl lg:text-4xl text-center mb-8 text-[#f55138e0]">CONTACT FORM</h2>

                <label htmlFor="name" className="mb-2">Your Name</label>
                <input type="text" id="name" name="Your Name" autoComplete="name" required
                    className="outline-none bg-[#171717] border-b mb-6" />

                <label htmlFor="email" className="mb-2">Email:</label>
                <input type="email" id="email" name="email" autoComplete="email" required
                    className="outline-none bg-[#171717] border-b mb-6" />

                <label htmlFor="mesage" className="mb-2">How can I assist you?</label>
                <textarea id="mesage" name="mesage" rows="2" required
                    className="outline-none bg-[#171717] border-b mb-6"></textarea>

                <div className=" flex justify-center">
                    <button type="submit"
                        className="bg-[#f55138e0] w-1/2 font-bold uppercase text-white border-none py-3 ">
                        Send <span className="hidden lg:inline"> Message</span>
                    </button>
                </div>                

            </form>
            
        </section>
    )
}
