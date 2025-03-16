import ComunaTrece from "./components/ComunaTrece";
import GraffitiTour from "./components/GraffitiTour";
import HaciendaNapoles from "./components/HaciendaNapoles";
import Encabezado from "./components/Encabezado";
import Home from "./components/Home";
import ReservaAhora from "./components/ReservaAhora";
import SantaFeAntioquia from "./components/SantaFeAntioquia";
import TourGuatape from "./components/TourGuatape";
import Slider from "./components/Slider";
import SliderInicio from "./components/SliderInicio";
import PiedraLayout from "./layouts/PiedraLayout";

const PlanesMedellin = () => {
  return (
    <PiedraLayout>
      <Encabezado />
      <Home />
      <SliderInicio />
      <Slider />
      <ReservaAhora />
      <HaciendaNapoles />
      <SantaFeAntioquia />
      <GraffitiTour />
      <ComunaTrece />
    </PiedraLayout>
  );
};

export default PlanesMedellin;
