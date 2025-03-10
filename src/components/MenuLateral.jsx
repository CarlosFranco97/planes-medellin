const MenuLateral = ({menuAbierto}) => {
    console.log(menuAbierto)
    return (
            <div className={`flex flex-col justify-around items-center w-full h-screen bg-white opacity-90 text-4xl font-black text-center absolute top-0 sm:text-3xl lg:w-[40%] xl:text-7xl transition-transform duration-900 ease-in-out   ${(!menuAbierto) ? "hidden" : "block" }`}>
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