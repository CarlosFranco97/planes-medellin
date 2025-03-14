const Home = () => {
    return (
        <section className="w-full min-h-screen flex justify-center items-center">

            <div className="flex flex-col justify-around items-center gap-20 p-4 max-w-[1600px] min-h-screen md:justify-center lg:justify-evenly 2xl:justify-center 2xl:gap-50">

                <h1 className="text-yellow-300 text-center font-black text-[2.9rem] sm:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem]">
                    ¿NO SABES QUE HACER EN MEDELLÍN?
                </h1>

                <button className="bg-[#0076AB]/50 text-white w-[90%] max-w-[800px] h-20 rounded-3xl text-2xl cursor-pointer font-black hover:bg-[#0080B9]/30 shadow-2xl transition-all duration-900 sm:h-20 sm:text-3xl lg:text-4xl lg:h-25 xl:text-[4rem]  xl:h-60 2xl:h-55 2xl:text-[3rem]">
                     CONOCE LOS PLANES AQUÍ
                </button>   

            </div>

        </section>
    )
}

export default Home;

