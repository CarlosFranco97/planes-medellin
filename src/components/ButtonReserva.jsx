const ButtonReserva = () => {
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
        flex justify-center items-center gap-3 bg-[#29A71A] text-white text-3xl p-5 mb-25 h-20 w-[95%] rounded-xl font-black shadow-2xl cursor-pointer lg:text-6xl lg:mb-25 lg:rounded-full lg:w-[90%] lg:h-25 xl:text-8xl xl:w-[35%] xl:h-60 2xl:w-[80%] 2xl:mb-100"
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

export default ButtonReserva;