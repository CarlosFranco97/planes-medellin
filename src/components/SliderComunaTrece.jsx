import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  swiperConfig,
  buttonStyle,
  paginationBulletStyle,
  paginationBulletActiveStyle,
} from "../helpers/SwiperConfig";

const SliderComunaTrece = ({
  images = [
    "/img/replica-penol.PNG",
    "/img/carro-rojo.PNG",
    "/img/amigas-foto.PNG",
  ],
  title = "COMUNA 13",
  sections = [
    {
      title: "Incluye",
      items: [
        "Parques del Rio",
        "Pueblito Paisa",
        "Plaza Botero",
        "Parque de los pies descalzos",
        "Metro y Metro Cable",
        "Garffiti Comuna 13",
        "Museo del café",
        "Escaleras Electricas",
        "Show de Baile",
      ],
    },
    {
      title: "RECORRIDO",
      items: [
        "Guia acompañante",
        "Transporte ida y regreso",
        "Almuerzo",
        "Seguro de viaje",
        "Parque Biblioteca",
      ],
    },
  ],
  infoOnLeft = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleImageLoad = (index) => {
    setLoadedImages([...loadedImages, index]);
  };

  const handleImageError = (index) => {
    console.error(`Error loading image at index ${index}`);
  };

  const Content = () => (
    <section
      className={`
        fixed md:static inset-x-0 bottom-0 z-20 
        md:w-1/2 
        bg-white/95 backdrop-blur-sm
        transition-all duration-500 ease-in-out
        ${isExpanded ? "h-[85vh]" : "h-0 md:h-full"}
        md:h-full
        overflow-hidden
        rounded-t-3xl md:rounded-none
      `}
    >
      <div className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-sm md:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="w-8"></div>
          <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
          <button
            onClick={() => setIsExpanded(false)}
            className="w-8 h-8 flex items-center justify-center text-[#0080B9] hover:text-yellow-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`
          h-full md:h-full
          overflow-y-auto
          scrollbar-thin scrollbar-thumb-[#0080B9] scrollbar-track-gray-200
          scrollbar-thumb-rounded-full scrollbar-track-rounded-full
          ${isExpanded ? "" : "md:overflow-y-auto"}
        `}
      >
        <div
          className={`
            w-full max-w-2xl mx-auto p-4 md:p-6 lg:p-8
            transition-opacity duration-500
            ${isExpanded ? "opacity-100" : "opacity-0 md:opacity-100"}
          `}
        >
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="text-yellow-300 text-center font-extrabold text-3xl md:text-4xl lg:text-5xl drop-shadow-md sticky top-12 md:top-0 bg-white/80 backdrop-blur-sm py-4 rounded-lg">
              {title}
            </h1>

            <div className="grid grid-cols-1 gap-6 md:gap-8 pb-20 md:pb-4">
              {sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="bg-white/80 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h2 className="text-yellow-300 text-center font-extrabold text-2xl md:text-3xl mb-4 md:mb-6 drop-shadow-sm">
                    {section.title}
                  </h2>
                  <ul className="text-[#0080B9] text-base md:text-lg lg:text-xl flex flex-col gap-2 md:gap-3">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-3 before:content-['•'] before:text-yellow-300 before:text-2xl md:before:text-3xl hover:text-yellow-300 transition-all duration-300 hover:translate-x-2"
                      >
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="relative w-full min-h-screen md:h-screen flex flex-col md:flex-row">
      {infoOnLeft && <Content />}
      <div className="w-full h-screen md:h-full md:w-1/2 relative">
        <Swiper
          {...swiperConfig}
          className="mySwiper w-full h-full"
          style={{
            "--swiper-navigation-color": buttonStyle.color,
            "--swiper-pagination-bullet-color":
              paginationBulletStyle.background,
            "--swiper-pagination-bullet-opacity": paginationBulletStyle.opacity,
            "--swiper-pagination-bullet-active-color":
              paginationBulletActiveStyle.background,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={`
                  w-full h-full object-cover
                  transition-opacity duration-300
                  ${loadedImages.includes(index) ? "opacity-100" : "opacity-0"}
                `}
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => setIsExpanded(true)}
          className={`
            absolute bottom-4 left-1/2 -translate-x-1/2 z-10 
            bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg 
            flex items-center gap-2 md:hidden 
            hover:bg-white transition-all duration-300
            ${isExpanded ? "opacity-0" : "opacity-100"}
          `}
        >
          <span className="text-[#0080B9] font-semibold">Ver más</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#0080B9] animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
      {!infoOnLeft && <Content />}
    </div>
  );
};

export default SliderComunaTrece;