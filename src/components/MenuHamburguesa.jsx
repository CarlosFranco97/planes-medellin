const MenuHamburguesa = () => {
    return (
        <div className=" top-7 right-0 flex flex-col justify-evenly items-end px-2 w-[15%] h-[50px] cursor-pointer sm:top-20 sm:w-[200px]">
           <span className="w-[100%] h-[5px] bg-white border-gray-400 rounded"></span>
            <span className="w-[100%] h-[5px] bg-white border-gray-400 rounded"></span>
            <span className="w-[100%] h-[5px] bg-white border-gray-400 rounded"></span>
        </div>
    )
}

export default MenuHamburguesa;