import { useState } from "react";
import BotonHamburguesa from "./BotonHamburguesa";
import MenuLateral from "./MenuLateral";

const Header = () => {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const alternarMenu = () => {
        setMenuAbierto((prevState) => !prevState);
    }
    
    return (
        <header className='w-full h-auto flex justify-end items-center h-[40px]
        md:h-[px] lg:h-[60px]'>
            <BotonHamburguesa alternarMenu={alternarMenu} />

            <MenuLateral menuAbierto={menuAbierto} />

        </header>
    )
}

export default Header;
