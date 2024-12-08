import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const Who = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 200
  });

  return (
    <section id="Who" className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className={`transform transition-all duration-700 ${
            sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-down">
            Quienes Somos
          </h2>
          <Card className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 animate-fade-up">
                En Veterinaria Gaiteira, nos enorgullece ofrecer un servicio veterinario excepcional 
                respaldado por años de experiencia y dedicación. Nuestro equipo de profesionales 
                altamente cualificados combina la última tecnología con un cuidado compasivo para 
                garantizar que cada mascota reciba la atención que merece. Entendemos que sus 
                mascotas son parte de su familia, y nos comprometemos a tratarlas con el mismo 
                amor y respeto.
              </p>
              <div
                ref={imageRef}
                className={`relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-700 ${
                  imageInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <img
                  src="/images/mascota.webp"
                  alt="Equipo veterinario en acción"
                  className="w-full h-64 object-cover sm:h-auto sm:max-h-[300px] hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Who;