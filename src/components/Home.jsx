const Home = () => {
    return (
        <section className="w-full flex flex-col justify-start items-center h-[400px] sm:h-auto lg:h-[1200px] lg:justify-center">
            <h1 className="text-yellow-300 text-center w-full font-extrabold text-4xl sm:text-8xl lg:text-9xl w-full mt-5 lg:mt-0">
                ¿NO SABES QUE HACER EN MEDELLÍN?
            </h1>
            <button className="text-white bg-[#0080B9]/50 w-100 sm:w-120 lg:w-150 h-15 sm:h-20 lg:h-30 rounded-2xl text-xl sm:text-3xl lg:text-4xl font-black cursor pointer mt-10 lg:mt-30">
            CONOCE LOS PLANES AQUÍ
        </button>
        </section>
    )
}

export default Home;

