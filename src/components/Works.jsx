
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

import { useTranslation } from 'react-i18next';

export const Works = () => {

    const { t } = useTranslation()

    const images = [image1, image2, image3, image4, image5, image6];

    const titles = [
        'Rock al Parque',
        'Online Shop',
        'Servicios MTTO',
        'App Food',
        'GIF APP',
        'Blog Café',
    ];

    const links = [
        'https://rock-al-parque-adrian-ochoa.netlify.app', // Agrega aquí tus enlaces
        'https://shop-store-adrian-ochoa.netlify.app',
        'https://fk8-servicios-adrian-ochoa.netlify.app',
        'https://dark-store-adrian-ochoa.netlify.app',
        'https://gif-app-adrian-ochoa.netlify.app',
        'https://blog-cafe-adrian-ochoa.netlify.app',
    ];

    return (
        <section name="works" className="px-5 sm:px-10 bg-[#171717] dark:bg-white">
            <h2 className="text-center text-2xl mb-7 dark:text-[#171717]">[  {t("works")}  ]</h2>
            <div className="grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-5 py-5 pb-20">
                {images.map((image, index) => (
                    <a key={index} href={links[index]} target="_blank" rel="noopener noreferrer">
                        <div
                            className="relative overflow-hidden group bg-[#171717]"
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className="w-full h-auto transition-opacity-transform transform scale-100 group-hover:scale-110 duration-500 ease-in-out bg-opacity-50 opacity-50 group-hover:opacity-100"
                            />
                            <div
                                className="absolute inset-0 flex items-center justify-center transition-transform transform translate-y-0 group-hover:translate-y-[-40%] opacity-100 duration-500 ease-in-out"
                                style={{ cursor: 'pointer' }}
                            >
                                <h2 className="text-white text-2xl">{titles[index]}</h2>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};
