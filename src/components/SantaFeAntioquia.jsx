import React from "react";
import SliderSantaFeAntioquia from "./SliderSantaFeAntioquia";

const SantaFeAntioquia = () => {
  return (
    <div
      id="santafe-antioquia"
      className="bg-[url(../src/assets/puente-santafe.png)] bg-no-repeat bg-cover bg-center min-h-screen w-full"
    >
      <div className="flex flex-col justify-between min-w-full min-h-screen">
        <h2 className="text-5xl font-extrabold text-white m-5 md:text-7xl lg:text-8xl xl:text-[6rem] xl:m-15 2xl:text-[7rem]">
          SANTA FE DE ANTIOQUIA
        </h2>
           <SliderSantaFeAntioquia />
        <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[1.5rem] w-full p-5 lg:text-8xl xl:text-[4rem] 2xl:text-[5rem]">
          OFERTA DESDE 169.900 COP
        </h3>
      </div>
    </div>
  );
};

export default SantaFeAntioquia;
