import { useTranslation } from 'react-i18next';
import React from 'react';
import drug from '../assets/Frame 13.svg';
import logo from '../assets/bc.jpg';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="p-5 md:p-10 lg:p-20 flx flex-col block md:hidden sm:text-center">
          {/* Sarlavha animatsiyasi */}
         
    
          {/* Asosiy kontent qismi */}
         <section className="  grid grid-cols-1  mt-10 gap-10" id='bestcare'>
            {/* Chapdagi rasm */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src={drug} alt="" className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]" />
            </motion.div>
    
            {/* O'ngdagi matn va rasm */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full max-w-[600px] text-left"
            >
              <img src={logo} alt="" className="w-full max-w-[250px] mx-auto md:mx-0" />
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
                {t("text")}
              </motion.p><br />
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
                {t("text2")}
              </motion.p><br />
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
                {t("text3")}
              </motion.p><br />
    
              {/* Tugma animatsiyasi */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="font-medium text-[20px] md:text-[22px] lg:text-[24px] bg-[#2F4896] px-[20px] md:px-[30px] text-white rounded-4xl w-[180px] md:w-[200px] lg:w-[204px] h-[50px] md:h-[55px] lg:h-[57px]"
              >
                {t("more")}
              </motion.button>
            </motion.div>
    
               
          </section>
        </section>
  );
};

export default About;
