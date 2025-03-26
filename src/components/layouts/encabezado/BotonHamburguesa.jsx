const BotonHamburguesa = ({ alternarMenu, menuAbierto }) => {
    return (

        <div
            className={`relative w-15 h-12 cursor-pointer z-100`}
            onClick={alternarMenu}
        >
            <span className={`absolute top-[6px] w-[50px] h-[5px] rounded border-gray-400 transition-transform duration-600 ease-in-out ${!menuAbierto ? "bg-white rotate-0 translate-y-0" : "bg-black rotate-45 translate-y-4"}`}>

            </span>
            <span className={`absolute top-[22px] rounded w-[50px] h-[5px] border-gray-400 transition-opacity duration-600 ease-in-out
            ${!menuAbierto ? "bg-white" : "bg-black opacity-0 transition-opacity duration-400"}`}>

            </span>
            <span className={`absolute top-[38px] w-[50px] h-[5px] rounded border-gray-400 transition-transform duration-600 ease-in-out
            ${!menuAbierto ? "bg-white" : "bg-black -rotate-45 -translate-y-4"}`}>

            </span>

        </div>

    )
}

export default BotonHamburguesa;