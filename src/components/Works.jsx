
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

const images = [image1, image2, image3, image4, image5, image6];

export const Works = () => {

    return (
        <section className="px-10 bg-[#171717]">
            <h2 className="text-center text-2xl mb-7">[  WORKS  ]</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-5 py-5 pb-32">
                {images.map((image, index) => (
                    <div key={index}
            className={`relative overflow-hidden group ${
              index % 2 === 0 ? 'bg-black' : 'bg-[#f55138e0]'
            }`}>
                        <img
                            src={image}
                            alt={`Image ${index}`}
                            className="w-full h-auto transition-opacity-transform transform scale-100 group-hover:scale-110
                            duration-500 ease-in-out bg-opacity-50 opacity-50 group-hover:opacity-100"
                        />

                    </div>
                ))}
            </div>
        </section>
    );
};
