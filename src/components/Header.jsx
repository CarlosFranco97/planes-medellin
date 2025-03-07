import MenuHamburguesa from "./MenuHamburguesa";

const Header = () => {
    return (
        <header className='w-full h-[80px] py-6 px-2 flex justify-end sm:h-[280px] md:h-[200px]'>
            <MenuHamburguesa />
        </header>
    )
}

export default Header;
