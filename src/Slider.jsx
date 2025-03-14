import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css"

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,  
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <img src="/public/img/sin-tc3adtulo.png" alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/img/Guatape-2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/img/pag.png" alt="Slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="/src/" alt="Slide 4" className="w-full h-full object-cover" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;