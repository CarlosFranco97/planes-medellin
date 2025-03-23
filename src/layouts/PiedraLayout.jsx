const PiedraLayout = ({children}) => {
    return (
        <section className="bg-[url(/img/piedra-del-peñol.webp)] bg-contain bg-no-repeat min-h-screen max-w-full xl:bg-cover 2xl:bg-cover">
            {children}
        </section>
    )
}

export default PiedraLayout;