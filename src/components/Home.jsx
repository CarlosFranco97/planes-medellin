import { Link } from "react-scroll";

const Home = () => {
    return (
        <main className="w-full h-auto flex justify-center items-center lg:h-[140vh] xl:h-[150vh] xl:justify-start 2xl:h-[130vh]">

            <div className="flex flex-col justify-start items-center gap-20 p-4 max-w-[1600px] h-[65vh] sm:h-[100vh] md:min-h-screen xl:h-full xl:justify-start 2xl:gap-50 2xl:h-full">

                <h1 
                style={{"textShadow": "2px 2px 5px rgba(0, 0, 0, 0.9)"}}
                className="text-yellow-300 text-shadow-md text-center font-black text-[2.7rem] text-shadow-2xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-[9rem] 2xl:text-[11rem]">
                    ¿NO SABES QUE HACER EN MEDELLÍN?
                </h1>

                <Link 
                    to="reserva-ahora"
                    duration={900}
                    smooth={true}
                    className="bg-[#0076AB]/50 text-white text-center text-[1.4rem] w-auto max-w-[900px]  p-4 rounded-3xl cursor-pointer font-black hover:bg-white hover:text-[#0076AB] shadow-2xl transition-all duration-1000 sm:text-3xl md:p-5 lg:text-4xl xl:text-[3rem] xl:border-2 xl:p-10 2xl:text-[3rem]">

                    CONOCE LOS PLANES AQUÍ
                    
                </Link>   

            </div>

        </main>
    )
}

export default Home;

