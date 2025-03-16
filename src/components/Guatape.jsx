import React from "react";
import Slider from "./Slider";

const Guatape = () => {
  return (
    <Slider
      images={[
        "/img/replica-penol.PNG",
        "/img/carro-rojo.PNG",
        "/img/amigas-foto.PNG",
      ]}
      title="GUATAPÉ"
      sections={[
        {
          title: "Incluye",
          items: [
            "Transporte ida y vuelta",
            "Desayuno típico antioqueño",
            "Almuerzo en restaurante local",
            "Tarjeta de asistencia médica",
            "Tour en barco por la represa",
            "Guía turístico bilingüe",
            "Transporte en cómoda buseta",
          ],
        },
        {
          title: "RECORRIDO",
          items: [
            "Piedra del Peñol (entrada opcional)",
            "Réplica del Viejo Peñol",
            "Malecón de Guatapé",
            "Plaza principal",
            "Calle de los Zócalos",
            "Calle de los Recuerdos",
            "Tour en barco por la represa",
            "Tiempo libre para artesanías",
          ],
        },
      ]}
    />
  );
};

export default Guatape;
