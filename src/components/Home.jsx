import { Link } from "react-scroll";

const Home = () => {
    return (
        <main className="w-full h-auto flex justify-center items-center xl:h-[220vh] xl:justify-start 2xl:min-h-screen">

            <div className="flex flex-col justify-start items-center gap-20 p-4 max-w-[1600px] h-[65vh] sm:h-[100vh] md:min-h-screen xl:min-h-screen md:justify-center lg:justify-evenly xl:h-full 2xl:justify-center 2xl:gap-50 2xl:h-full">

                <h1 className="text-yellow-300 text-center font-black text-[2.7rem] sm:text-7xl md:text-8xl lg:text-8xl xl:text-[9rem] 2xl:text-[11rem]">
                    ¿NO SABES QUE HACER EN MEDELLÍN?
                </h1>

                <Link 
                    to="reserva-ahora"
                    duration={900}
                    smooth={true}
                    className="bg-[#0076AB]/50 text-white text-[1rem] w-auto max-w-[900px]  p-3 rounded-3xl cursor-pointer font-black hover:bg-white hover:text-[#0076AB] shadow-2xl transition-all duration-1000 sm:text-3xl md:p-5 lg:text-4xl xl:text-[3rem] xl:border-2 xl:p-10 2xl:text-[3rem]">

                    CONOCE LOS PLANES AQUÍ
                    
                </Link>   

            </div>

        </main>
    )
}

export default Home;

