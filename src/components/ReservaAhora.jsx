import whatsapp from '../assets/whatsapp.png'

const ReservaAhora = () => {
    return (
        <section className="bg-[url(../src/assets/tour-guatape.png)] h-[800px] sm:h-[1000px] sm:mt-50 lg:h-[1900px] w-[90%] bg-no-repeat bg-cover bg-center flex flex-col justify-between items-center">
            <p className="text-[#0080B9] text-3xl text-center font-black bg-white flex justify-center items-center w-full p-2 h-25 sm:h-35 sm:text-5xl lg:h-45 lg:text-7xl xl:h-35 xl:text-8xl xl:h-50">
                ¡Te llevamos al plan que más te guste!
            </p>
            <button className="flex justify-around items-center bg-[#29A71A] text-white p-2 h-15 w-80 rounded-xl font-bold text-3xl cursor-pointer lg:text-7xl mb-10 lg:mb-25 lg:rounded-3xl lg:w-180 lg:h-25 xl:text-8xl xl:w-220 xl:h-30">
                    <span> Reserva </span>
                    <img src={whatsapp} alt="logo-whatsapp" className='lg:w-40 lg:h-40' />
                    <span className='mr-3'>Ahora</span>
            </button>
        </section>
    )
}

export default ReservaAhora;