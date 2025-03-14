const PiedraLayout = ({children}) => {
    return (
        <section className="bg-[url(../src/assets/piedra-del-peñol.png)] bg-contain object-cover bg-no-repeat min-h-screen max-w-full md:bg-cover lg:bg-cover xl:bg-cover 2xl:bg-cover">
            {children}
        </section>
    )
}

export default PiedraLayout;