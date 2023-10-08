import hero from "../assets/coffee.jpg";

export const Hero = () => {

    return (

        <main className="relative h-[650px] ">
            <img
                src={hero}
                alt="Imagen de héroe"
                className=" w-full h-full object-cover"
            />
            {/* Fondo oscuro para el texto */}
            <div className="absolute inset-0 bg-opacity-30 bg-black"></div>

            {/* Contenedor del contenido centrado */}
            <section className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-3">
                    Hello, There!
                </h1>
                <article>
                    <p className="text-lg md:text-xl text-center min-w-min">
                        I'm Adrian F, Developer and UX Designer passionate about creating digital experiences
                    </p>
                </article>

            </section>
        </main>

    )
}
