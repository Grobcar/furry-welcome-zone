import { Star, Heart, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
              alt="Equipo veterinario en acción"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            En Veterinaria Gaiteira, nos enorgullece ofrecer un servicio veterinario excepcional 
            respaldado por años de experiencia y dedicación. Nuestro equipo de profesionales 
            altamente cualificados combina la última tecnología con un cuidado compasivo para 
            garantizar que cada mascota reciba la atención que merece. Entendemos que sus 
            mascotas son parte de su familia, y nos comprometemos a tratarlas con el mismo 
            amor y respeto.
          </p>
        </div>
        <h2 className="text-3xl font-bold text-center mb-12">¿Por Qué Elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyPoints.map((point, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
    </section>
  );
};

export default KeyPoints;