import Encabezado from './components/layouts/encabezado/Encabezado';
import ComunaTrece from "./components/ComunaTrece";
import GraffitiTour from "./components/GraffitiTour";
import HaciendaNapoles from "./components/HaciendaNapoles";
import Home from "./components/Home";
import ReservaAhora from "./components/ReservaAhora";
import SantaFeAntioquia from "./components/SantaFeAntioquia";
import TourGuatape from "./components/TourGuatape";
import SliderInicio from "./components/SliderInicio";
import PiedraLayout from './components/layouts/PiedraLayout';
import PieDePagina from './components/layouts/PieDePagina';
import FormularioContacto from "./components/FormularioContacto";
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
const PlanesMedellin = () => {
    
    useEffect(() => {
        ReactGA.initialize('G-LLH38EKM41', {debug: true}); 
        ReactGA.send({hitType: 'pageview', page: window.location.pathname});
    }, []);
    

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
