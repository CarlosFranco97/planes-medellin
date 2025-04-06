import { Helmet } from "react-helmet";

const PiedraLayout = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>Planes para hacer en Medellín | Tours y Experiencias </title>
                <meta name="description" content="Descubre los mejores tours en Medellín. Vive experiencias únicas como Guatapé, Comuna 13, Hacienda Napolés y más ¡Reserva Ahora!" />
                <meta name="keywords" content="Planes en Medellín, tours Medellín, viajes Medellín, turismo Medellín, cosas para hacer en medellín" />
                <meta name="author" content="Planes para hacer en Medellín" />

                <meta property="og:title" content="Planes para hacer en Medellín | Tours y Experiencias" />
                <meta property="og:description" content="Descubre los mejores tours en Medellín. Vive experiencias únicas como Guatapé, Comuna 13, Hacienda Napolés y más ¡Reserva Ahora!" />
                <meta property="og:image" content="https://planesparahacerenmedellin.com/img/piedra-del-peñol.webp" />
                <meta property="og:url" content="https://planesparahacerenmedellin.com" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Planes para hacer en Medellín | Tours y Experiencias" />
                <meta name="twitter:description" content="Descubre los mejores tours en Medellín. Vive experiencias únicas como Guatapé, Comuna 13, Hacienda Napolés y más ¡Reserva Ahora!" />
                <meta name="twitter:image" content="https://planesparahacerenmedellin.com/img/piedra-del-peñol.webp" />

            </Helmet>
            <section className="bg-[url(/img/piedra-del-peñol.webp)] bg-contain bg-no-repeat min-h-screen max-w-full xl:bg-cover 2xl:bg-cover">
                {children}
            </section>
        </>
    )
}

export default PiedraLayout;