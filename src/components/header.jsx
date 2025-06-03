
// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import { NavLink } from 'react-router-dom';
// import benefronImage from '../assets/image 5.svg';
// import bg from '../assets/bg.png';
// import '../index.css'

// const slidesData = Array.from({ length: 10 }, () => ({
//   title: "Best Care",
//   descKey: "desc",
//   btnKey: "btn",
// }));

// const Header = () => {
//   const { t } = useTranslation();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prev => (prev + 1) % slidesData.length);
//     }, 5000)
//     return () => clearInterval(interval);
//   }, []);

//   return (
//    <>
//     <div
//       className="relative bg-cover bg-no-repeat bg-center rounded-b-[50px] h-240 px-10 md:px-40 py-20"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col md:flex-row gap-10 justify-between items-center"
//         >
//           {/* Chap taraf matn */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center md:text-left w-full md:w-[694px]"
//           >
//             <h1 className="font-bold text-[64px] md:text-[125px] text-[#2F4896]">
//               {slidesData[currentIndex].title}
//             </h1>
//             <p className="font-light text-[28px] md:text-[54px] mt-4 text-[#031700] leading-snug">
//               {t(slidesData[currentIndex].descKey)}
//             </p>
//             <NavLink to="/products">
//               <button className="py-5 px-8 cursor-pointer rounded-4xl bg-[#2F4896] text-white font-medium text-[20px] md:text-[24px] mt-5">
//                 {t("btn") || 'Mahsulotlar'}
//               </button>
//             </NavLink>
//           </motion.div>

//           {/* O‘ng tarafdagi rasm */}
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="w-full md:w-[500px]"
//           >
//             <img
//               src={benefronImage}
//               alt="Benefron"
//               className="w-full h-auto bg-[#2F4896] p-10 rounded-2xl"
//             />
//           </motion.div>
//         </motion.div>
//       </AnimatePresence>

//       <div className="scroll-indicator">
//         <div className="scroll"></div>
//       </div>
     
//     </div>
//     <img
//     src="src/assets/Subtract.png"
//     alt="Decor"
//     className="relative -bottom-10 sm:-bottom-12   w-full max-w-[1000px] mx-auto"
//     id='whitething'
//   />

//    </>
    
//   );
// };

// export default Header;



import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import benefronImage from '../assets/image 5.svg';
import bg from '../assets/bg.png';
import '../index.css';

const slidesData = Array.from({ length: 10 }, () => ({
  title: "Best Care",
  descKey: "desc",
  btnKey: "btn",
}));

const Header = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="relative bg-cover bg-no-repeat bg-center rounded-b-[50px] h-240 px-10 md:px-40 py-20"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-10 justify-between items-center"
          >
            {/* Chap taraf matn */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left w-full md:w-[694px]"
            >
              <h1 className="font-bold text-[64px] md:text-[125px] text-[#2F4896]">
                {slidesData[currentIndex].title}
              </h1>
              <p className="font-light text-[28px] md:text-[54px] mt-4 text-[#031700] leading-snug">
                {t(slidesData[currentIndex].descKey)}
              </p>
              <NavLink to="/products">
                <button className="py-5 px-8 cursor-pointer rounded-4xl bg-[#2F4896] text-white font-medium text-[20px] md:text-[24px] mt-5">
                  {t("btn") || 'Mahsulotlar'}
                </button>
              </NavLink>
            </motion.div>

            {/* O‘ng tarafdagi rasm */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full md:w-[500px]"
            >
              <img
                src={benefronImage}
                alt="Benefron"
                className="w-full h-auto bg-[#2F4896] p-10 rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="scroll-indicator">
          <div className="scroll"></div>
        </div>

        {/* Whitething Image - Correct Positioning */}
        <img
          src="src/assets/Subtract.png"
          alt="Decor"
          className="absolute bottom-0  left-1/2 transform -translate-x-1/2 w-full "
          id="whitething"
        />
      </div>
    </>
  );
};

export default Header;
