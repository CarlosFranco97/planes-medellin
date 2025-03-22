import { useState } from "react";
import BotonHamburguesa from "./BotonHamburguesa";
import MenuLateral from "./MenuLateral";
import { Link } from "react-scroll";
import logoPlanesMedellin from '../assets/pphem.png'

const Encabezado = () => {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const alternarMenu = () => {
        setMenuAbierto((prevState) => !prevState);
    }
    
    return (
        <header className='flex justify-between gap-2 items-center p-5 w-full h-auto'>

            <Link  
                to="conoce-planes"
                smooth={true}
                duration={900}
                className="text-white text-center font-black cursor-pointer text-[0.8rem] xl:text-2xl 2xl:text-4xl 2xl:ml-10">

                <img src={logoPlanesMedellin} className="w-20 h-20 rounded-full shadow-xl xl:w-30 xl:h-30" alt="logo-pphem" />

            </Link>
            <div className="flex justify-center items-center gap-2">
                <h2 className="flex justify-center h-full text-xl text-white font-black xl:text-4xl xl:mb-[22px]"> 
                    TOURS
                </h2>
                <BotonHamburguesa alternarMenu={alternarMenu} menuAbierto={menuAbierto}/>
            </div>

            <MenuLateral alternarMenu={alternarMenu} menuAbierto={menuAbierto} />

        </header>
    )
}

export default Encabezado;
