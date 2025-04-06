import whatsappReserva from "../../helpers/whatsappReserva";
const BotonReservaTour = ({tour}) => {
   
    return (
        <a 
            href={whatsappReserva({tipoTour: tour})}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-[#0076AB] rounded-full py-4 font-black text-white text-center text-[1.2rem] shadow-[0_15px_40px_rgba(0,0,0,0.25)] lg:text-3xl'
            onClick={() => {
                if(typeof window.gtag === 'function'){
                    window.gtag('event', 'click_reserva_whatsapp', {
                        event_category: 'Reservas',
                        event_label: tour || 'Tour sin nombre',
                        value: 1 
                    })
                }
            }}
            >
            RESERVAR ESTE TOUR
        </a>
    )
}

export default BotonReservaTour;