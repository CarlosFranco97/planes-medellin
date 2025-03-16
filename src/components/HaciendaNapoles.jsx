import React from "react";
import SliderHaciendaNapoles from "./SliderHaciendaNapoles";

const HaciendaNapoles = () => {
  return (
    <div
      id="hacienda-napoles"
      className="bg-[url(../src/assets/hacienda-napoles.png)] bg-no-repeat bg-center bg-cover w-full min-h-screen"
    >
      <div className="flex flex-col justify-between min-w-full min-h-screen">
        <h2 className="text-5xl font-extrabold text-white m-5 md:text-7xl lg:text-8xl xl:text-[6rem] xl:m-15 2xl:text-[7rem]">
          HACIENDA NÁPOLES
        </h2>
          <SliderHaciendaNapoles />
        <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[1.5rem] w-full p-5 lg:text-8xl xl:text-[4rem] 2xl:text-[5rem]">
          OFERTA DESDE 249.900 COP
        </h3>
      </div>
    </div>
  );
};

export default HaciendaNapoles;
