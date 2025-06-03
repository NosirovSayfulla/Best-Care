import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import pinkdrug from '../assets/pinkdrug.jpg';
import bro from '../assets/bro.jpg'
import medicine from '../assets/medicine.jpg'
import drug from '../assets/drrug.jpg'

const images = [pinkdrug, bro, medicine, drug];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="grid grid-cols-3 gap-x-4 my-10 gap-y-10 mb-30 px-20" id="xujjatlar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            id='xujjat'
            className="bg-gray-300 rounded-2xl w-[420px] h-[323px] cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </section>

      {/* Modal - Swiper */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-[80%] max-w-[900px] bg-white p-6 rounded-lg">
            <button
              className="absolute top-2 right-2 bg-gray-800 p-2 rounded-full text-white text-xl cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>

            {/* Swiper */}
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="w-full h-auto">
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt="Certificate" className=" rounded-2xl" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;