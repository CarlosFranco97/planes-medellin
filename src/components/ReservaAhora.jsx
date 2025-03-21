import BotonReserva from "../common/BotonReserva";
import videoTour from '../assets/video-tour.mp4';

const ReservaAhora = () => {

   

    return (
        <section 
            id="reserva-ahora"
            className="min-h-screen w-full flex justify-center bg-white">
            
            <div className="h-full w-full max-w-[1600px] flex flex-col justify-center items-center mt-5 gap-25">

                <video src={videoTour}
                    controls
                    autoPlay
                    loop
                    muted
                    className="rounded-3xl lg:h-[800px] lg:w-[800px]"
                ></video>

                <div className="flex flex-col justify-center items-center gap-15 mb-15">
                    <h2 className="text-4xl text-center font-black lg:text-6xl text-[#0076AB]">  
                        ¿QUE ESPERAS PARA VIVIR ESTA EXPERIENCIA?
                    </h2>
                    
                    <BotonReserva />

                </div>

            </div>

        </section>
    )
}

export default ReservaAhora;