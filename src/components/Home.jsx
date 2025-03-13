const Home = () => {
    return (
        <section className="flex justify-center w-full h-[400px] lg:h-[900px] sm:min-h-screen 2xl:min-h-screen">

            <div className="flex flex-col justify-start gap-20 items-center p-4 max-w-full h-full lg:flex lg:flex-col lg:justify-evenly 2xl:justify-center 2xl:gap-50 2xl:min-h-screen">

                <h1 className="text-yellow-300 text-center max-w-[1600px] font-extrabold text-5xl sm:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem]">
                    ¿NO SABES QUE HACER EN MEDELLÍN?
                </h1>

                <button className="bg-[#0080B9]/50 text-white w-[90%] h-20 rounded-3xl text-2xl cursor-pointer font-black hover:bg-[#0080B9]/30 shadow-2xl transition-all duration-900 sm:h-20 sm:w-[85%] sm:text-3xl md:w-[65%] lg:text-4xl lg:w-[60%] lg:h-25 xl:text-[4rem] xl:w-[80%] xl:h-50 2xl:w-[90%] 2xl:h-55 2xl:text-[5rem]">
                     CONOCE LOS PLANES AQUÍ
                </button>   

            </div>

        </section>
    )
}

export default Home;

