const BotonHamburguesa = ({alternarMenu}) => {
    return (
        <div className=" flex flex-col justify-evenly items-end lg:gap-2 px-2 w-[20%] h-[50px] cursor-pointer z-10" onClick={alternarMenu}>
           <span className="w-[50px] lg:w-[60px] xl:w-[70px] h-[5px] lg:h-[7px] xl:h-[8px] bg-white border-gray-400 rounded"></span>
            <span className="w-[50px] lg:w-[60px] xl:w-[70px] h-[5px] lg:h-[7px] xl:h-[8px] bg-white border-gray-400 rounded"></span>
            <span className="w-[50px] lg:w-[60px] xl:w-[70px] h-[5px] lg:h-[7px] xl:h-[8px] bg-white border-gray-400 rounded"></span>
        </div>
    )
}

export default BotonHamburguesa;