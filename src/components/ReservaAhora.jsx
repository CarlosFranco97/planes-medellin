import ButtonReserva from './ButtonReserva';

const ReservaAhora = () => {

   

    return (
        <section className="min-h-screen w-full flex justify-center lg:h-[1200px] xl:h-[3200px]">
            
            <div className="bg-[url(../src/assets/tour-guatape.png)] bg-no-repeat bg-contain bg-center flex flex-col justify-between items-center min-h-screen w-[80%]">

                <p className="flex justify-center items-center w-full p-5 h-[25%] bg-white text-[#0080B9] text-3xl text-center font-black shadow-2xl sm:text-4xl sm:w-[80%] md:w-[70%] lg:h-60 lg:w-[90%] lg:text-7xl xl:text-9xl xl:h-70 2xl:text-[9rem] 2xl:w-[70%] 2xl:h-[25%]">
                    ¡Te llevamos al plan que más te guste!
                </p>
               <ButtonReserva />
            </div>

        </section>
    )
}

export default ReservaAhora;