import whatsappReserva from "../helpers/whatsappReserva";

const BotonAgenda = () => {
    
    return (
        <a 
        href={whatsappReserva()}
        target='_blank'
        rel="noopener noreferrer"
        className="absolute bottom bg-[#0076AB]/80 p-5 text-white text-2xl border-[5px] font-black shadow-2xl hover:bg-white hover:text-[#0076AB] transition-colors rounded-full bottom-20 z-50 cursor-pointer 2xl:text-4xl">
            ¡Agenda tu aventura!
        </a>
    )
}

export default BotonAgenda;