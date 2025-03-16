import { useEffect } from "react";
import { Link } from "react-scroll";

const MenuLateral = ({menuAbierto, alternarMenu}) => {

    useEffect(() => {
        (menuAbierto) ? document.body.classList.add('overflow-hidden') 
        : document.body.classList.remove('overflow-hidden');
    }, [menuAbierto])
    

    return (
            <nav className={`flex flex-col justify-around items-center w-full h-screen bg-white opacity-90 text-3xl p-6 font-black text-center fixed top-0 right-0 transition-all duration-900 ease-in-out z-90 lg:text-3xl 2xl:text-4xl 2xl:max-w-[50%] ${(!menuAbierto) 
            ? "translate-x-full invisible opacity-0" 
            : "translate-x-0 visible" }`}>
            <Link
                className="cursor-pointer" 
                to="tour-guatape" 
                smooth={true} 
                duration={900}    
                onClick={alternarMenu}
                >
                Tour guatapé
            </Link>
            <Link
                className="cursor-pointer"
                to="graffiti-tour"
                smooth={true}
                duration={900}
                onClick={alternarMenu}
            >
                Graffiti tour
            </Link>
            <Link
                className="cursor-pointer"
                to="hacienda-napoles" 
                smooth={true} 
                duration={900}  
                onClick={alternarMenu}
            >
                Hacienda Napolés
            </Link>
            <Link
               className="cursor-pointer"
               to="santafe-antioquia" 
               smooth={true} 
               duration={900}  
               onClick={alternarMenu} 
            >
                Santa fe de Antioquia
            </Link>
            <Link  
                className="cursor-pointer"
                to="comuna-trece"
                smooth={true}
                duration={900}
                onClick={alternarMenu}
            >
                Comuna 13
            </Link>
        </nav>
    )
}

export default MenuLateral;