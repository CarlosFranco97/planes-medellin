import ComunaTrece from "./components/ComunaTrece";
import GraffitiTour from "./components/GraffitiTour";
import HaciendaNapoles from "./components/HaciendaNapoles";
import Encabezado from "./components/Encabezado";
import Home from "./components/Home";
import ReservaAhora from "./components/ReservaAhora";
import SantaFeAntioquia from "./components/SantaFeAntioquia";
import TourGuatape from "./components/TourGuatape";
import Slider from "./components/SliderGuatape";
import SliderInicio from "./components/SliderInicio";
import PiedraLayout from "./layouts/PiedraLayout";
import PieDePagina from "./components/PieDePagina";


const PlanesMedellin = () => {
    return (
        <PiedraLayout>
            <Encabezado />
            <Home />
            <SliderInicio />
            <ReservaAhora />
            <TourGuatape />
            <GraffitiTour />
            <HaciendaNapoles />
            <SantaFeAntioquia />
            <ComunaTrece />
            <PieDePagina />
        </PiedraLayout>
    )
}

export default PlanesMedellin;
