import BotonReserva from "./BotonReserva";
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const ReservaAhora = () => {

   

    return (
        <section 
            id="reserva-ahora"
            className="min-h-screen w-full flex justify-center">
            <div className="bg-[url(../src/assets/tour-guatape.png)] bg-no-repeat bg-contain bg-center flex flex-col justify-between items-center min-h-screen w-[80%] max-w-[1800px] lg:mt-80 lg:h-[150vh] xl:h-[350vh] xl:justify-evenly 2xl:justify-around 2xl:h-[240vh] 2xl:mt-90">

                <p className="flex justify-center items-center w-full p-7 h-auto bg-white text-[#0080B9] text-3xl text-center font-black shadow-2xl lg:text-7xl xl:text-9xl 2xl:text-[5rem]">
                    ¡Te llevamos al plan que más te guste!
                </p>

               <BotonReserva />
            </div>

        </section>
    )
}

export default ReservaAhora;