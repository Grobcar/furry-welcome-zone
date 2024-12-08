import { Star, Heart, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const keyPoints = [
  {
    title: "Especialistas en Mascotas Exóticas",
    description: "Cuidado experto para todo tipo de animales exóticos",
    icon: Star,
  },
  {
    title: "Mejor Calidad de Atención",
    description: "Tratamiento compasivo y profesional para cada mascota",
    icon: Heart,
  },
  {
    title: "Disponibilidad 24/7",
    description: "Servicios veterinarios de emergencia las 24 horas",
    icon: Clock,
  },
  {
    title: "Experiencia Confiable",
    description: "Más de 15 años de excelencia veterinaria",
    icon: Shield,
  },
];

const KeyPoints = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-down">¿Por Qué Elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPoints.map((point, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/50 backdrop-blur-sm animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 animate-fade-in">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;