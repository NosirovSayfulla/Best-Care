// import React from 'react'
// import { useTranslation } from 'react-i18next'
// import hamkor1 from '../assets/image.svg'
// import hamkor2 from '../assets/image (1).svg'
// import hamkor3 from '../assets/image (2).svg'
// import hamkor4 from '../assets/image (3).svg'
// import hamkor5 from '../assets/image (4).svg'
// import hamkor6 from '../assets/image (5).svg'

// const hamkor = () => {
//     const {t} = useTranslation()
//   return (
//     <div className='p-20'>
//         <h1 className='font-semibold text-[56px] text-[#031651] text-center'>{t("partner")}</h1>
//         <div className='flex justify-between'>
//             <img src={hamkor1} alt="" />
//             <img src={hamkor2} alt="" />
//             <img src={hamkor3} alt="" />
//             <img src={hamkor4} alt="" />
//             <img src={hamkor5} alt="" />
//             <img src={hamkor6} alt="" />
//         </div>
//         <div className='flex justify-between mt-10'>
//             <img src={hamkor6} alt="" />
//             <img src={hamkor5} alt="" />
//             <img src={hamkor1} alt="" />
//             <img src={hamkor2} alt="" />
//             <img src={hamkor3} alt="" />
//             <img src={hamkor4} alt="" />
//         </div>
//     </div>
//   )
// }

// export default hamkor






import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import hamkor1 from '../assets/image.svg';
import hamkor2 from '../assets/image (1).svg';
import hamkor3 from '../assets/image (2).svg';
import hamkor4 from '../assets/image (3).svg';
import hamkor5 from '../assets/image (4).svg';
import hamkor6 from '../assets/image (5).svg';

const Hamkor = () => {
  const { t } = useTranslation();

  return (
    <section className="p-6 md:p-20">
      <h1 className="font-semibold text-3xl md:text-[56px] text-[#031651] text-center">
        {t("partner")}
      </h1>

      {/* 1-Swiper (Chapdan o‘ngga harakat qiladi) */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
            delay: 0, // 3 soniya, oldingi 2 soniya o‘rniga
            disableOnInteraction: false,
            reverseDirection: false,
        }}
        loop={true}
        speed={3000} // oldingi 1000 o‘rniga 1500 ms (sekinroq, silliqroq)
        spaceBetween={20}
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
            768: { slidesPerView: 3, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 2 },
            1280: { slidesPerView: 5, slidesPerGroup: 2 },
        }}
        className="mt-10 h-[120px] overflow-hidden"
    >
        {/* 6 ta asl slayd + 4 ta takror (kamida 10 ta bo‘lishi uchun) */}
        <SwiperSlide className="flex justify-center">
          <img src={hamkor1} alt="partner-1" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor2} alt="partner-2" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor3} alt="partner-3" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor4} alt="partner-4" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor5} alt="partner-5" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor6} alt="partner-6" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <img src={hamkor1} alt="partner-1" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor2} alt="partner-2" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor3} alt="partner-3" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor4} alt="partner-4" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
      </Swiper>

      {/* 2-Swiper (O‘ngdan chapga harakat qiladi) */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
            delay: 0, // 3 soniya, oldingi 2 soniya o‘rniga
            disableOnInteraction: false,
            reverseDirection: true,
        }}
        loop={true}
        speed={3000} // oldingi 1000 o‘rniga 1500 ms (sekinroq, silliqroq)
        spaceBetween={20}
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
            768: { slidesPerView: 3, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 2 },
            1280: { slidesPerView: 5, slidesPerGroup: 2 },
        }}
        className="mt-2 h-[120px] overflow-hidden"
    >
        {/* 6 ta asl slayd + 4 ta takror */}
        <SwiperSlide className="flex justify-center">
          <img src={hamkor6} alt="partner-6" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor5} alt="partner-5" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor4} alt="partner-4" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor3} alt="partner-3" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor2} alt="partner-2" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor1} alt="partner-1" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <img src={hamkor6} alt="partner-6" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor5} alt="partner-5" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor4} alt="partner-4" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img src={hamkor3} alt="partner-3" className="w-[150px] h-[100px] object-contain" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hamkor;







// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import { useTranslation } from 'react-i18next'

// const Partners = () => {
//   const {t} = useTranslation()
//   return (
//     <>
//     <div>
//       {/* DesktopView */}
//       <div className='container '>
//         <div className="overflow-hidden py-10">
//           <h1 className='text-5xl font-bold mt-20 mb-10 text-center'>{t('partners')}</h1>
//     <div className="swiperDiv">
//         <Swiper
//         modules={[Autoplay]}
//         loop={true}
//         spaceBetween={30}
//         slidesPerView={4} // Har doim 4 ta ko‘rinsin
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//         }}
//         speed={3000} // Sekin va silliq aylanish uchun
//         grabCursor={false}
//         allowTouchMove={false} // Foydalanuvchi siljitmasin
//       >
//         {[...Array(20)].map((_, i) => (
//           <SwiperSlide key={i}>
//             <div className="w-full h-20 border-1 rounded-full flex items-center justify-center text-xl font-bold">
//               Logo {i + 1}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//        <Swiper
//         modules={[Autoplay]}
//         loop={true}
//         spaceBetween={30}
//         slidesPerView={4} // Har doim 4 ta ko‘rinsin
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//           reverseDirection:true
//         }}
//         speed={3000} // Sekin va silliq aylanish uchun
//         grabCursor={false}
//         allowTouchMove={false} 
//         className='mt-10'// Foydalanuvchi siljitmasin
//       >
//         {[...Array(20)].map((_, i) => (
//            <SwiperSlide key={i}>
//             <div className="w-full h-20 border-1 rounded-full flex items-center justify-center text-xl font-bold">
//               Logo {i + 1}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//     </div>
//       </div>
//       {/* MobileView */}
//     </div>
//     </>
//   )
// }

// export default Partners
