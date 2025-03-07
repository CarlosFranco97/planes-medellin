import HaciendaNapoles from "./components/HaciendaNapoles";
import Header from "./components/Header";
import Home from "./components/Home";
import TourGuatape from "./components/TourGuatape";

const PlanesMedellin = () => {
    return (
        <div className="bg-[url(../src/assets/piedra-peñol.png)] bg-no-repeat bg-contain object-contain">
            <Header />
            <Home />
            <TourGuatape />
            <HaciendaNapoles />
        </div> 
    )
}

export default PlanesMedellin;