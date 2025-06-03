import React from 'react';
import { useTranslation } from 'react-i18next';
import drug from '../assets/drrug.jpg';
import { GoArrowDownRight } from "react-icons/go";

const News = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='px-4 sm:px-8 md:px-12 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-40'>
        <div className="relative bg-[#F4F5F8] w-full max-w-[420px] h-[609px] mx-auto cursor-pointer overflow-hidden group">
          <img
            src={drug}
            alt=""
            className="w-full h-[323px] rounded-2xl transition-all duration-500 ease-in-out group-hover:translate-y-[-100%]"
          />
          <h1 className="absolute left-0 right-0 font-medium text-[22px] text-[#2F4896] w-[90%] mx-auto p-4 text-center transition-all duration-500 ease-in-out top-[350px] group-hover:top-[100px]">
            {t("newstitle")}
          </h1>
          <p className="absolute top-[100%] left-0 right-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:top-[40%] p-4 text-[#031651] text-[18px]">
            {t("newsdesc")}
          </p>
          <div className="p-4 flex justify-between mt-[200px]">
            <button className="bg-white py-[12px] px-[24px] rounded-[50px] w-[152px] h-[38px] text-center items-center">
              {t("company")}
            </button>
            <button className="bg-[#2F4896] w-[39px] h-[39px] rounded-full text-white text-center">
              <GoArrowDownRight className="text-3xl" />
            </button>
          </div>
        </div>
        <div className="relative bg-[#F4F5F8] w-full max-w-[420px] h-[609px] mx-auto cursor-pointer overflow-hidden group">
          <img
            src={drug}
            alt=""
            className="w-full h-[323px] rounded-2xl transition-all duration-500 ease-in-out group-hover:translate-y-[-100%]"
          />
          <h1 className="absolute left-0 right-0 font-medium text-[22px] text-[#2F4896] w-[90%] mx-auto p-4 text-center transition-all duration-500 ease-in-out top-[350px] group-hover:top-[100px]">
            {t("newstitle")}
          </h1>
          <p className="absolute top-[100%] left-0 right-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:top-[40%] p-4 text-[#031651] text-[18px]">
            {t("newsdesc")}
          </p>
          <div className="p-4 flex justify-between mt-[200px]">
            <button className="bg-white py-[12px] px-[24px] rounded-[50px] w-[152px] h-[38px] text-center items-center">
              {t("company")}
            </button>
            <button className="bg-[#2F4896] w-[39px] h-[39px] rounded-full text-white text-center">
              <GoArrowDownRight className="text-3xl" />
            </button>
          </div>
        </div>
        <div className="relative bg-[#F4F5F8] w-full max-w-[420px] h-[609px] mx-auto cursor-pointer overflow-hidden group">
          <img
            src={drug}
            alt=""
            className="w-full h-[323px] rounded-2xl transition-all duration-500 ease-in-out group-hover:translate-y-[-100%]"
          />
          <h1 className="absolute left-0 right-0 font-medium text-[22px] text-[#2F4896] w-[90%] mx-auto p-4 text-center transition-all duration-500 ease-in-out top-[350px] group-hover:top-[100px]">
            {t("newstitle")}
          </h1>
          <p className="absolute top-[100%] left-0 right-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:top-[40%] p-4 text-[#031651] text-[18px]">
            {t("newsdesc")}
          </p>
          <div className="p-4 flex justify-between mt-[200px]">
            <button className="bg-white py-[12px] px-[24px] rounded-[50px] w-[152px] h-[38px] text-center items-center">
              {t("company")}
            </button>
            <button className="bg-[#2F4896] w-[39px] h-[39px] rounded-full text-white text-center">
              <GoArrowDownRight className="text-3xl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
