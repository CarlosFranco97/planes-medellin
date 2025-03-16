import React from "react";
import Slider from "./Slider";

const SantaFeAntioquia = () => {
  return (
    <Slider
      images={[
        "/img/replica-penol.PNG",
        "/img/carro-rojo.PNG",
        "/img/amigas-foto.PNG",
      ]}
      title="SANTA FE DE ANTIOQUIA"
      sections={[
        {
          title: "Incluye",
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
      ]}
    />
  );
};

export default SantaFeAntioquia;
