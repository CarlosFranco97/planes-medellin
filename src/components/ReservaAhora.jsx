import whatsapp from '../assets/whatsapp.png'

const ReservaAhora = () => {
    return (
        <section className="bg-[url(../src/assets/tour-guatape.png)] h-[800px] w-[90%] bg-no-repeat bg-cover bg-center flex flex-col justify-around items-center">
            <p className="text-white text-4xl font-semibold bg-black/60 flex justify-center items-center w-[111%] h-30 p-20">¡Te llevamos al plan que más te guste!</p>
            <div>
                <button className="flex justify-around items-center bg-[#29A71A] text-white p-2 h-15 w-80 rounded-xl font-bold text-3xl ">
                    <span> Reserva </span>
                    <img src={whatsapp} alt="logo-whatsapp" />
                    <span className='mr-3'>Ahora</span>
                </button>
            </div>
        </section>
    )
}

export default ReservaAhora;