import React from "react";
import { motion } from "framer-motion";
import { BiSolidPhoneCall } from "react-icons/bi";
import Spotlight from "../component/ui/Spotlight";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CardContainer, CardBody, CardItem } from "../component/ui/3d-card";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useState } from "react";

const images = [
  "https://res.cloudinary.com/dq829orud/image/upload/v1746089584/IMG-20250501-WA0008_p39xm4.jpg",
  "https://res.cloudinary.com/dq829orud/image/upload/v1746089584/IMG-20250501-WA0007_nwusp5.jpg",
  "https://res.cloudinary.com/dq829orud/image/upload/v1746089584/IMG-20250501-WA0009_ontzs5.jpg",
  "https://res.cloudinary.com/dq829orud/image/upload/v1746089584/IMG-20250501-WA0010_kevzlf.jpg",
  "https://res.cloudinary.com/dq829orud/image/upload/v1746089584/IMG-20250501-WA0012_qjhzqi.jpg",
  "https://res.cloudinary.com/dq829orud/image/upload/v1746089585/IMG-20250501-WA0015_ety5lq.jpg",
  "https://res.cloudinary.com/dq829orud/image/upload/v1746089585/IMG-20250501-WA0013_kxnzcd.jpg",
  "https://res.cloudinary.com/dq829orud/image/upload/v1746089585/IMG-20250501-WA0014_ibc8bo.jpg",
  "https://res.cloudinary.com/dq829orud/image/upload/v1746089584/IMG-20250501-WA0011_bdkxee.jpg",
];

export default function Service() {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () =>
    setIndex((index - 1 + images.length) % images.length);
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 antialiased flex flex-col items-center justify-start">
      {/* Background Grid - Move to lower z-index */}
      <div className="pointer-events-none absolute inset-0 select-none bg-gradient-to-r from-rose-100 to-teal-100 [backgro und-size:30px_30px] -z-1" />

      {/* Background Spotlight */}
      <Spotlight className="top-0 left-0 md:-top-10 md:left-40 z-0" fill="white" />

      <motion.div
        className="relative min-h-screen w-full overflow-hidden mt-25"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Background Image Animation - Higher z-index */}
        <motion.img
          src="https://res.cloudinary.com/dq829orud/image/upload/v1746002830/tv-wall-bracket-installation_eo6c5a.jpg"
          alt="Wallpaper"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.55 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 w-full h-80 object-cover mt-10 "
        />


        {/* Content Animation */}
        <motion.div
          className="relative flex flex-col items-end justify-center md:gap-6 text-outline md:mt-12 mt-18 gap-4 md:m-5 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        >
          {/* Your existing content remains same */}
          <h1 className="text-blue-500 font-titan-one-regular md:text-5xl text-3xl hover:underline ease-in-out hover:scale-105 transition-transform">
            Services
          </h1>

          <h2 className="text-white md:text-2xl text-xl text-center font-poppins-regular">We proudly present our services to our customer</h2>

          <div className="flex flex-wrap items-center gap-6 mt-2">
            <BiSolidPhoneCall className="text-white text-3xl md:text-4xl bg-blue-500 p-2 rounded-full" />
            <h2 className="text-white text-lg md:text-xl font-limelight-regular">
              Toll free no. <strong className="text-blue-500 font-poppins-regular underline">18005476554</strong>
            </h2>
          </div>

          <h2 className="underline font-bold font-rationale-regular mr-10 text-blue-500 text-2xl">OR</h2>

          <div className="flex flex-wrap items-center gap-6 mt-2">
            <IoPhonePortraitOutline className="text-white text-3xl md:text-4xl bg-blue-500 p-2 rounded-full" />
            <h2 className="text-white font-limelight-regular text-xl md:text-2xl">
              Call us now at: <strong className="font-poppins-regular text-blue-500 underline">+91 7800031888</strong>
            </h2>
          </div>
        </motion.div>
        <div className=" flex w-full items-center justify-center mt-10">
          <h1 className="text-white bg-blue-500 hover:border-1 hover:border-black p-2 text-3xl  font-titan-one-regular hover:shadow-2xl shadow-blue-600 text-outline  mt-10 cursor-pointer rounded-xl  transition hover:scale-110 ease-in-out">What we offer</h1>
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
                <CardBody className="bg-blue-500 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border h-full flex flex-col min-h-[440px]">


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
                  <div className="text-xl font-bold text-white text-outline mt-5">
                    {item.p_name}
                  </div>


                  {/* Description */}
                  <CardItem as="p" className="text-blue-500 bg-white text-sm max-w-sm mt-6 dark:text-neutral-300 p-2 rounded-xl hover:border hover:bord er-black hover:shadow-black hover:shadow-2xl">
                    {item.des}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          ))}

        </div>
        <motion.div className="w-full relative">
          <motion.img src="https://res.cloudinary.com/dq829orud/image/upload/v1746009289/BigScreens_gjxtag.jpg"
            alt="Wallpaper"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className=" inset-0 w-full h-150 object-cover " />
          <div className="absolute inset-0  items-center justify-center p-6  ">
            <motion.div
              className="flex flex-col gap-6 items-center justify-center  "
            ><div className="text-blue-500 text-2xl sm:text-4xl font-bold bg-white/80  rounded-full pl-5 pr-5 p-2  ">
                We repair all major issues of LED TV
              </div>
            </motion.div>

          </div>
          <div className="flex flex-col justify-center items-center gap-6 p-4 mt-5">
            {/* Header Texts */}
            <div className="text-white w-fit text-4xl text-center  pl-4 pr-4 p-2 font-semibold transform transition hover:scale-110 hover:shadow-2xl hover:shadow-blue-500 ease-in-out cursor-pointer bg-blue-500 opacity-90 rounded-full ">
              All Brand TV Repair Spot
            </div>
            <div className="text-blue-500 rounded-full text-center p-2 bg-white opacity-90">
              Get best TV repairs at your door step. We are providing television repair & Installation/ Un-installation Services at affordable rates in your area.
            </div>
          </div>
          {/* Main Responsive Section */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:ml-20 justify-center mt-4">
            {/* Points List */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col justify-start text-xl gap-4 text-blue-500"
            >
              {/* Backlight Issue with hover effect */}
              <h1 className="group flex items-center gap-3 text-blue-500 bg-white rounded-full p-2 transform transition ease-in-out cursor-pointer">
                <MdMiscellaneousServices className="text-white bg-blue-500 p-1 text-4xl rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500" />
                <span className="group-hover:text-blue-700">Backlight Issue</span>
              </h1>

              {/* No Power Issue with hover effect */}
              <h1 className="group flex items-center gap-3 text-blue-500 bg-white rounded-full p-2 transform transition ease-in-out cursor-pointer">
                <MdMiscellaneousServices className="text-white bg-blue-500 p-1 text-4xl rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500" />
                <span className="group-hover:text-blue-700">No Power Issue</span>
              </h1>

              {/* Vertical colored lines on Screen with hover effect */}
              <h1 className="group flex items-center gap-3 text-blue-500 bg-white rounded-full p-2 transform transition ease-in-out cursor-pointer">
                <MdMiscellaneousServices className="text-white bg-blue-500 p-1 text-4xl rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500" />
                <span className="group-hover:text-blue-700">Vertical colored lines on Screen</span>
              </h1>

              {/* LED TV Display goes blank with hover effect */}
              <h1 className="group flex items-center gap-3 text-blue-500 bg-white rounded-full p-2 transform transition ease-in-out cursor-pointer">
                <MdMiscellaneousServices className="text-white bg-blue-500 p-1 text-4xl rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500" />
                <span className="group-hover:text-blue-700">LED TV Display goes blank</span>
              </h1>

              {/* HDMI port not working with hover effect */}
              <h1 className="group flex items-center gap-3 text-blue-500 bg-white rounded-full p-2 transform transition ease-in-out cursor-pointer">
                <MdMiscellaneousServices className="text-white bg-blue-500 p-1 text-4xl rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500" />
                <span className="group-hover:text-blue-700">HDMI port not working</span>
              </h1>

              {/* Speakers Issues with hover effect */}
              <h1 className="group flex items-center gap-3 text-blue-500 bg-white rounded-full p-2 transform transition ease-in-out cursor-pointer">
                <MdMiscellaneousServices className="text-white bg-blue-500 p-1 text-4xl rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500" />
                <span className="group-hover:text-blue-700">Speakers Issues</span>
              </h1>

              {/* Android TV stuck on logo with hover effect */}
              <h1 className="group flex items-center gap-3 text-blue-500 bg-white rounded-full p-2 transform transition ease-in-out cursor-pointer">
                <MdMiscellaneousServices className="text-white bg-blue-500 p-1 text-4xl rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500" />
                <span className="group-hover:text-blue-700">Android TV stuck on logo</span>
              </h1>

              {/* LED TV not connecting to WiFi with hover effect */}
              <h1 className="group flex items-center gap-3 text-blue-500 bg-white rounded-full p-2 transform transition ease-in-out cursor-pointer">
                <MdMiscellaneousServices className="text-white bg-blue-500 p-1 text-4xl rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500" />
                <span className="group-hover:text-blue-700">LED TV not connecting to WiFi</span>
              </h1>

              {/* Screen black but Sound is working with hover effect */}
              <h1 className="group flex items-center gap-3 text-blue-500 bg-white rounded-full p-2 transform transition ease-in-out cursor-pointer">
                <MdMiscellaneousServices className="text-white bg-blue-500 p-1 text-4xl rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500" />
                <span className="group-hover:text-blue-700">Screen black but Sound is working</span>
              </h1>
            </motion.div>

            {/* Image Slider */}
            <div className="relative w-full md:w-1/2 max-w-xl mx-auto bg-blue-500 rotate-6 rounded-xl">
              <img
                src={images[index]}
                alt={`Slide ${index}`}
                className="w-full md:h-100 h-80 object-cover rounded-xl shadow-lg transition-all duration-500 -rotate-6"
              />

              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-6xl rounded-full  -rotate-6 mt-10 bg-blue-500 cursor-pointer"
              >
                <IoMdArrowDropleftCircle />
              </button>

              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-6xl rounded-full  -rotate-6 -mt-4 bg-blue-500 cursor-pointer"
              >
                <IoMdArrowDroprightCircle />
              </button>
            </div>
          </div>


        </motion.div>

      </motion.div>
    </div>
  );

}