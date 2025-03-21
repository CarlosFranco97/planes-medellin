import SliderGuatape from "./SliderGuatape";

const TourGuatape = () => {
    return (
        <section id="tour-guatape" 
            className="bg-[url(../src/assets/represa-guatape.webp)] bg-no-repeat bg-cover bg-center min-h-screen w-full">

            <div className="flex flex-col justify-between gap-5 min-w-full min-h-screen pt-10">

                <h2 className="bg-white w-full h-auto py-6 text-4xl flex justify-center items-center text-[#0080B9] font-black shadow-xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[6rem] 2xl:text-[7rem]">
                    TOUR GUATAPÉ
                </h2>

                    <SliderGuatape />
               
                <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[1.5rem] w-full p-5 sm:text-4xl lg:text-8xl xl:text-[4rem] 2xl:text-[5rem]"> 
                    OFERTA DESDE 119.900 COP
                </h3>

            </div>
        </section>

    )
}

export default TourGuatape;