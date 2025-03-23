import SliderSecciones from "../shared/SliderSecciones";
// import piedraPenol from '../assets/piedra-del-peñol.webp';
// import represaGuatape from '../assets/replica-penol.webp';
// import amigasFoto from '../assets/amigas-foto.webp';

const TourGuatape = () => {

    const contenidoSlider = {
        images: [
            '/img/piedra-del-peñol.webp',
            '/img/replica-penol.webp',
            '/img/bandera-colombia.webp',
        ],
        title: "GUATAPE",
        sections: [
            {
                title: "INCLUYE",
                items: [
                    "Transporte ida y vuelta",
                    "Desayuno y almuerzo tipico",
                    "Tarjeta de asistencia medica",
                    "Tour en barco rumbero",
                    "Guia Turistico Bilingue",
                    "Transporte en comoda buseta",
                ],
            },
            {
                title: "RECORRIDO",
                items: [
                    "Alto del chocho",
                    "Replica Viejo Peñol",
                    "Tour en Bote Por La Represa",
                    "Parque de Guatape",
                    "La calle de los recuerdos",
                    "La calle de las sombrillas",
                    "Piedra del peñol",
                ],
            }
        ],
    }
    return (
        <section id="tour-guatape"
            className="bg-[url(../src/assets/represa-guatape.webp)] bg-no-repeat bg-cover bg-center min-h-screen w-full">

            <div className="flex flex-col justify-between gap-5 min-w-full min-h-screen pt-10">

                <h2 className="bg-white w-full h-auto py-6 text-4xl flex justify-center items-center text-[#0080B9] font-black shadow-xl sm:text-5xl lg:text-7xl xl:text-8xl">
                    TOUR GUATAPÉ
                </h2>

                <SliderSecciones contenidoSlider={contenidoSlider}/>

                <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[1.5rem] w-full p-5 sm:text-4xl lg:text-6xl xl:text-7xl">
                    OFERTA DESDE 119.900 COP
                </h3>

            </div>
        </section>

    )
}

export default TourGuatape;