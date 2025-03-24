import React from "react";
import SliderSecciones from './shared/SliderSecciones';



const SantaFeAntioquia = () => {
  const contenidoSlider = {
    images: [
      '/img/iglesia-santafe.webp',
      '/img/parque-santafe.webp',
    ],
    title:  "SANTA FE DE ANTIOQUIA",
    sections: [
      {
        title: "INCLUYE",
        items: [
          "Desayuno y almuerzo",
          "Transporte en cómoda van",
          "Tarjeta de asistencia medica",
          "Visita al Puente de Occidente",
          "Tarde sol en Hostería San Jerónimo",
          "Salida a 8:00 am",
          "Hora de regreso a medellin 4:00 pm",
        ],
      },
    ],
  }
  return (
    <div
      id="santafe-antioquia"
      className="bg-[url(/img/puente-santafe.webp)] bg-no-repeat bg-cover bg-center min-h-screen w-full"
    >
      <div className="flex flex-col justify-between min-w-full min-h-screen">
        <h2 className="text-5xl py-6 font-extrabold text-white m-5 lg:text-7xl xl:text-8xl">
          SANTA FE DE ANTIOQUIA
        </h2>
        <SliderSecciones 
          contenidoSlider={contenidoSlider}
        />
        <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[1.5rem] w-full p-5 sm:text-4xl lg:text-6xl xl:text-7xl">
          OFERTA DESDE 169.900 COP
        </h3>
      </div>
    </div>
  );
};

export default SantaFeAntioquia;
