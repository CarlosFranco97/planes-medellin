import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { swiperConfig, buttonStyle, paginationBulletStyle, paginationBulletActiveStyle } from '../helpers/SwiperConfig';

const Slider = ({ images = [
  '/public/img/sin-tc3adtulo.png',
  '/public/img/Guatape-2.jpg',
  '/public/img/pag.png'
] }) => {
  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Swiper
        {...swiperConfig}
        className="mySwiper w-full h-full"
        style={{
          '--swiper-navigation-color': buttonStyle.color,
          '--swiper-pagination-bullet-color': paginationBulletStyle.background,
          '--swiper-pagination-bullet-opacity': paginationBulletStyle.opacity,
          '--swiper-pagination-bullet-active-color': paginationBulletActiveStyle.background,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;