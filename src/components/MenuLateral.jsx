import { useEffect } from "react";

const MenuLateral = ({menuAbierto}) => {
    
    return (
            <div className={`flex flex-col justify-around items-center w-full h-screen bg-white opacity-90 text-4xl p-4 font-black text-center absolute top-0 transition-all duration-900 ease-in-out lg:w-[40%] lg:text-3xl 2xl:text-7xl ${(!menuAbierto) ? "translate-x-full invisible opacity-0" : "translate-x-0 visible" }`}>
            <a href="">
                Tour guatapé
            </a>
            <a href="">
                Hacienda Napolés
            </a>
            <a href="">
                Santa fe de Antioquia
            </a>
            <a href="">
                Graffiti tour
            </a>
            <a href="">
                Comuna 13
            </a>
        </div>
    )
}

export default MenuLateral;