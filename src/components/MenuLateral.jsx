const MenuLateral = ({menuAbierto}) => {
    console.log(menuAbierto)
    return (
            <div className={`w-full lg:w-[40%] h-screen bg-white flex flex-col justify-around items-center opacity-90 text-4xl font-black text-center absolute top-0 transition-transform duration-900 ease-in-out ${(!menuAbierto) ? "translate-x-200" : "-transalate-x-full" }`}>
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