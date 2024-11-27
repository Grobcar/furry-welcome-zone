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
          <div className="flex justify-center">
            <button className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors">
              <a href="tel:+34981135535" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" /> (34) 981135535
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
