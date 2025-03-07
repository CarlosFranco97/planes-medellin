const MenuHamburguesa = () => {
    return (
        <div className="absolute top-6 right-4 flex flex-col justify-around items-center w-[50px] h-[40px] cursor-pointer">
           <span className="w-[40px] h-[3px] bg-white border-gray-400 rounded"></span>
            <span className="w-[40px] h-[3px] bg-white border-gray-400 rounded"></span>
            <span className="w-[40px] h-[3px] bg-white border-gray-400 rounded"></span>
        </div>
    )
}

export default MenuHamburguesa;