import MenuHamburguesa from "./MenuHamburguesa";

const Header = () => {
    return (
        <>
            <header className='w-full p-6 relative'>
                <h1 className='flex justify-center items-center w-full text-yellow-300 font-extrabold text-5xl text-center'>¿NO SABES QUE HACER EN MEDELLÍN?</h1>
                <MenuHamburguesa />
            </header>
        </>
    )
}

export default Header;