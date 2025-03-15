const HaciendaNapoles = () => {
    return (
        <section
            id="hacienda-napoles" 
            className="bg-[url(../src/assets/avion-napoles.png)] bg-no-repeat bg-center bg-cover w-full min-h-screen">

            <div className="flex flex-col justify-between w-full min-h-screen">

                <h2 className="text-5xl font-black text-white m-5 md:text-7xl lg:text-8xl xl:text-[10rem] xl:m-15 2xl:text-[7rem]">
                    HACIENDA NAPOLÉS
                </h2>

             

                <h3 className="flex items-center bg-white text-[#0080B9] font-black text-[1.5rem] w-full p-5 lg:text-8xl xl:text-[6rem] 2xl:text-[7rem]"> 
                    OFERTA DESDE 249.900 COP
                </h3>

            </div>

        </section>
    )
}

export default HaciendaNapoles;