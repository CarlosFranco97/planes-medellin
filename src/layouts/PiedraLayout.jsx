const PiedraLayout = ({children}) => {
    return (
        <section className="bg-[url(../src/assets/piedra-del-peñol.png)] bg-cover bg-no-repeat min-h-screen max-w-full">
            {children}
        </section>
    )
}

export default PiedraLayout;