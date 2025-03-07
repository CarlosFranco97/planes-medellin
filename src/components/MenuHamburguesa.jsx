const MenuHamburguesa = () => {
    return (
        <div className=" flex flex-col justify-evenly items-end lg:gap-2 px-2 w-[20%] h-[50px] cursor-pointer">
           <span className="w-[50px] lg:w-[60px] h-[5px] lg:h-[7px] bg-white border-gray-400 rounded"></span>
            <span className="w-[50px] lg:w-[60px] h-[5px] lg:h-[7px] bg-white border-gray-400 rounded"></span>
            <span className="w-[50px] lg:w-[60px] h-[5px] lg:h-[7px] bg-white border-gray-400 rounded"></span>
        </div>
    )
}

export default MenuHamburguesa;