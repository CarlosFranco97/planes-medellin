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
            <BotonHamburguesa alternarMenu={alternarMenu} menuAbierto={menuAbierto}/>

            <MenuLateral alternarMenu={alternarMenu} menuAbierto={menuAbierto} />
        </header>
    )
}

export default Encabezado;
