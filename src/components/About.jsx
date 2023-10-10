import profile from "../assets/adrian.jpg";

export const About = () => {

    return (

        <section className="px-2 flex items-center h-[750px] bg-[#10222E] ">

            <article className="flex flex-col justify-center bg-[#F55138] ml-8 h-[650px] w-[850px]">
                <div className="mr-12 p-8">
                    <h2 className="mb-8">About</h2>
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
                <img className="relative right-16 max-h-[600px]" src={profile} alt="Image profile" />
            </div>

        </section>
    )
}
