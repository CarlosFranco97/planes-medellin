import React from "react";
import SliderSecciones from '../shared/SliderSecciones';
const ComunaTrece = () => {
  const contenidoSlider = {
    images: [
        '',
        '',
        '',
      ],
      title: "COMUNA 13",
      sections: [
        {
          title: "INCLUYE",
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
  }
  return (
    <div
      id="comuna-trece"
      className="bg-[url(../src/assets/comuna-trece.webp)] bg-no-repeat bg-cover bg-center min-h-screen w-full"
    >
      <div className="flex flex-col justify-between max-w-full min-h-screen">
        <h2 className="text-5xl py-6 font-extrabold text-white m-5 md:text-7xl lg:text-7xl xl:text-8xl">
          CITY TOUR & COMUNA 13
        </h2>
        <SliderSecciones contenidoSlider={contenidoSlider}/>
        <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[1.5rem] w-full p-5 sm:text-4xl lg:text-6xl xl:text-7xl">
          OFERTA DESDE 119.900 COP
        </h3>
      </div>
     
    </div>
  );
};

export default ComunaTrece;
