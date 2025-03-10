const BotonHamburguesa = ({ alternarMenu, menuAbierto }) => {
    return (
        <div
            className={`flex flex-col justify-evenly items-center mr-4 w-15 h-15 xl:h-25 xl:w-30 cursor-pointer z-10`}
            onClick={alternarMenu}
            >
            <span className={`w-[50px] lg:w-[60px] xl:w-[85px] h-[5px] lg:h-[7px] xl:h-[10px] rounded border-gray-400 transition-transform duration-600 ease-in-out ${!menuAbierto ? "bg-white rotate-0 translate-y-0" : "bg-black rotate-45 translate-y-[300%] md:translate-y-[210%] xl:translate-y-[260%]"}`}>

            </span>
            <span className={` w-[50px] lg:w-[60px] xl:w-[85px] h-[5px] lg:h-[7px] xl:h-[10px] rounded border-gray-400 transition-opacity duration-600 ease-in-out
            ${!menuAbierto ? "bg-white" : "bg-black opacity-0 transition-opacity duration-400"}`}>

            </span>
            <span className={` w-[50px] lg:w-[60px] xl:w-[85px] h-[5px] lg:h-[7px] xl:h-[10px] rounded border-gray-400 transition-transform duration-600 ease-in-out
            ${!menuAbierto ? "bg-white" : "bg-black -rotate-45 -translate-y-[330%] md:-translate-y-[280%] xl:-translate-y-[260%] 2xl:-translate-y-[290%]"}`}>

            </span>
        </div>
     )
}

export default BotonHamburguesa;