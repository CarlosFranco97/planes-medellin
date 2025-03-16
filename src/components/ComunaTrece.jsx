import React from "react";
import Slider from "./Slider";

const ComunaTrece = () => {
  return (
    <Slider
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
  );
};

export default ComunaTrece;
