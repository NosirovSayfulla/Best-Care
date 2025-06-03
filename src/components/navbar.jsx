// import { useTranslation } from 'react-i18next';
// import logo from '../assets/Layer1006.svg';
// import { NavLink } from 'react-router-dom';
// import Malumot from './malumot';
// import Select from './select'
// import { useState, useEffect } from 'react';

// const Navbar = () => {
//   const { t,  } = useTranslation();
//   const [isFixed, setIsFixed] = useState(false);

//   // const handleLangChange = (e) => {
//   //   i18n.changeLanguage(e.target.value);
//   // };
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 70) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <section>
//       <Malumot />

//       <nav className={`w-full py-9 flex justify-between items-center shadow-md px-20 transition-all duration-500 ${isFixed ? 'fixed top-0 left-0 bg-white z-[60] h-[80px]' : 'relative'}`}>

//         <div className="text-[20px] font-bold">
//           <img src={logo} alt="Logo" className="h-10" />
//         </div>

//         <ul className="flex gap-10">
//           <li className="relative text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
//             <NavLink to="/">{t('home')}</NavLink><div className="relative">

//         </div>

//           </li>
//           <li className="relative text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
//             <NavLink to="/about">{t('about')}</NavLink>
//           </li>
//           <li className="relative text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
//             <NavLink to="/products">{t('products')}</NavLink>
//           </li>
//           <li className="relative text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
//             <NavLink to="/gallery">{t('gallery')}</NavLink>
//           </li>
//           <li className="relative text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
//             <NavLink to="/certificate">{t('certificate')}</NavLink>
//           </li>
//           <li className="relative text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
//             <NavLink to="/news">{t('news')}</NavLink>
//           </li>
//           <li className="relative text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
//             <NavLink to="/contact">{t('contact')}</NavLink>
//           </li>
//         </ul>

//         <Select />
//       </nav>
//     </section>
//   );
// };

// export default Navbar;








// import { useState } from "react";
// import { IoLocationOutline } from "react-icons/io5";
// import { LiaPhoneVolumeSolid } from "react-icons/lia";
// import { FiMenu, FiX } from "react-icons/fi";
// import img from "../assets/Layer1006.svg";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div>
//       <div className="flex justify-between px-38 py-5">
//         <div className="flex items-center gap-2 text-[#56778F]">
//           <IoLocationOutline className="text-xl max-md:ml-[-8.5rem]" />
//           <h1 className="text-[#56778F] max-md:hidden">
//             Toshkent viloyati Bostonliq tumani, Bostonliq Farm, SEZ, Sharq
//             kochasi,
//           </h1>
//         </div>
//         <div className="flex items-center gap-2">
//           <LiaPhoneVolumeSolid className="text-xl text-[#56778F] max-md:ml-[12rem]" />
//           <h1 className="flex items-center gap-2 text-[#56778F] max-md:hidden">
//             Aloqa uchun +99893 590-58-07
//           </h1>
//         </div>
//       </div>

//       <div className="border-t border-gray-300 w-full"></div>

//       <div className="conatiner mx-auto w-[80vw] py-5">
//         <div className="flex items-center justify-between">
//           <img className="max-md:ml-[-1rem]" src={img} alt="" />

//           {/* Hamburger icon (mobile only) */}
//           <button
//             className="md:hidden text-2xl text-[#2F4896]"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FiX /> : <FiMenu />}
//           </button>

//           {/* Desktop menu */}
//           <ul className="hidden md:flex items-center gap-10">
//             <li>
//               <NavLink
//                 to="/"
//                 className="focus:border-t-2 focus:border-[#2F4896] font-semibold focus:text-[#2F4896] py-8"
//               >
//                 Bosh sahifa
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="focus:border-t-2 focus:border-[#2F4896] font-semibold focus:text-[#2F4896] py-8">
//                 Biz haqimizda
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="focus:border-t-2 focus:border-[#2F4896] font-semibold focus:text-[#2F4896] py-8">
//                 Mahsulotlar
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="focus:border-t-2 focus:border-[#2F4896] font-semibold focus:text-[#2F4896] py-8">
//                 Galereya
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="focus:border-t-2 focus:border-[#2F4896] font-semibold focus:text-[#2F4896] py-8">
//                 Blog & yangiliklar
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="focus:border-t-2 focus:border-[#2F4896] font-semibold focus:text-[#2F4896] py-8">
//                 Aloqa
//               </NavLink>
//             </li>
//           </ul>
//         </div>


//         {/* Mobile menu */}
//         {menuOpen && (
//           <ul className="flex flex-col mt-4 gap-4 md:hidden">
//             <li>
//               <NavLink
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="font-semibold text-[#2F4896]"
//               >
//                 Bosh sahifa
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 onClick={() => setMenuOpen(false)}
//                 className="font-semibold text-[#2F4896]"
//               >
//                 Biz haqimizda
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 onClick={() => setMenuOpen(false)}
//                 className="font-semibold text-[#2F4896]"
//               >
//                 Mahsulotlar
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 onClick={() => setMenuOpen(false)}
//                 className="font-semibold text-[#2F4896]"
//               >
//                 Galereya
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 onClick={() => setMenuOpen(false)}
//                 className="font-semibold text-[#2F4896]"
//               >
//                 Blog & yangiliklar
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 onClick={() => setMenuOpen(false)}
//                 className="font-semibold text-[#2F4896]"
//               >
//                 Aloqa
//               </NavLink>
//             </li>
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/Layer1006.svg';
import Malumot from './malumot';
import Select from './select';

const Navbar = () => {
  const { t } = useTranslation();
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 70);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section>
      <Malumot />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full py-4 px-6 md:px-20 flex justify-between items-center shadow-md transition-all duration-500 ${
          isFixed ? 'fixed top-0 left-0 bg-white z-50 h-[80px]' : 'relative'
        }`}
      >
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <motion.li whileHover={{ scale: 1.05 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
            <NavLink to="/">{t("home")}</NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
            <NavLink to="/about">{t("about")}</NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
            <NavLink to="/products">{t("products")}</NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
            <NavLink to="/gallery">{t("gallery")}</NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
            <NavLink to="/certificate">{t("certificate")}</NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
            <NavLink to="/news">{t("news")}</NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
            <a href="#contact">{t("contacts")}</a>
          </motion.li>
        </ul>

        {/* Language Selector */}
        <div className="hidden md:block">
          <Select />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-[#2F4896]">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md px-6"
          >
            <ul className="flex flex-col py-4 gap-4">
              <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
                <NavLink to="/" onClick={() => setMenuOpen(false)}>{t("home")}</NavLink>
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>{t("about")}</NavLink>
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
                <NavLink to="/products" onClick={() => setMenuOpen(false)}>{t("products")}</NavLink>
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
                <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>{t("gallery")}</NavLink>
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
                <NavLink to="/certificate" onClick={() => setMenuOpen(false)}>{t("certificate")}</NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
                <NavLink to="/news">{t("news")}</NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }} className="text-[#031651] hover:text-[#2F4896] font-bold cursor-pointer transition-all duration-300">
                <a href="#contact">{t("contacts")}</a>
              </motion.li>
              <li><Select /></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;

