import { Heart, Stethoscope, ShoppingBag, Dog, Rabbit, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const services = [
  {
    title: "Cuidado Preventivo",
    description: "Chequeos regulares y vacunaciones para mantener a tus mascotas saludables",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
    details: [
      "Exámenes anuales de bienestar",
      "Vacunas y refuerzos",
      "Prevención y control de parásitos",
      "Evaluaciones de salud dental",
      "Asesoramiento nutricional"
    ]
  },
  {
    title: "Tratamiento Médico",
    description: "Diagnóstico y tratamiento experto para diversas condiciones",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def",
    details: [
      "Diagnóstico y tratamiento de enfermedades",
      "Cirugías y procedimientos",
      "Cuidados postoperatorios",
      "Tratamientos especializados",
      "Monitoreo continuo"
    ]
  },
  {
    title: "Tienda de Mascotas",
    description: "Productos de calidad para el cuidado y diversión de tu mascota",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
    details: [
      "Alimentos premium",
      "Suplementos y vitaminas",
      "Productos de higiene",
      "Juguetes y accesorios",
      "Productos para el cuidado dental"
    ]
  },
  {
    title: "Bienestar Animal",
    description: "Asesoramiento nutricional y consejos de estilo de vida para tu mascota",
    icon: Dog,
    image: "https://images.unsplash.com/photo-1587764379873-97837921fd44",
    details: [
      "Planes nutricionales personalizados",
      "Consejos de ejercicio",
      "Evaluación del comportamiento",
      "Programas de bienestar",
      "Seguimiento del desarrollo"
    ]
  },
  {
    title: "Animales Exóticos",
    description: "Cuidado especializado para reptiles, aves y otras mascotas exóticas",
    icon: Rabbit,
    image: "https://images.unsplash.com/photo-1583087253076-6de06c243071",
    details: [
      "Atención especializada para aves",
      "Cuidado de reptiles",
      "Tratamiento de pequeños mamíferos",
      "Nutrición específica",
      "Ambiente y hábitat"
    ]
  },
  {
    title: "Equipo Humano",
    description: "Nuestro equipo de profesionales altamente cualificados",
    icon: Users,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
    details: [
      "Veterinarios especializados",
      "Auxiliares veterinarios",
      "La mejor atención al cliente",
      "El mejor trato para tu mascota",
      "Equipo de emergencias"
    ]
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Collapsible key={index}>
              <Card className="hover:shadow-lg transition-shadow flex flex-col">
                <CollapsibleTrigger className="w-full text-left">
                  <CardHeader className="flex-1">
                    <div className="flex items-center justify-between">
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="border-t">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="text-sm">{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
