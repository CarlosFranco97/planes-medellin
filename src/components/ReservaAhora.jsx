import BotonReserva from "./BotonReserva";

const ReservaAhora = () => {

   

    return (
        <section className="min-h-screen w-full max-w-[1600px] flex justify-center">
            
            <div className="bg-[url(../src/assets/tour-guatape.png)] bg-no-repeat bg-contain bg-center flex flex-col justify-between items-center min-h-screen w-[80%] lg:h-[150vh] xl:h-[350vh] xl:justify-evenly">

                <p className="flex justify-center items-center w-full p-5 h-[25%] bg-white text-[#0080B9] text-3xl text-center font-black shadow-2xl sm:text-4xl sm:w-[80%] md:w-[60%] lg:h-60 lg:w-[90%] lg:text-7xl xl:text-9xl xl:h-auto 2xl:text-[6rem] 2xl:w-[70%] 2xl:h-[10%]">
                    ¡Te llevamos al plan que más te guste!
                </p>
               <BotonReserva />
            </div>

        </section>
    )
}

export default ReservaAhora;