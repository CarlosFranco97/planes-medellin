import React from "react";
import SliderSecciones from '../shared/SliderSecciones';
import iglesiaSantaFe from '../assets/iglesia-santafe.webp';
import parqueSantaFe from '../assets/parque-santafe.webp';

const SantaFeAntioquia = () => {
  const contenidoSlider = {
    images: [
      iglesiaSantaFe,
      parqueSantaFe,
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
      className="bg-[url(../src/assets/puente-santafe.webp)] bg-no-repeat bg-cover bg-center min-h-screen w-full"
    >
      <div className="flex flex-col justify-between min-w-full min-h-screen">
        <h2 className="text-5xl font-extrabold text-white m-5 md:text-7xl lg:text-8xl xl:text-[6rem] xl:m-15 2xl:text-[7rem]">
          SANTA FE DE ANTIOQUIA
        </h2>
        <SliderSecciones 
          contenidoSlider={contenidoSlider}
        />
        <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[1.5rem] w-full p-5 lg:text-8xl xl:text-[4rem] 2xl:text-[5rem]">
          OFERTA DESDE 169.900 COP
        </h3>
      </div>
    </div>
  );
};

export default SantaFeAntioquia;
