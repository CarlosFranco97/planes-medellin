
const BotonReserva = () => {
    const numeroTelefono = "573022764759";
    
    const mensaje = "Hola, me gustaría conocer Medellín con ustedes";

    const codificarMensaje = encodeURIComponent(mensaje);

    const whatsappUrl = `https://wa.me/${numeroTelefono}?text=${codificarMensaje}`;

    return (
    <a 
        href={whatsappUrl}
        target='_blank'
        rel="noopener noreferrer"
        className="
        flex justify-center items-center gap-3 bg-[#29A71A] text-white text-[1rem] py-4 px-10 mb-15 h-auto w-auto rounded-full font-black shadow-2xl cursor-pointer  sm:text-3xl md:text-2xl lg:text-5xl xl:text-4xl 2xl:text-7xl"
    >
        <img 
            className="w-10 lg:h-10 sm:w-15 sm:h-15 lg:w-35 lg:h-35"
            src="/whatsapp.svg" 
            alt="whatsapp" 

        />
        RESERVA AHORA
    </a>

    )
}

export default BotonReserva;