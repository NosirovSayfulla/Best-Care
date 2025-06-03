



import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import about from '../assets/about.jpg';
import '../styles/aboutPhoto.css'; // Custom CSS faylni import qilish

const AboutPhoto = () => {
  const { t } = useTranslation();

  return (
    <section className="about-wrapper">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-border"></div>

        <div className="about-image-wrapper">
          <motion.img
            src={about}
            alt="background"
            className="about-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <motion.div
            className="about-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>

        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t('about')}
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default AboutPhoto;
