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
      <div className="relative z-10 flex items-start h-screen pt-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Cuidando de tus Mascotas como Familia
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Bienvenido a Veterinaria Gaiteira. Ofrecemos servicios veterinarios integrales
            con compasión y experiencia para tus queridas mascotas.
          </p>
          <div className="flex justify-center mb-8">
            <button className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors">
              <a href="tel:+34981135535" className="flex items-center">
                <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.91 19.91 0 0 1 12 21a19.91 19.91 0 0 1-7.82 1.92A2 2 0 0 1 2 19.92v-3a2 2 0 0 1 1.44-1.9c1.73-.45 3.54-.81 5.32-1.22a2 2 0 0 1 2.1.5l1.71 1.71a16 16 0 0 0 7.58-7.58L17.1 9.14a2 2 0 0 1 .5-2.1c.41-1.78.77-3.59 1.22-5.32A2 2 0 0 1 22 2.08z"></path>
                </svg> Llámanos
              </a>
            </button>
          </div>
          {/* "Descúbrenos" text and animated arrow button */}
          <div className="flex flex-col items-center mt-16">
            <p className="text-lg font-semibold mb-2">Descúbrenos</p>
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
