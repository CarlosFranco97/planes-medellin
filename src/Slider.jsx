import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



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
          <img src="/img/sin-tc3adtulo.png" alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Guatape-2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/pag.png" alt="Slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="/src/" alt="Slide 4" className="w-full h-full object-cover" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;