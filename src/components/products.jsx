// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion';
// import { FaArrowRight } from "react-icons/fa6";
// import bg from '../assets/div.banner-back.svg';
// import drug from '../assets/image 5.svg';
// import '../styles/products.css';

// const ProductsEdit = () => {
//   const { t } = useTranslation();

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="products-container"
//     >
      
//       <section className="product-grid">
//         <div className="product-card">
//           <img src={bg} alt="background" className="product-bg" />
//           <div className="product-content">
//             <div className="product-info">
//               <h1>{t("benefron")}</h1>
//               <ul>
//                 <li>{t("bio")}</li>
//                 <li>{t("1")}</li>
//                 <li className="truncate-text">{t("asorat")}</li>
//                 <button className="more-btn">
//                   {t("more")} <FaArrowRight />
//                 </button>
//               </ul>
//             </div>
//             <div className="product-image-wrapper">
//               <img src={drug} alt="drug" className="product-image" />
//             </div>
//           </div>
//         </div>
//         <div className="product-card">
//           <img src={bg} alt="background" className="product-bg" />
//           <div className="product-content">
//             <div className="product-info">
//               <h1>{t("benefron")}</h1>
//               <ul>
//                 <li>{t("bio")}</li>
//                 <li>{t("2")}</li>
//                 <li className="truncate-text">{t("asorat")}</li>
//                 <button className="more-btn">
//                   {t("more")} <FaArrowRight />
//                 </button>
//               </ul>
//             </div>
//             <div className="product-image-wrapper">
//               <img src={drug} alt="drug" className="product-image" />
//             </div>
//           </div>
//         </div>
//         <div className="product-card">
//           <img src={bg} alt="background" className="product-bg" />
//           <div className="product-content">
//             <div className="product-info">
//               <h1>{t("benefron")}</h1>
//               <ul>
//                 <li>{t("bio")}</li>
//                 <li>{t("3")}</li>
//                 <li className="truncate-text">{t("asorat")}</li>
//                 <button className="more-btn">
//                   {t("more")} <FaArrowRight />
//                 </button>
//               </ul>
//             </div>
//             <div className="product-image-wrapper">
//               <img src={drug} alt="drug" className="product-image" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default ProductsEdit;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';

import bg from '../assets/div.banner-back.svg';
import drug from '../assets/image 5.svg';
import '../styles/products.css';

const ProductsEdit = () => {
  const { t } = useTranslation();

  // Kategoriyalarni massivda saqlaymiz
  const categories = [
    t("bio"),
    t("hyg"),
    t("drugs"),
    t("vit"),
    t("cos"),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="products-container"
    >
      <section className='px-20 my-20'>
        <div>
          <h1 className='text-[#031651] text-[56px] font-semibold text-center'>{t("products")}</h1>
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-[#031651] text-[28px] font-semibold'>{t("category")}</h1>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-[60%]"
          >
            {categories.map((category, idx) => (
              <SwiperSlide key={idx} className="flex justify-center">
                <button className="text-[#031651] text-[24px] font-normal whitespace-nowrap rounded-md px-4 py-2 hover:bg-gray-200 transition">
                  {category}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <h1 className='text-[#2F4896] font-normal text-[24px]'>
            <NavLink to="/products">{t("all")}</NavLink>
          </h1>
        </div>
      </section>

      <section className="product-grid">
        {[1, 2, 3].map((num) => (
          <div className="product-card" key={num}>
            <img src={bg} alt="background" className="product-bg" />
            <div className="product-content">
              <div className="product-info">
                <h1>{t("benefron")}</h1>
                <ul>
                  <li>{t("bio")}</li>
                  <li>{t(num.toString())}</li>
                  <li className="truncate-text">{t("asorat")}</li>
                  <button className="more-btn">
                    {t("more")} <FaArrowRight />
                  </button>
                </ul>
              </div>
              <div className="product-image-wrapper">
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
