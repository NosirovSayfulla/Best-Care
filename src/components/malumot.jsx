import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Malumot = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='py-4 px-4 md:px-20 flex  md:flex-row justify-between items-center gap-3 md:gap-4 bg-gray-100 text-center md:text-left'
    >
      {/* Location */}
      <p className='text-sm text-[#56778F] flex items-center gap-2'>
        <FaMapMarkerAlt className='text-blue-600' />
        <span className='hidden md:inline'>{t("location")}</span>
      </p>

      {/* Contact */}
      <p className='text-sm text-[#56778F] flex items-center gap-2'>
        <LuPhoneCall className='text-blue-600' />
        <span className='hidden md:inline'>{t("contact")}: +99893 590-58-07</span>
      </p>
    </motion.div>
  );
};

export default Malumot;
