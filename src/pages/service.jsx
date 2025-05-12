import React from "react";
import { motion } from "framer-motion";
import { PiPiggyBankLight } from "react-icons/pi";
import { Ri24HoursLine } from "react-icons/ri";
import { FaWrench } from "react-icons/fa6";
import ElementorSectionMock from "../component/ui/ScrollImageReveal";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



import { IoPhonePortraitOutline } from "react-icons/io5";
import { CardContainer, CardBody, CardItem } from "../component/ui/3d-card";
import { MdMiscellaneousServices } from "react-icons/md";

import { PiCallBellBold } from "react-icons/pi";

import emailjs from '@emailjs/browser';
import { useRef } from "react";

import ImageGallery from "../component/ui/ImageGallery";
import CounterComponent from "../component/ui/CounterComponenet";
import ScrollImageReveal from "../component/ui/ScrollImageReveal";
import FloatingContactWidget from "../component/ui/FloatingContactWidget";


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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vk2smqs',         // your service ID
        'template_kit97kb',        // your template ID
        form.current,
        'igcQB2_r4aUcarDfx'        // your public key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message.');
          console.error(error);
        }
      );
  };


  return (
    <div className=" min-h-screen w-full overflow-hidden bg-gradient-to-r from-gray-100 to-gray-300 antialiased flex flex-col items-center justify-start">



      <motion.div
        className="relative min-h-screen  w-full overflow-hidden mt-21"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center md:justify-around ">
          <section id="home"  ><div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 mt-5 md:mt-10">
            <div className="text-4xl md:text-6xl font-semibold font-poppins-regular">
              M.M <a className="font-beau-rivage-regular text-red-500">Enterprises</a>
            </div>
            <div className="text-xl font-poppins-regular font-semibold md:font-bold">Provides</div>
            <div className="text-xl md:text-2xl font-semibold font-poppins-regular">
              Sony, LG, Samsung, OLED, MI & every other brand Specialist Engineer
            </div>
            <div className="text-red-500 text-xl md:text-2xl font-bold md:font-extrabold">In</div>
            <div className="text-2xl md:text-3xl font-bold font-poppins-regular">
              Kanpur, Uttar Pradesh
            </div>
          </div></section>


          <div className="mt-5 md:mt-0 mb-5">
            <a href="tel:+917800031888">
              <button className="bg-red-500 text-white font-poppins-regular px-7 py-2 text-md md:text-xl rounded-md shadow-lg shadow-red-400">
                CALL US TODAY
              </button>
            </a>
          </div>
        </div>



        <div className="  ">
          <ImageGallery images={images} />
        </div>
        <section id="aboutus">
          <motion.div
            className="relative flex flex-col items-center justify-center md:mt-10  mt-5 gap-y-5 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          >

            <h2 className=" font-bold font-poppins-regular text-2xl md:text-4xl text-center">We <a className="text-red-500">Repair</a>  All Brands LED LCD And Plasma TV</h2>
            <div className="text-center md:text-xl text-sm p-2 font-poppins-regular"><strong>M.M</strong> <span className="font-beau-rivage-regular md:font-bold font-semibold md:text-3xl text-2xl text-red-500">Enterprises</span> TV Service Center repair all brands of Television on affordable price with genuine spare parts. We repair all types of LCD TV, LED TV, Plasma & 4K Smart TV. We provide doorstep home services. If you are looking for  TV Repair Services in<strong> Kanpur, Uttar Pradesh </strong>then you are on the right place. Getting your LCD, LED TV for repair can be hard for you because of it size. Don’t worry we offer awesome on site Home repair service</div>

            <div className="flex w-full  items-center justify-center bg-red-400 p-6 font-poppins-regular ">
              <h2 className="text-white font-bold  text-center text-2xl md:text-3xl ">
                Call us!
                <div className="flex bg-white p-2 md:p-4 rounded-lg mt-5 items-center justify-center "><IoPhonePortraitOutline className="text-red-400  text-3xl md:text-4xl bg-white p-1 rounded-full" /><a href="tel:+917800031888" className="font-poppins-regular font-semibold text-red-400 text-xl">+91 7800031888</a></div>
              </h2>
            </div>
          </motion.div>
        </section>

        <div className=" flex flex-col w-full items-center justify-center mt-10 space-y-10 ">
          <h1 className=" text-3xl  md:text-5xl md:font-bold font-bold font-poppins-regular">Why Choose us!</h1>
          <div className="md:flex   text-red-500 text-5xl items-center justify-around w-full space-y-20 md:space-y-0">
            <div className="" ><PiPiggyBankLight className="w-full text-black text-5xl md:text-7xl " />
              <div className="text-2xl md:text-4xl text-blue-800 text-center font-semibold md:font-bold">
                Affordable Price
              </div>
            </div>
            <div ><Ri24HoursLine className="w-full text-black text-5xl md:text-7xl " />
              <div className="text-2xl md:text-4xl text-center text-blue-800 font-semibold md:font-bold">
                Anytime Service
              </div>
            </div>
            <div >
              <FaWrench className="w-full text-black text-5xl md:text-7xl " />
              <div className="text-2xl md:text-4xl text-center text-blue-800 font-semibold md:font-bold">
                Qualified Experts
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full text-center text-lg md:text-2xl mt-10">
            we are working in Kanpur from year <span className="text-red-400 font-bold">XXXX</span>. We are one of the <span className="text-red-400 font-bold">best & trusted</span> name in Kanpur In matter of L.C.D , L.E.D TV repairing.
          </div>
        </div>
        <div className="flex md:flex-row flex-col  w-full items-center justify-around md:text-7xl text-5xl md:space-y-0 space-y-10 ">
          <div>
            <CounterComponent />
          </div>

        </div>
        <div className="mt-10">
          <ElementorSectionMock />
        </div>
        <section id="services"><div className="text-center md:font-extrabold md:text-5xl mt-10 text-3xl font-extrabold font-poppins-regular">Services</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full md:-translate-y-12 ">
            {[
              { image: "https://res.cloudinary.com/dq829orud/image/upload/v1746007670/installing-mount-tv_f3vfcc.jpg", p_name: "Installations", des: "We provide Insatallations Services of all brands. Same Day Service. Just contact our service Center." },
              { image: "https://res.cloudinary.com/dq829orud/image/upload/v1746007711/the-man-repairing-broken-tv-at-home_coemks.jpg", p_name: "T.V Panel Repair", des: "We provide the best quality LED TV panel repair services in Kanpur U.P." },
              { image: "https://res.cloudinary.com/dq829orud/image/upload/v1746007771/cr_t_0_25_l_0_25_w_100_25_h_100_25_rb2r2y.jpg", p_name: "Curved T.V Repair", des: "We provide Curved Tv Repair Services. With the support of our expert engineers, we are engaged in offering all brand television services to our valued customers." },
              { image: "https://res.cloudinary.com/dq829orud/image/upload/v1746007850/20130529205609127_5755D67K_iyy3d7.jpg", p_name: "Plasma T.V Repair", des: "Our specialist fixes generally all issues at your door step yet assuming we found any serious issue we carry your plasma to us, fix that and drop it at your place." },
              { image: "https://res.cloudinary.com/dq829orud/image/upload/v1746007813/Best-Television-repair-service-in-Lucknow-e1724605312471_wmrfdx.png", p_name: "Smart T.V Repair", des: "We Provide Doorstep Tv Repair Service For Smart LED TV. Our Expert Engineer Will Visit your Home." },
              { image: "https://res.cloudinary.com/dq829orud/image/upload/v1746008261/1520201908882_ziyfue.jpg", p_name: "3D T.V Repair", des: "We provide 3D Tv Repair Services. We provide the best quality LED 3D TV repair services in Kanpur, U.P. We are here to repair all brands of 3D TV in Kanpur." },
            ].map((item, index) => (
              <div key={index} className=" h-full flex justify-center ">
                <CardContainer className="w-full max-w-sm cursor-pointer md:m-0 ml-10 mr-10 md:h-fit h-72 ">
                  <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-2 border flex flex-col h-auto shadow-xl shadow-white">
                    <CardItem translateZ={100} className="w-full mt-4">
                      <motion.img
                        src={item.image}
                        alt="thumbnail"
                        height="1000"
                        width="1000"
                        className=" relative h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        whileHover={{
                          scale: 1.1,
                          rotateY: 1,
                          transition: { type: "spring", stiffness: 300 },
                        }}
                      />
                    </CardItem>
                    <div className="absolute bg-red-500 text-white text-xl font-bold pl-4 pr-4 rounded-xl mt-7 ml-4 text-ou tline shadow-xl shadow-black font-poppins-regular">{item.p_name}</div>
                    <CardItem as="p" className=" bg-red-400 text-white text-sm max-w-sm mt-6 p-2 rounded-xl hover:border hover:border-black hover:shadow-black hover:shadow-2xl font-poppins-regular">
                      {item.des}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>
        </section>

        <motion.div className="w-full relative ">

          <div className="w-full bg-[#130a32] md:p-10 p-5 font-poppins-regular transform transition hover:scale-110 hover:shadow-2xl hover:shadow-purple-900 ease-in-out cursor-pointer shadow-lg  ">
            <div className="text-white md:text-4xl text-xl font-semibold  text-center   ">
              Get 20% Discount On Your First Service
            </div>

            <div className="w-full flex text-xl items-center justify-center mt-5 text-white font-poppins-regular">
              <div className="flex bg-red-400 items-center justify-center p-2 pl-4 pr-4 rounded">
                <FaPhoneVolume className=" mr-5 " />
                <a href="tel:+917800031888" className="">CALL 7800031888</a>
              </div>

            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6  mt-5">
            {/* Header Texts */}


            <div className="text-[#1a103d] rounded-2xl text-center p-4 font-bold md:text-5xl text-2xl font-poppins-regular">
              Our Happy Clients
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 p-4 md:p-6 text-[#1a103d] ">
              {/* Review 1 */}
              <div className="flex items-start space-x-5">
                <img className="h-20 w-20 rounded-full object-cover" src="https://res.cloudinary.com/dq829orud/image/upload/v1746396496/360_F_1298836039_whqHL6PmGZ09r86QgUQ5cxXwkwzzTzrI_cuzjwu.jpg" />
                <div className="space-y-2">
                  <div className="flex text-red-400 space-x-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  <div className="text-[#1a103d] font-semibold">Arti Devi</div>
                  <div className="text-[#1a103d] text-sm">
                    My Sony 43" Android LED TV mother board damage and fault,
                    <br />
                    <span className="font-bold text-lg">M.M</span> <span className="text-red-400 font-beau-rivage-regular text-xl font-bold">Enterprises</span> Repair two hours, given three months warranty and Responsive price, so best repair service center.
                    <span className="font-bold block">Thank-you</span>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="flex items-start space-x-5">
                <img className="h-20 w-20 rounded-full object-cover" src="https://res.cloudinary.com/dq829orud/image/upload/v1746396234/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416_ooawro.jpg" />
                <div className="space-y-2">
                  <div className="flex text-red-400 space-x-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  <div className="text-[#1a103d] font-semibold">Varun Chauhan</div>
                  <div className="text-[#1a103d] text-sm">
                    <span className="font-bold text-lg">M.M</span> <span className="text-red-400 font-beau-rivage-regular text-xl font-bold">Enterprises</span> is very oldest service center in Kanpur, here engineer colifid talented and very honest people, My Samsung 42"smart led painal repair takes only two hours so best service center
                    <span className="font-bold block">Thank-you</span>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="flex items-start space-x-5">
                <img className="h-20 w-20 rounded-full object-cover" src="https://res.cloudinary.com/dq829orud/image/upload/v1746396297/portrait-of-young-confident-indian-woman-pose-on-background_hmqmrr.jpg" />
                <div className="space-y-2">
                  <div className="flex text-red-400 space-x-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  <div className="text-[#1a103d] font-semibold">Kaaju Kajal</div>
                  <div className="text-[#1a103d] text-sm">
                    <span className="font-bold text-lg">M.M</span> <span className="text-red-400 font-beau-rivage-regular text-xl font-bold">Enterprises</span> is best LCD, LED Repair Shop in Kanpur. Because My Samsung LED TV in Power Conduct is damage so this person make affordable price.
                    <span className="font-bold block">Thank-you</span>
                  </div>
                </div>
              </div>

              {/* Review 4 */}
              <div className="flex items-start space-x-5">
                <img className="h-20 w-20 rounded-full object-cover" src="https://res.cloudinary.com/dq829orud/image/upload/v1746396285/Profile-67_piq2if.png" />
                <div className="space-y-2">
                  <div className="flex text-red-400 space-x-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  <div className="text-[#1a103d] font-semibold">Khusbu Singh</div>
                  <div className="text-[#1a103d] text-sm">
                    <span className="font-bold text-lg">M.M</span> <span className="text-red-400 font-beau-rivage-regular text-xl font-bold">Enterprises</span> is best lcd led tv repair technician & worth price, my Samsung LED TV pannel daimage this person quick and fast provide home services, Best Samsung LED TV Repair Service Center in Kanpur.
                    <span className="font-bold block">Thank-you</span>
                  </div>
                </div>
              </div>
            </div>

          </div>





        </motion.div>
        <section id="contact">
          <div className="flex flex-col items-center">
            <div className="md:text-4xl text-[#1a103d] font-poppins-regular text-2xl font-bold mt-5">
              Review Us On
            </div>
            <div className="flex md:text-2xl text-xl space-x-10 md:space-x-15 text-red-500 ">
              <div className="text-blue-900 bg-gray-300 p-2 rounded-full ">
                <FaGoogle />
              </div>
              <div className="text-blue-900 bg-gray-300 p-2 rounded-full ">
                <FaFacebookF />
              </div>
              <div className="text bg-gray-300 p-2 rounded-full ">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto p-6 md:w-full w-fit rounded-lg shadow-md mt-20">
            <div className="flex items-center justify-between rounded-lg"><h2 className="text-xl  font-bold mb-4 text-white bg-[#fd4f4f] w-fit p-2 shadow-md rounded-lg ">Contact Us</h2>
              <PiCallBellBold className="text-white bg-red-500 text-4xl p-2 rounded-lg mb-4 font-semibold shadow-md text-outline" />
            </div>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="p-2 border border-red-400 rounded bg-white placeholder-red-300 focus:border-red-500 focus:outline"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Mobile Number"
                required
                className="p-2 border border-red-400 rounded bg-white placeholder-red-300 focus:border-red-500 focus:outline"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="p-2 border  border-red-400 rounded bg-white placeholder-red-300 focus:border-red-500 focus:outline"
              ></textarea>
              <button
                type="submit"
                className="bg-red-400 text-white py-2 rounded hover:bg-red-500 shadow-xl cursor-pointer"
              >
                Send Request
              </button>
            </form>

          </div>
        </section>

        <div className="bg-[#d04c4c] flex flex-col md:flex-row items-start md:items-stretch justify-between rounded-md m-2  md:h-40 space-y-4 md:space-y-0 md:space-x-4 p-4">

          {/* Address Section */}
          <div className="text-white flex-1 md:h-full p-2 rounded-md">
            <div className="text-2xl md:text-3xl font-semibold font-poppins-regular mb-2">Address</div>
            <div className="font-poppins-regular font-semibold">
              3/12, Labour Colony, Chunni Ganj, Dada Nagar,
            </div>
            <div>Kanpur, Uttar Pradesh 208022</div>
          </div>

          {/* Call Section */}
          <div className="text-white flex flex-col md:items-center md:justify-center items-start justify-start flex-1 p-2 rounded-md">
            <div className="text-2xl md:text-3xl font-bold font-poppins-regular mb-1">Call Us</div>
            <a href="tel:+917800031888" className="text-lg md:text-xl font-semibold font-poppins-regular">7800031888</a>
          </div>

          {/* Map Section */}
          <div className="flex-1 w-full md:h-full h-64 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14285.357196850442!2d80.3165300871582!3d26.477018099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39b2cc74c0c9%3A0xa64d2d1d566e3f0e!2sM.M.%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1746131946764!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <FloatingContactWidget />


        <div>
          <div className=" bg-white p-2 text-center rounded-xl font-poppins-regular">Copyright © 2025 M.M Enterprises | Powered by<br></br><strong className="text-xl">M.M</strong> <span className="font-beau-rivage-regular text-2xl text-red-500 font-bold "> Enterprises</span> </div>
        </div>

      </motion.div>
    </div >
  );

}