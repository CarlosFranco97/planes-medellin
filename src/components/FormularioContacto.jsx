import Select from "react-select";
import { estiloPersonalizado } from '../helpers/inputSelectConfigEstilos'

const FormularioContacto = () => {
    const options = [
        { value: "guatape", label: "Guatapé" },
        { value: "graffiti-tour", label: "Graffiti Tour" },
        { value: "hacienda-napoles", label: "Hacienda Nápoles" },
        { value: "santa-fe-antioquia", label: "Santa Fé Antioquia" },
        { value: "comuna-trece", label: "Comuna Trece" },
    ];
    return (
        <section className='min-h-screen w-full flex justify-center items-center bg-white'>

            <div className='min-h-screen w-full flex flex-col justify-between items-center gap-10'>
                <h2 className='w-full h-auto py-8 flex justify-center items-center text-4xl text-white font-black text-center bg-[#0080B9] sm:text-5xl md:text-6xl lg:text-7xl'>
                    ¡Te contactamos!
                </h2>
                <form action="" className='flex flex-col justify-center items-center gap-5 py-10 px-5 rounded-2xl text-xl shadow-[0_15px_30px_rgba(0,0,0,0.30)] font-bold sm:w-[320px] md:w-[360px] lg:w-[450px] lg:text-2xl lg:gap-8'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className=' ml-5'>
                            Tú nombre
                        </label>
                        <input type="text" placeholder="ej. Santiago Álvarez" className='bg-gray-300/30 rounded-2xl py-2 px-4 w-[250px] placeholder:text-[#6B7280]/50 focus:outline-[#0080B9]/30 md:w-[320px]' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='ml-5 '>
                            Tú celular
                        </label>
                        <input type="cel" className='bg-gray-300/30 rounded-2xl py-2 px-4 w-[250px] placeholder:text-[#6B7280]/50 focus:outline-[#0080B9]/30 md:w-[320px]' placeholder='322 4040 5050' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='ml-5 '>
                            Tú correo
                        </label>
                        <input type="email" className='bg-gray-300/30 rounded-2xl py-2 px-4 w-[250px] placeholder:text-[#6B7280]/50 focus:outline-[#0080B9]/30 md:w-[320px]' placeholder='ejemplo@gmail.com' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='ml-5 '>
                            Tour
                        </label>
                        <Select
                            options={options}
                            styles={estiloPersonalizado}
                            placeholder="Selecciona un tour"
                            className="w-[250px] md:w-[320px]"
                        />
                    </div>
                    <button className='bg-[#0080B9] px-4 py-2 rounded-2xl text-white shadow-lg cursor-pointer mt-5 md:text-2xl'>
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    )
}

export default FormularioContacto;