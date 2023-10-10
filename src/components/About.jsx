import profile from "../assets/adrian.jpg";

export const About = () => {

    return (

        <section className="md:flex justify-center items-center md:h-[750px] bg-[#10222E] ">

            <article className="  md:flex flex-col justify-center bg-[#f55138e0] md:ml-8 md:h-[650px] md:w-[850px]">
                <div className="md:mr-12 p-8">
                    <h2 className=" text-3xl mb-8">About</h2>
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
                <img className="  md:relative md:right-16 md:max-h-[600px]" src={profile} alt="Image profile" />
            </div>

        </section>
    )
}
