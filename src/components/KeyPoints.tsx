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
