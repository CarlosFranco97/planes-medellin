const PiedraLayout = ({children}) => {
    return (
        <section className="bg-[url(../src/assets/piedra-del-peñol.png)] bg-contain bg-no-repeat min-h-screen max-w-full 2xl:bg-cover">
            {children}
        </section>
    )
}

export default PiedraLayout;