const BotonHamburguesa = ({ alternarMenu, menuAbierto }) => {
    return (

        <div
            className={`relative flex flex-col justify-evenly items-center w-15 h-12 cursor-pointer z-100 xl:h-22 xl:w-30 2xl:w-60 2xl:h-30`}
            onClick={alternarMenu}
        >
            <span className={`absolute top-[6px] w-[50px] lg:w-[60px] h-[5px] lg:h-[7px] xl:h-[10px] xl:top-[8px] rounded border-gray-400 transition-transform duration-600 ease-in-out ${!menuAbierto ? "bg-white rotate-0 translate-y-0" : "bg-black rotate-45 translate-y-4 xl:translate-y-6 2xl:translate-y-10"}`}>

            </span>
            <span className={`absolute top-[22px] rounded w-[50px] h-[5px] lg:h-[7px] lg:w-[60px] xl:h-[10px] xl:top-[28px] 2xl:top-[36px] 2xl:h-[14px] border-gray-400 transition-opacity duration-600 ease-in-out
            ${!menuAbierto ? "bg-white" : "bg-black opacity-0 transition-opacity duration-400"}`}>

            </span>
            <span className={`absolute top-[38px] w-[50px] lg:w-[60px]  h-[5px] lg:h-[7px] xl:h-[10px] xl:top-[48px] 2xl:h-[14px] 2xl:top-[65px] rounded border-gray-400 transition-transform duration-600 ease-in-out
            ${!menuAbierto ? "bg-white" : "bg-black -rotate-45 -translate-y-4"}`}>

            </span>

        </div>

    )
}

export default BotonHamburguesa;