import { GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";

export const Form = () => {

    return (
        <section className=" bg-[#171717] h-[550px] flex justify-center items-center px-10 pb-20">

            <article className=" flex flex-col w-1/2 text-center px-20">
                <h2 className="text-4xl mb-10 uppercase text-[white]">Let's Discuss Your Project!</h2>
                <p className="mb-10 text-[#c2c2c2]"> I'm thrilled about the opportunity to collaborate on your project. Please,
                    complete the following form with your contact details. I will get back to you
                    as soon as possible to discuss how I can assist you in developing your website.
                </p>
                <h3 className="mb-2">E-mail</h3>
                <p className=" text-[#c2c2c2]">adrianfeloh1@gmail.com</p>
                <div className="mt-4 text-2xl flex justify-center items-center gap-4 text-[white]">
                    <GrLinkedin />
                    <GrInstagram />
                    <GrTwitter />
                </div>
            </article>

            <form action="" className=" bg-[#171717] flex flex-col w-1/2 px-20 border p-10 text-[white] ">
                <h2 className=" text-4xl text-center mb-8 text-[#f55138e0]">CONTACT FORM</h2>

                <label htmlFor="name" className="mb-2">Your Name</label>
                <input type="text" id="name" name="Your Name" required
                    className="outline-none bg-[#171717] border-b mb-6" />

                <label htmlFor="email" className="mb-2">Email:</label>
                <input type="email" id="email" name="email" required
                    className="outline-none bg-[#171717] border-b mb-6" />

                <label htmlFor="mesage" className="mb-2">How can I assist you?</label>
                <textarea id="mesage" name="mesage" rows="2" required
                    className="outline-none bg-[#171717] border-b mb-6"></textarea>

                <div className=" flex justify-center">
                    <button type="submit"
                        className="bg-[#f55138e0] w-1/2 font-bold uppercase text-white border-none px-8 py-3 ">
                        Send Message
                    </button>

                </div>

            </form>

        </section>
    )
}
