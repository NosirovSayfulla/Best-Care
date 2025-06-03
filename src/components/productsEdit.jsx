import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import bg from '../assets/div.banner-back.svg'
import { FaArrowRight } from "react-icons/fa6";

import drug from '../assets/image 5.svg'

const ProductsEdit = () => {
  const { t } = useTranslation();

  return (
    <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="container mt-[-40px]"
>
      <section className='product-grid'>
    {[1,2,3].map((item) => (
      <div className="product-card" key={item}>
        <img src={bg} alt="background" className="product-bg" />
        <div className="product-content">
          <div className='product-info'>
            <h1>{t("benefron")}</h1>
            <ul>
              <li>{t("bio")}</li>
              <li>{t("1")}</li>
              <li className="truncate w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
                {t("asorat")}
            </li>

              <button>{t("more")}<FaArrowRight /></button>
            </ul>
          </div>
          <div className='product-image-wrapper'>
            <img src={drug} alt="drug" className="product-image" />
          </div>
        </div>
      </div>
    ))}
  </section>
</motion.div>

  );
};

export default ProductsEdit;




