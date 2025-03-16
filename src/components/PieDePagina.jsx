import BotonReserva from "./BotonReserva";

const PieDePagina = () => {
    return (
        <footer className="flex flex-col p-4 justify-center items-center w-full h-auto gap-10 bg-white">
            <div className="text-center flex flex-col justify-center items-center gap-2">
                <h2 className="text-3xl font-extrabold lg:text-4xl">Siguenos en nuestras redes sociales</h2>
                <div className="flex justify-center items-center gap-4">
                    <a href="https://www.instagram.com/planesparahacerenmedellin?igsh=MWRzajVtMzBsNWk0" rel="noreferrer" target="_blank">
                        <img src="/icono-instagram.svg" className="h-[55px] w-[55px] lg:h-[70px] lg:w-[70px]" alt="instagram" />
                    </a>
                    <a href="https://www.tiktok.com/@planesenmedellin?_t=ZS-8uiru2ct0Cu&_r=1" rel="noreferrer" target="_blank">
                        <img src="/icono-tiktok.svg" className="lg:h-[60px] lg:w-[60px]" alt="tiktok" />
                    </a>
                </div>
                <h2 className="text-3xl font-extrabold lg:text-4xl">Linea de <span className="text-[#0076AB]">
                    Whatsapp  </span> 
                    </h2>
                <p className="text-2xl lg:text-3xl">+57 302 276 4759</p>
                <BotonReserva />
                <h2 className="text-3xl font-extrabold lg:text-4xl">Correo</h2>
                <p className="text-2xl lg:text-3xl">gruporecreacol@gmail.com</p>
            </div>
            <p className="text-2xl">
                &#169; 2025  - Grupo Recrea
            </p>
        </footer>
    )
}


export default PieDePagina;