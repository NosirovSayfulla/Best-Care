import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import product from '../assets/product.jpg';

const ProductPhoto = () => {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center items-center mx-auto max-w-[1300px] px-4">
      <motion.div
        className="relative flex justify-center items-center w-full sm:w-full md:w-[900px] lg:w-[1296px] h-[300px] mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Outer Border */}
        <div className="absolute inset-0 border-4 border-[#2F4896] rounded-[520px] z-0"></div>

        {/* Inner Content with 20px padding */}
        <div className="relative w-full h-full p-5 rounded-[500px] overflow-hidden flex justify-center items-center z-10">
          {/* Background image */}
          <motion.img
            src={product}
            alt="background"
            className="w-full h-full rounded-[500px] object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />

          {/* Dark overlay */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 rounded-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>

        {/* Text */}
        <motion.h1
          className="absolute font-black text-white text-center uppercase z-20
            text-[32px] sm:text-[40px] md:text-[60px] lg:text-[77px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t('products')}
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default ProductPhoto;
  