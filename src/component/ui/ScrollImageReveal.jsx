import React from "react";
import { TfiHandPointRight } from "react-icons/tfi";


export default function ElementorSectionMock() {
    return (
        <section
            className="relative bg-cover bg-center py-12"
            style={{
                backgroundImage: `url('https://res.cloudinary.com/dq829orud/image/upload/v1746002830/tv-wall-bracket-installation_eo6c5a.jpg')`,
            }}
        >
            {/* White overlay */}
            <div className="absolute inset-0 bg-white opacity-0 z-0"></div>

            {/* Content container */}
            <div className="relative container mx-auto px-4 flex flex-col md:flex-row gap-6 z-10">
                {/* Column 1 */}
                <div className="flex-1 bg-white p-6 shadow rounded">
                    <ul className="space-y-4 font-poppins-regular">
                        <li className="flex items-start space-x-2">
                            <span className="text-red-500 md:text-2xl text-xl mt-1">
                                <TfiHandPointRight />
                            </span>
                            <span>
                                we used all brand's genuine spare parts for repair LCD LED tv at affordable price
                            </span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-red-500 md:text-2xl text-xl mt-1">
                                <TfiHandPointRight />
                            </span>
                            <span>
                                Smart and Android LED and LCD fixes any issue of LCD LED Tv in just one working day
                            </span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-red-500 md:text-2xl text-xl mt-1">
                                <TfiHandPointRight />
                            </span>
                            <span>
                                Our tv repair team carefully repaired your tv without any damage and delivers it to your doorstep
                            </span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-red-500 md:text-2xl text-xl mt-1">
                                <TfiHandPointRight />
                            </span>
                            <span>
                                24/7 calling support and full guarantee of repair
                            </span>
                        </li>
                    </ul>

                </div>

                {/* Column 2 */}
                <div className="flex-1 bg-white p-6 shadow rounded">
                    <h2 className="text-xl md:text-4xl md:font-bold  text-red-400 font-semibold mb-4 font-poppins-regular">Get great home service in one call</h2>
                    <p className="font-poppins-regular">We provide Home services since <span className="text-red-400 font-bold">XXXX</span> in <span className="text-red-400 font-bold">Kanpur, Uttar Pradesh</span></p>
                </div>
            </div>
        </section>
    );
}
