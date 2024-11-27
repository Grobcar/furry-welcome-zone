import { Phone } from "lucide-react";
const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Full-section background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/mascota.webp')",
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex items-center h-screen">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Cuidando de tus Mascotas como Familia
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
            Bienvenido a Veterinaria Gaiteira. Ofrecemos servicios veterinarios integrales
            con compasión y experiencia para tus queridas mascotas.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors">
              <a href="tel:+34981135535" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Llámanos
              </a>
            </button>
          </div>

          {/* Animated arrow button */}
          <div className="flex justify-center mt-8 md:mt-12">
            <a href="#who" className="flex items-center cursor-pointer animate-bounce">
              <svg className="h-16 w-16 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
