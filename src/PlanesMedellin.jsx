import Encabezado from "./layouts/encabezado/Encabezado";
import ComunaTrece from "./components/ComunaTrece";
import GraffitiTour from "./components/GraffitiTour";
import HaciendaNapoles from "./components/HaciendaNapoles";
import Home from "./components/Home";
import ReservaAhora from "./components/ReservaAhora";
import SantaFeAntioquia from "./components/SantaFeAntioquia";
import TourGuatape from "./components/TourGuatape";
import SliderInicio from "./components/SliderInicio";
import PiedraLayout from "./layouts/PiedraLayout";
import PieDePagina from "./components/PieDePagina";
import FormularioContacto from "./components/FormularioContacto";

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
            <FormularioContacto />
            <PieDePagina />
        </PiedraLayout>
    )
}

export default PlanesMedellin;
