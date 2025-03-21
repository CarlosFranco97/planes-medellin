import React from "react";
import SliderComunaTrece from "./SliderComunaTrece";

const ComunaTrece = () => {
  return (
    <div
      id="comuna-trece"
      className="bg-[url(../src/assets/comuna-trece.webp)] bg-no-repeat bg-cover bg-center min-h-screen w-full"
    >
      <div className="flex flex-col justify-between max-w-full min-h-screen">
        <h2 className="text-5xl font-extrabold text-white m-5 md:text-7xl lg:text-8xl xl:text-[6rem] xl:m-15 2xl:text-[7rem]">
          CITY TOUR & COMUNA 13
        </h2>
        <SliderComunaTrece
        images={[
          "/img/replica-penol.PNG",
          "/img/carro-rojo.PNG",
          "/img/amigas-foto.PNG",
        ]}
        title="COMUNA 13"
        sections={[
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
        ]}
      />
        <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[1.5rem] w-full p-5 lg:text-8xl xl:text-[4rem] 2xl:text-[5rem]">
          OFERTA DESDE 119.900 COP
        </h3>
      </div>
     
    </div>
  );
};

export default ComunaTrece;
