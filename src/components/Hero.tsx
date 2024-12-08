import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 animate-fade-in"
        style={{
          backgroundImage: "url('/images/mascota.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white animate-fade-down">
            Cuidando de tus Mascotas como Familia
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-white/90 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Bienvenido a Veterinaria Gaiteira. Ofrecemos servicios veterinarios integrales
            con compasión y experiencia para tus queridas mascotas.
          </p>
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "400ms" }}>
            <button className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="tel:+34981135535" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Llámanos
              </a>
            </button>
          </div>

          <div className="flex justify-center mt-16 animate-bounce">
            <a href="#Who" className="text-white transition-transform duration-300 hover:translate-y-1">
              <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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