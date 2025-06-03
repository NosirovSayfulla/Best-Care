import React, { useState } from 'react';
import { BiMenuAltLeft } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const SearchEdit = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const dropdownVariants = {
        hidden: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } },
    };

    return (
        <section className="bg-[#EDF4F6] py-[30px] w-full max-w-[1300px] lg:px-10 rounded-[50px] px-20 my-20 mx-auto flex justify-center">
            <div className='flex flex-row flex-wrap items-center justify-between gap-4 relative z-10 w-full'>
                
                {/* Dropdown */}
                <div className="relative z-30">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="min-w-[140px] text-[14px] transition-all duration-300 gap-2 h-[45px] items-center px-4 py-2 cursor-pointer bg-white text-[#184363] font-bold rounded-3xl shadow-lg hover:bg-gray-200 flex hover:scale-105"
                    >
                        <BiMenuAltLeft size={20} /> {t("category")}
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="absolute left-0 mt-[60px] w-56 bg-white border border-gray-300 rounded-md shadow-lg z-40"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={dropdownVariants}
                            >
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200">{t("category1")}</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200">{t("category2")}</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200">{t("category3")}</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200">{t("category4")}</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200">{t("category5")}</li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Search bar */}
                <div className="flex flex-row w-full sm:w-auto flex-1 items-center">
                    <input
                        type="text"
                        placeholder={t("input")}
                        className="bg-white px-4 py-3 rounded-l-3xl w-full text-[14px] transition-all duration-200 focus:ring-2 focus:ring-blue-300"
                    />
                    <button className="px-6 py-3 rounded-r-3xl bg-[#2F4896] text-white hover:bg-[#1f3678] transition duration-200">
                        <IoSearch size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SearchEdit;
