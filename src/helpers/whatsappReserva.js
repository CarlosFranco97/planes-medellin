const whatsappReserva = ({tipoTour} = {}) => {
    let whatsappUrl = '';
    const numeroTelefono = '573022764759'; 
    const mensaje = tipoTour && typeof tipoTour === 'string'
        ? `Hola, me gustaría realizar el tour ${tipoTour} con ustedes`
        : 'Hola, me gustaría conocer Medellín con ustedes';

    const codificarMensaje = encodeURIComponent(mensaje);


    whatsappUrl = `https://wa.me/${numeroTelefono}?text=${codificarMensaje}`

    return whatsappUrl;
}

export default whatsappReserva;