import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#4ade80]/10 to-[#4ade80]/5 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cuidando de tus Mascotas como Familia
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Bienvenido a Veterinaria Gaiteira. Ofrecemos servicios veterinarios integrales
              con compasión y experiencia para tus queridas mascotas.
            </p>
            <button className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors">
              <a href="tel:+34981135535" className="flex items-center">
              <Phone className="mr-2 h-5 w-5" /> (34) 981135535
                </a>
            </button>
          </div>
          <div className="flex-1 lg:flex-[1.5]">
            <img
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97"
              alt="Mascota feliz en el veterinario"
              className="rounded-lg shadow-xl w-full max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
