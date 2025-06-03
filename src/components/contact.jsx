import React from 'react';
import { motion } from 'framer-motion'; // Animatsiya qo‘shish uchun Framer Motion import qilindi
import { useTranslation } from 'react-i18next';
import bg from '../assets/bg.svg';
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import '../styles/contact.css'


const Contact = () => {
  const { t } = useTranslation();

  return (
    <motion.div
    id="contact"
    className="relative flex flex-col items-center py-20 px-20 my-20 pt-[120px] -mt-[70px]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >

      {/* Background image with fade-in effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1300px] h-full object-cover -z-10 rounded-[50px]"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        id='intt'
      ></motion.div>

      {/* Title Animation */}
      <motion.h1
        className="text-white font-bold text-[40px] mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {t("contact")}
      </motion.h1>

      {/* Form and Map section */}
      <section className="flex justify-between gap-20 w-[1100px]" id='grid'>
        {/* Form Animation */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          id='int'
        >
          <input
            type="text"
            placeholder={t("name")} id='int'
            className="w-[418px] h-[50px] rounded-full py-[12px] px-[20px] border border-white text-white text-[14px] bg-transparent placeholder-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="text"
            placeholder={t("email")} id='int'
            className="w-[418px] h-[50px] rounded-full py-[12px] px-[20px] border border-white text-white text-[14px] bg-transparent placeholder-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="text"
            placeholder={t("phone")} id='int'
            className="w-[418px] h-[50px] rounded-full py-[12px] px-[20px] border border-white text-white text-[14px] bg-transparent placeholder-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
          />
          <motion.div
            className="flex flex-col gap-6 items-center w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            id='inter'
          >
            {/* Send Button */}
            <div className="w-[418px]">
              <button className="w-full cursor-pointer h-[50px] rounded-full bg-white text-[#4167DC] font-bold text-[14px] hover:scale-105 transition-transform duration-300" id='int'>
                {t("send")}
              </button>
            </div>

            {/* Phone & Email Icons */}
            <div className="flex items-center w-[410px] mt-3 justify-between ">
              <div className="flex items-center gap-2 text-white text-[16px]">
                <FaPhoneVolume className='w-[21px] h-[21px]'/>
                <div className='flex flex-col text-left  h-[21px] font-normal text-[10px]'>
                  <h1>PHONE</h1>
                  <h2>+99893 590-58-07</h2>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white text-[16px]">
                <IoMailOpenOutline className='w-[21px] h-[21px]'/>
                <div className='flex flex-col text-left  h-[21px] font-normal text-[10px]'>
                  <h1>EMAIL</h1>
                  <h2>bcareuz@gmail.com</h2>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Map Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30983.739513980076!2d69.1327869!3d41.2119181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1748863305420!5m2!1sru!2s"
            width="600"
            height="450"
            id='int'
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Contact;
