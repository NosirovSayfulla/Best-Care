// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import { motion } from "framer-motion";
// import 'swiper/css';
// import 'swiper/css/autoplay';

// import zinctab from '../assets/zinctab.png';
// import vitabest from '../assets/vitabest.png';
// import selenobest from '../assets/selenobest.png';
// import detribest from '../assets/detribest.png';

// const NewProducts = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="px-4 md:px-20 py-10">
//       <h1 className="font-semibold text-3xl md:text-[56px] text-[#031651] text-center">
//         {t("new")}
//       </h1>

//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{
//           delay: 3000, 
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         loopAdditionalSlides={4}
//         speed={600}
//         spaceBetween={20}
//         slidesPerView={1}
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//           1280: { slidesPerView: 4 },
//         }}
//         className="mt-10"
//       >
//         <SwiperSlide className="flex justify-center">
//           <motion.img
//             src={zinctab}
//             alt="product-0"
//             className="w-[310px] h-[439px] object-contain"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.1 }}
//           />
//         </SwiperSlide>

//         <SwiperSlide className="flex justify-center">
//           <motion.img
//             src={vitabest}
//             alt="product-1"
//             className="w-[310px] h-[439px] object-contain"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.1 }}
//           />
//         </SwiperSlide>

//         <SwiperSlide className="flex justify-center">
//           <motion.img
//             src={selenobest}
//             alt="product-2"
//             className="w-[310px] h-[439px] object-contain"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.1 }}
//           />
//         </SwiperSlide>

//         <SwiperSlide className="flex justify-center">
//           <motion.img
//             src={detribest}
//             alt="product-3"
//             className="w-[310px] h-[439px] object-contain"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.1 }}
//           />
//         </SwiperSlide>
//         <SwiperSlide className="flex justify-center">
//           <motion.img
//             src={selenobest}
//             alt="product-3"
//             className="w-[310px] h-[439px] object-contain"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.1 }}
//           />
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };

// export default NewProducts;



import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/autoplay';

import zinctab from '../assets/zinctab.png';
import vitabest from '../assets/vitabest.png';
import selenobest from '../assets/selenobest.png';
import detribest from '../assets/detribest.png';

import '../styles/newProducts.css'; // Custom CSS

const NewProducts = () => {
  const { t } = useTranslation();

  const images = [zinctab, vitabest, selenobest, detribest, zinctab];

  return (
    <section className="new-products-section">
      <h1 className="section-title">{t("new")}</h1>

      <Swiper
  modules={[Autoplay]}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
  loopAdditionalSlides={5}
  loopFillGroupWithBlank={true}
  speed={600}
  grabCursor={true}
  spaceBetween={20}
  slidesPerView={2}  
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  }}
  className="new-products-swiper"
>

        {images.map((img, index) => (
          <SwiperSlide key={index} className="slide-wrapper">
            <motion.img
              src={img}
              alt={`product-${index}`}
              className="slide-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewProducts;

