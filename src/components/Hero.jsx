import hero from "../assets/coffee1.jpg";

export const Hero = () => {

    return (

        <main className="relative h-[550px] pt-24 sm:relative sm:h-[800px]">
            <img
                src={hero}
                alt="Imagen hero"
                className=" w-full h-full object-cover "
            />
            {/* Fondo oscuro para el texto */}
            <div className="absolute inset-0 bg-opacity-40 bg-black"></div>

            {/* Contenedor del contenido centrado */}
            <section className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-3">
                    HELLO, THERE!
                </h1>
                <article>
                    <p className="text-lg mx-5 md:text-2xl text-center min-w-min ">
                        I'm Adrian F. Ochoa H, Developer and UX Designer passionate about creating digital experiences
                    </p>
                </article>
            </section>
        </main>

    )
}
