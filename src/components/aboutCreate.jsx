import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion import qilingan
import dna from '../assets/22 1.svg';
import uy from '../assets/kotej.svg';
import '../styles/about.css'

const AboutCreate = () => {
  return (
    <div>
      <section className="grid grid-cols-2 justify-center items-center px-20 mb-35" id='grid'>
        <motion.div
          className="md:w-[500px] md:h-[480px] w-[640px] h-[482px] bg-gray-400 rounded-[20px] px-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          id='card'
        >
          <motion.img
            src={dna}
            alt=""
            className="w-[590px] h-[300px]"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 180, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <motion.p
            className="font-medium text-[14px] mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Kompaniya kasalliklarni davolash va oldini olish, sog'liqni saqlash va hayot sifatini 
            yaxshilashga qaratilgan dori vositalari (DV) va tabiiy vitamin-mineral komplekslarni 
            ishlab chiqarish va sotishga ixtisoslashgan. Bizning imkoniyatlarimiz bizga va hamkorlarimizga 
            doimiy ravishda o'z mavqeini va xizmatini yaxshilashga imkon beradi.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          id='card'
          transition={{ duration: 1 }}
        >
          <img src={uy} alt="" className=''/>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutCreate;
