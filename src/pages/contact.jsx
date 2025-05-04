import React from "react";
import { FaStar } from "react-icons/fa6";


export default function Contact() {
    return (
        <div className="mt-50 ml-50">
            <div className="flex  items-center ">
                <div className="">
                    <img className="md:h-30 " src="https://res.cloudinary.com/dq829orud/image/upload/v1746391139/profile-placeholder-image-gray-silhouette-vector-21542866_nts6vi.jpg" />
                </div>
                <div className="space-y-2">
                    <div className="flex text-red-400 space-x-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <div>Arti Devi</div>
                    <div>My Sony 43" Android LED TV mother board damage and folt, Nirala Electronics Repair two hours, given three months warranty and Responsive price, so best repair service center Thank-you</div>
                </div>
            </div>

        </div>
    )
}