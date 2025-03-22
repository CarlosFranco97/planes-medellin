import React from "react";
import SliderSecciones from "../shared/SliderSecciones";
import rioLento from '../assets/rio-lento-napoles.webp';
import tigreNapoles from '../assets/tigre-napoles.webp';
import piscinaNapoles from '../assets/piscina-napoles.webp';
import entradaHacienda from '../assets/entrada-hacienda.webp';
const HaciendaNapoles = () => {
  const contenidoSlider = {
    images: [
      rioLento,
      tigreNapoles,
      piscinaNapoles,
      entradaHacienda
    ],
    title: "HACIENDA NÁPOLES",
    sections: [
      {
        title: "INCLUYE",
        items: [
          "Transporte ida y vuelta",
          "Desayuno y almuerzo",
          "Entrada al parque temático",
          "Tarjeta de asistencia médica",
          "Guía acompañante",
          "Transporte en buseta con aire acondicionado",
          "Acceso a todas las atracciones del parque",
        ],
      },
      {
        title: "PASAPORTE AVENTURA",
        items: [
          "Parque de los hipopotamos",
          "Santuario de fauna y flora",
          "Parque jurasico",
          "Museo africano",
          "La gran sabana africana",
          "Pista aerea",
          "Museo memorial",
          "Caballerizas",
          "Biolandia",
          "Parque del conocimiento",
          "Habitat de los felinos",
          "Isla de los monos",
          "Apreciación de Vanessa",
          "Habitat de los suricatos",
          "Acceso al parque acuatico o zona de piscina",
          "Acuasaurus y octopus (Llevar traje de baño)",
        ],
      },
      {
        title: "PASAPORTE SAFARI",
        items: [
          "Incluye todas las atracciones del pasaporte aventura",
          "Río salvaje",
          "Cobras y cataratas victoria",
          "Guía acompañante durante todo el recorrido",
          "Tarjeta asistencia médica (Llevar traje de baño)",
        ],
      },
    ],
  }
  return (
    <div
      id="hacienda-napoles"
      className="bg-[url(../src/assets/hacienda-napoles.webp)] bg-no-repeat bg-center bg-cover w-full min-h-screen"
    >
      <div className="flex flex-col justify-between min-w-full min-h-screen">
        <h2 className="text-5xl font-extrabold text-white m-5 md:text-7xl lg:text-8xl xl:text-[6rem] xl:m-15 2xl:text-[7rem]">
          HACIENDA NÁPOLES
        </h2>
        {/* <SliderHaciendaNapoles /> */}
        <SliderSecciones contenidoSlider={contenidoSlider}/>
        <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[1.5rem] w-full p-5 lg:text-8xl xl:text-[4rem] 2xl:text-[5rem]">
          OFERTA DESDE 249.900 COP
        </h3>
      </div>
    </div>
  );
};

export default HaciendaNapoles;
