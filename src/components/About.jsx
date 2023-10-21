import profile from "../assets/adrian3.jpg";

import { Fade } from "react-awesome-reveal";

export const About = () => {

    return (

        <section name="about" className=" md:flex md:justify-center md:items-center md:h-[760px] bg-[#171717] ">

            <article className=" h-[520px] sm:h-[400px] md:flex flex-col justify-center bg-[#f55138e0]
                                md:ml-8 md:h-[650px] md:w-[850px] ">
                <div className=" p-8 sm:p-16 md:mr-24 ">
                    <h2 className=" text-2xl mb-8">ABOUT</h2>
                    <p>As a web developer and user experience (UX) designer,
                        I find myself at the intersection of technology and design,
                        where creativity meets functionality. My passion lies in creating
                        digital products that are not only visually appealing but also
                        highly intuitive and user-friendly. With a strong foundation
                        in web application development and a deep understanding
                        of user-centered design principles, my goal is to build solutions
                        that enhance people's lives and effectively address challenges.
                    </p>
                </div>
            </article>

            <div>
                <Fade fraction={0.8} triggerOnce={true} >
                    <img className=" m-auto relative bottom-20 max-h-[370px] sm:max-h-[500px] sm:relative
                        sm:bottom-16 md:relative md:bottom-0 md:right-32 md:max-h-[550px]" src={profile} alt="Image profile" />
                </Fade>
            </div>
        </section>
    )
}
