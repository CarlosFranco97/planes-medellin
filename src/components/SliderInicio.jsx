import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import BotonReserva from "./BotonReserva"

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};


const SliderInicio = ({
  images = [
    '/img/amigas-foto.PNG',
    '/img/carro-rojo.PNG',
    '/img/foto-gato.PNG',
    '/img/bandera-colombia.PNG',
    '/img/replica-penol.PNG',
  ],
  autoPlay = true,
  autoPlayInterval = 5000,
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(images.length - 1)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    if (!autoPlay) return

    const slideInterval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(slideInterval)
  }, [currentIndex, autoPlay, autoPlayInterval])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div
      id="conoce-planes"
      className={cn("relative w-full h-screen overflow-hidden rounded-lg p-4 md:p-8", className)}>
      <div className="h-full flex items-center justify-center">
        {images.map((image, index) => {
          const position = (index - currentIndex + images.length) % images.length;
          const isCenter = position === 0;
          let translateX = 0;
          if (position === 0) translateX = 0;
          else if (position === 1 || position === images.length - 1) translateX = position === 1 ? 75 : -75;
          else if (position === 2 || position === images.length - 2) translateX = position === 2 ? 150 : -150;
          else translateX = position > 2 ? 250 : -250;

          return (
            <div
              key={index}
              className={cn(
                "absolute h-[80%] transition-all duration-500 ease-out xl:h-[100%] 2xl:h-[100%]",
                isCenter ? "w-[100%] md:w-[60vw] z-20 scale-110" : "w-[60vw] md:w-[40vw] opacity-70",
              )}
              style={{
                transform: `translateX(${translateX}%) ${isCenter ? "scale(1.1)" : "scale(0.9)"}`,
                zIndex: isCenter ? 10 : 5 - Math.abs(position),
              }}
            >

              <img
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                className={cn(
                  "w-full h-full rounded-lg shadow-lg",
                  image === '/public/img/tour-guatapecopy.png' ? 'object-contain' : 'object-cover'
                )}
              />
            </div>
          );
        })}
        <h2 className="text-4xl w-full absolute top-0 p-8 text-[#0080B9] text-center z-50 font-black bg-white sm:text-5xl">
          Nuestros tours son confiables y seguros
        </h2>
      </div>



      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-30"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              currentIndex === index ? "bg-white" : "bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


    </div>
  )
}

export default SliderInicio;
