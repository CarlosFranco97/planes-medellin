import React from "react";
import SliderSecciones from './shared/SliderSecciones';


const GraffitiTour = () => {
  const contenidoSlider = {
    images: [
      '/img/piedra-del-peñol.webp',
      '/img/replica-penol.webp',
      '/img/bandera-colombia.webp',
    ],
    title: "GRAFFITI TOUR",
    sections: [
      {
        title: "INLCUYE",
        items: [
          "Guía experto en arte urbano",
          "Recorrido por los mejores murales",
          "Historia del arte callejero",
          "Paseo en metro y metro cable",
        ],
      },
    ],
  }
  return (
    <div
      id="graffiti-tour"
      className="bg-[url(../src/assets/graffiti-tour.webp)] bg-no-repeat bg-cover bg-center min-h-screen w-full"
    >
      <div className="flex flex-col justify-between min-w-full min-h-screen">
        <h2 className="text-5xl py-6 font-extrabold text-white m-5 md:text-7xl lg:text-7xl xl:text-8xl">
          GRAFFITI TOUR
        </h2>

        <SliderSecciones contenidoSlider={contenidoSlider} />

        <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[2rem] w-full p-5 sm:text-4xl lg:text-6xl xl:text-7xl">
          OFERTA 69.900 COP
        </h3>
      </div>

    </div>
  );
};

export default GraffitiTour;
