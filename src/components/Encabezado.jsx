import { useState } from "react";
import BotonHamburguesa from "./BotonHamburguesa";
import MenuLateral from "./MenuLateral";

const Encabezado = () => {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const alternarMenu = () => {
        setMenuAbierto((prevState) => !prevState);
    }
    
    return (
        <header className='flex justify-end items-center w-full h-auto'>
            <h2 className="flex justify-center h-full text-4xl text-white font-bold xl:text-6xl"> 
                Tours
            </h2>
            <BotonHamburguesa alternarMenu={alternarMenu} menuAbierto={menuAbierto}/>
            <MenuLateral alternarMenu={alternarMenu} menuAbierto={menuAbierto} />
        </header>
    )
}

export default Encabezado;
