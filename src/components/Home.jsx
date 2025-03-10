const Home = () => {
    return (
        <section className="w-full flex flex-col justify-start items-center h-80 sm:h-auto lg:h-auto lg:justify-evenly">
            <h1 className="text-yellow-300 text-center w-full font-extrabold text-5xl mt-5 sm:text-8xl lg:text-9xl lg:mt-0 xl:text-[15rem]">
                ¿NO SABES QUE HACER EN MEDELLÍN?
            </h1>
            <button className="text-white bg-[#0080B9]/50 w-80 rounded-2xl text-xl cursor-pointer h-15 hover:bg-[#0080B9]/30 transition-all duration-900 sm:h-20 sm:w-120 sm:text-3xl font-black cursor-pointer mt-10 lg:text-4xl lg:w-150 lg:mt-30 lg:h-30 xl:text-[4rem] xl:w-260 xl:h-50">
            CONOCE LOS PLANES AQUÍ
        </button>
        </section>
    )
}

export default Home;

