import whatsapp from '../assets/whatsapp.png'

const ReservaAhora = () => {
    return (
        <section className="min-h-screen w-full flex justify-center lg:h-[1200px] xl:h-[3200px]">
            
            <div className="bg-[url(../src/assets/tour-guatape.png)] bg-no-repeat bg-contain bg-center flex flex-col justify-between items-center min-h-screen w-[80%]">

                <p className="flex justify-center items-center w-full p-5 h-[25%] bg-white text-[#0080B9] text-3xl text-center font-black shadow-2xl sm:text-4xl sm:w-[80%] md:w-[70%] lg:h-60 lg:w-[90%] lg:text-7xl xl:text-9xl xl:h-70 2xl:text-[15rem] 2xl:w-[60%] 2xl:h-[25%]">
                    ¡Te llevamos al plan que más te guste!
                </p>
                <button className="flex justify-around items-center bg-[#29A71A] text-white text-3xl p-5 mb-10 h-15 w-90 rounded-xl font-bold cursor-pointer lg:text-6xl lg:mb-25 lg:rounded-3xl lg:w-[90%] lg:h-25 xl:text-8xl xl:w-[35%] xl:h-60">

                    <span className='2xl:text-[9rem]'>  
                        Reserva
                    </span>
                    <img
                        src={whatsapp}
                        alt="logo-whatsapp"
                        className='lg:w-40 lg:h-40 xl:h-90 xl:w-90'
                    />
                    <span className='2xl:text-[9rem]'>
                        Ahora
                    </span>

                </button>

            </div>

        </section>
    )
}

export default ReservaAhora;