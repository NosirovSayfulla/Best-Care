// import React, { useState } from 'react';
// import sertifikat from '../assets/certificate.png';

// const Certificates = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <>
//       <section className="grid grid-cols-3 px-4 gap-x-4 my-10 gap-y-10 mb-30 px-20" id="xujjatlar">
//         {[1, 2, 3, 4, 5, 6].map((_, index) => (
//           <img
//             key={index}
//             src={sertifikat}
//             alt=""
//             className="bg-gray-300 rounded-2xl w-[400px] h-[450px] cursor-pointer transition-all duration-300 hover:scale-105"
//             onClick={() => setSelectedImage(sertifikat)}
//           />
//         ))}
//       </section>

//       {/* Modal - Large Image */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="relative">
//             <button
//               className="absolute top-2 right-2 bg-white p-2 rounded-full text-black text-xl cursor-pointer"
//               onClick={() => setSelectedImage(null)}
//             >
//               ✖
//             </button>
//             <img src={selectedImage} alt="Certificate" className="w-[80%] h-auto rounded-2xl" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Certificates;
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import sertifikat from '../assets/certificate.png';

const images = [sertifikat, sertifikat, sertifikat, sertifikat, sertifikat, sertifikat];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="grid grid-cols-3 px-4 gap-x-4 my-10 gap-y-10 mb-30 px-20" id="xujjatlar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="bg-gray-300 rounded-2xl w-[400px] h-[450px] cursor-pointer transition-all duration-300 hover:scale-105"
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
                  <img src={image} alt="Certificate" className="w-full h-auto rounded-2xl" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
