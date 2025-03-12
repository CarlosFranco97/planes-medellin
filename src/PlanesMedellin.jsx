import ComunaTrece from "./components/ComunaTrece";
import GraffitiTour from "./components/GraffitiTour";
import HaciendaNapoles from "./components/HaciendaNapoles";
import Encabezado from "./components/Encabezado";
import Home from "./components/Home";
import ReservaAhora from "./components/ReservaAhora";
import SantaFeAntioquia from "./components/SantaFeAntioquia";
import TourGuatape from "./components/TourGuatape";

const PlanesMedellin = () => {
    return (
        <div className="bg-[url(../src/assets/piedra-peñol.png)]  bg-contain h-full max-w-full flex flex-col items-center">
            <Encabezado />
            <Home />
            <ReservaAhora />
            <TourGuatape />
            <HaciendaNapoles />
            <SantaFeAntioquia />
            <GraffitiTour />
            <ComunaTrece />
        </div> 
    )
}

export default PlanesMedellin;