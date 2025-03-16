const GraffitiTour = () => {
    return (
        <section 
            id="graffiti-tour"
            className="bg-[url(../src/assets/graffiti-tour.png)] bg-no-repeat bg-cover bg-center w-full min-h-screen">

            <div className="flex flex-col justify-between  max-w-full min-h-screen">
                
                <h2 className="text-5xl font-extrabold text-white m-5 md:text-7xl lg:text-8xl xl:text-[12rem] xl:m-15 2xl:text-[7rem]">
                    GRAFFITI TOUR
                </h2>

                <h3 className="flex justify-center items-center bg-white text-[#0080B9] font-black text-[2rem] w-full p-5 lg:text-8xl xl:text-[4rem] 2xl:text-[5rem]"> 
                    OFERTA 69.900 COP
                </h3>

            </div>

        </section>
    )
}

export default GraffitiTour;