import MenuHamburguesa from "./MenuHamburguesa";

const Header = () => {
    return (
        <header className='w-full h-auto py-1 px-2 flex justify-end h-[40px]
        md:h-[200px] lg:h-[60px]'>
            <MenuHamburguesa />
        </header>
    )
}

export default Header;
