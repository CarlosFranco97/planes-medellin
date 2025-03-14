import ComunaTrece from "./components/ComunaTrece";
import GraffitiTour from "./components/GraffitiTour";
import HaciendaNapoles from "./components/HaciendaNapoles";
import Encabezado from "./components/Encabezado";
import Home from "./components/Home";
import ReservaAhora from "./components/ReservaAhora";
import SantaFeAntioquia from "./components/SantaFeAntioquia";
import TourGuatape from "./components/TourGuatape";
import Slider from "./Slider";
import PiedraLayout from "./layouts/PiedraLayout";

const PlanesMedellin = () => {
    return (
        <PiedraLayout>
            <Encabezado />
            <Home />
            <ReservaAhora />
            <TourGuatape />
            <HaciendaNapoles />
            <SantaFeAntioquia />
            <GraffitiTour />
            <ComunaTrece />
            <Slider />
        </PiedraLayout>
    )
}

export default PlanesMedellin;