
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
        flex justify-center items-center gap-3 bg-[#29A71A] text-white text-2xl p-5 mb-25 h-20 w-[95%] rounded-full font-black shadow-2xl cursor-pointer sm:w-[90%] md:w-[60%] md:text-2xl lg:text-5xl lg:w-[90%] lg:h-40 xl:text-6xl xl:w-[90%] xl:h-60 2xl:w-[90%]"
    >
        <img 
            className="w-10 lg:h-10 sm:w-15 sm:h-15 lg:w-35 lg:h-35"
            src="/public/whatsapp.svg" 
            alt="whatsapp" 

        />
        RESERVA AHORA
    </a>

    )
}

export default BotonReserva;