import React from "react";
import { motion } from "framer-motion";
import { BiSolidPhoneCall } from "react-icons/bi";
import Spotlight from "../component/ui/Spotlight";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CardContainer, CardBody, CardItem } from "../component/ui/3d-card";

export default function Service() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased flex flex-col items-center justify-start ">

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:40px_40px] " />

      {/* Background Spotlight */}
      <Spotlight className="top-0 left-0 md:-top-10 md:left-40" fill="white" />
      <motion.div
        className="relative min-h-screen w-full overflow-hidden mt-25"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Background Image Animation */}
        <motion.img
          src="https://res.cloudinary.com/dq829orud/image/upload/v1746002830/tv-wall-bracket-installation_eo6c5a.jpg"
          alt="Wallpaper"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.55 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 w-full h-80 object-cover z-0 blur-[2px] mt-10"
        />

        {/* Content Animation */}
        <motion.div
          className="relative flex flex-col items-center justify-center md:gap-6  text-outline md:mt-10 mt-20 gap-4 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        >
          {/* Your existing content remains same */}
          <h1 className="text-white font-titan-one-regular md:text-5xl text-3xl hover:underline ease-in-out hover:scale-105">Services</h1>
          <h2 className="text-white/70 md:text-2xl text-xl text-center font-poppins-regular">We proudly present our services to our customer</h2>

          <div className="flex flex-wrap items-center gap-6 mt-2">
            <BiSolidPhoneCall className="text-green-600 text-3xl md:text-4xl bg-white/80 p-2 rounded-full" />
            <h2 className="text-white text-lg md:text-xl font-limelight-regular">
              Toll free no. <strong className="text-red-500 font-poppins-regular underline">18005476554</strong>
            </h2>
          </div>

          <h2 className="underline font-bold font-rationale-regular text-red-500 text-2xl">OR</h2>

          <div className="flex flex-wrap items-center gap-6 mt-2">
            <IoPhonePortraitOutline className="text-green-600 text-3xl md:text-4xl bg-white/80 p-2 rounded-full" />
            <h2 className="text-white font-limelight-regular text-xl md:text-2xl">
              Call us now at: <strong className="font-poppins-regular text-white underline">+91 7800031888</strong>
            </h2>
          </div>
        </motion.div>
        <div className=" flex w-full items-center justify-center mt-10">
          <h1 className="text-white/90 bg-white/30 rounded-full p-2 text-3xl  font-titan-one-regular  text-outline border-b-1 border-white/20 text-shadow-red-500 text-shadow-2xs mt-10">What we offer</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {[
            {
              image: "https://res.cloudinary.com/dq829orud/image/upload/v1746007670/installing-mount-tv_f3vfcc.jpg",
              p_name: "Installations",
              des: "We provide Insatallations Services of all brands. Same Day Service. Just contact our service Center.",

            },
            {
              image: "https://res.cloudinary.com/dq829orud/image/upload/v1746007711/the-man-repairing-broken-tv-at-home_coemks.jpg",
              p_name: "T.V Panel Repair",
              des: "We provide the best quality LED TV panel repair services in Kanpur U.P.",

            },
            {
              image: "https://res.cloudinary.com/dq829orud/image/upload/v1746007771/cr_t_0_25_l_0_25_w_100_25_h_100_25_rb2r2y.jpg",
              p_name: "Curved T.V Repair",
              des: "We provide Curved Tv Repair Services. With the support of our expert engineers, we are engaged in offering all brand television services to our valued customers.",

            },
            {
              image: "https://res.cloudinary.com/dq829orud/image/upload/v1746007813/Best-Television-repair-service-in-Lucknow-e1724605312471_wmrfdx.png",
              p_name: "Smart T.V Repair",
              des: "We Provide Doorstep Tv Repair Service For Smart LED TV. Our Expert Engineer Will Visit your Home.",

            },
            {
              image: "https://res.cloudinary.com/dq829orud/image/upload/v1746007850/20130529205609127_5755D67K_iyy3d7.jpg",
              p_name: "Plasma T.V Repair",
              des: "We provide Plasma Tv Repair Services. Our specialist fixes generally all issues at your door step yet assuming we found any serious issue we carry your plasma to us, fix that and drop it at your place.",

            },
            {
              image: "https://res.cloudinary.com/dq829orud/image/upload/v1746008261/1520201908882_ziyfue.jpg",
              p_name: "3D T.V Repair",
              des: "We provide 3D Tv Repair Services. We provide the best quality LED 3D TV repair services in Kanpur, U.P. We are here to repair all brands of 3D TV in Kanpur.",

            },
          ].map((item, index) => (
            <div className="h-full ">
              <CardContainer className="inter-var h-full cursor-pointer" key={index}>
                <CardBody className="bg-[#282b30] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border h-full flex flex-col min-h-[440px]">


                  {/* Image with 3D Hover Effect */}
                  <CardItem translateZ={100} className="w-full mt-4">
                    <motion.img
                      src={item.image}
                      alt="thumbnail"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      whileHover={{
                        scale: 1.1,
                        rotateY: 1,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                    />
                  </CardItem>

                  {/* Title */}
                  <div className="text-xl font-bold text-red-500 text-outline mt-5">
                    {item.p_name}
                  </div>


                  {/* Description */}
                  <CardItem as="p" className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {item.des}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          ))}

        </div>
        <motion.div className="w-full ">
          <motion.img src="https://res.cloudinary.com/dq829orud/image/upload/v1746009289/BigScreens_gjxtag.jpg" 
           alt="Wallpaper"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.55 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" inset-0 w-full h-150 object-cover "/>
        </motion.div>

      </motion.div>
    </div>
  );

}