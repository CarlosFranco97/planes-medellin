import React from "react";
import SliderGraffitiTour from "./SliderGraffitiTour";

const GraffitiTour = () => {
  return (
    <div
      id="graffiti-tour"
      className="bg-[url(../src/assets/graffiti-tour.png)] bg-no-repeat bg-cover bg-center min-h-screen w-full"
    >
      <div className="flex flex-col justify-between min-w-full min-h-screen">
        <h2 className="text-5xl font-extrabold text-white m-5 md:text-7xl lg:text-8xl xl:text-[5rem] xl:m-15 2xl:text-[6rem]">
          GRAFFITI TOUR
        </h2>
        <SliderGraffitiTour
        images={[
          "/img/replica-penol.PNG",
          "/img/carro-rojo.PNG",
          "/img/amigas-foto.PNG",
        ]}
        title="GRAFFITI TOUR"
        sections={[
          {
            title: "Incluye",
            items: [
              "Guía experto en arte urbano",
              "Recorrido por los mejores murales",
              "Historia del arte callejero",
              "Paseo en metro y metro cable",
            ],
          },
        ]}
      />
        <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[2rem] w-full p-5 lg:text-8xl xl:text-[4rem] 2xl:text-[5rem]">
          OFERTA 69.900 COP
        </h3>
      </div>
     
    </div>
  );
};

export default GraffitiTour;
