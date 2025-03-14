import ComunaTrece from "./components/ComunaTrece";
import GraffitiTour from "./components/GraffitiTour";
import HaciendaNapoles from "./components/HaciendaNapoles";
import Encabezado from "./components/Encabezado";
import Home from "./components/Home";
import ReservaAhora from "./components/ReservaAhora";
import SantaFeAntioquia from "./components/SantaFeAntioquia";
import TourGuatape from "./components/TourGuatape";
import Slider from "./Slider";
import PieDePagina from "./components/PieDePagina";

const PlanesMedellin = () => {
    return (
        <div className="bg-[url(../src/assets/piedra-del-peñol.png)]  bg-contain h-full max-w-full flex flex-col items-center">
            <Encabezado />
            <Home />
            <ReservaAhora />
            <TourGuatape />
            <HaciendaNapoles />
            <SantaFeAntioquia />
            <GraffitiTour />
            <ComunaTrece />
            <Slider />
            <PieDePagina />
        </div> 
    )
}

export default PlanesMedellin;