const HaciendaNapoles = () => {
    return (
        <div className="flex flex-col justify-evenly w-full h-[800px] lg:h-600">
            <div className="bg-[url(../src/assets/hacienda-napoles.png)] h-[400px] lg:h-600 bg-no-repeat bg-cover py-6 relative">
                <h2 className="flex justify-start items-center text-5xl lg:text-8xl font-black text-white px-4">HACIENDA NAPOLÉS</h2>
            </div>
            <div className="bg-[url(../src/assets/avion-napoles.png)] h-[400px] lg:h-600 bg-no-repeat bg-cover">
            </div>
              <h3 className="text-[#0080B9] font-black text-5xl lg:text-8xl bg-white w-full px-5 py-2"> 
                Oferta
              </h3>
        </div>
    )
}

export default HaciendaNapoles;