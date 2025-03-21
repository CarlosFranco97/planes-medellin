const whatsappReserva = () => {
    const numeroTelefono = '573022764759'; 

    const mensaje = 'Hola me gustaria conocer Medellín con ustedes';

    const codificarMensaje = encodeURIComponent(mensaje);

    const whatsappUrl = `https://wa.me/${numeroTelefono}?text=${codificarMensaje}`;

    return whatsappUrl;
}

export default whatsappReserva;