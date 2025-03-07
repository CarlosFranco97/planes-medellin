import whatsapp from '../assets/whatsapp.png'
const Home = () => {
    return (
        <section className="bg-[url(../src/assets/tour-guatape.png)] h-[800px] w-full bg-no-repeat bg-cover flex flex-col justify-around items-center">
                <button className="text-white bg-[#0080B9]/70 w-80 h-15 rounded-2xl text-xl font-bold cursor pointer">
                    CONOCE LOS PLANES AQUÍ
                </button>
                <div className="bg-black/60 flex justify-center items-center w-full h-30 p-6"> 
                    <p className="text-white text-2xl">Te llevamos al plan que más te guste</p>
                </div>
                <div> 
                    <button className="flex justify-around items-center bg-[#29A71A] text-white p-2 h-15 w-80 rounded-xl font-bold text-2xl ">
                        <span> Reserva </span>
                        <img src={whatsapp} alt="logo-whatsapp"/>
                        <span className='mr-3'>Ahora</span>
                    </button>
                </div>
        </section>
    )
}

export default Home;