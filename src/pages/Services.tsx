import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Syringe, Microscope, HeartPulse, ShoppingBag, Users } from "lucide-react";

const services = [
  {
    title: "Cuidado Preventivo",
    description: "Chequeos regulares y vacunaciones",
    icon: HeartPulse,
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
    title: "Diagnósticos",
    description: "Pruebas diagnósticas avanzadas",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def",
    details: [
      "Rayos X digitales",
      "Análisis de laboratorio",
      "Exámenes de ultrasonido",
      "Análisis de sangre",
      "Análisis de orina y heces"
    ]
  },
  {
    title: "Cirugía",
    description: "Procedimientos quirúrgicos rutinarios y complejos",
    icon: Syringe,
    image: "https://images.unsplash.com/photo-1537615195240-e0f13b1c4087",
    details: [
      "Esterilización y castración",
      "Cirugía de tejidos blandos",
      "Procedimientos dentales",
      "Extirpación de masas",
      "Cirugía de emergencia"
    ]
  },
  {
    title: "Tienda de Mascotas",
    description: "Productos de calidad para tu mascota",
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
    title: "Medicina Interna",
    description: "Tratamiento de diversas condiciones",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
    details: [
      "Manejo de enfermedades crónicas",
      "Trastornos endocrinos",
      "Problemas gastrointestinales",
      "Condiciones respiratorias",
      "Cuidado cardiovascular"
    ]
  },
  {
    title: "Equipo Humano",
    description: "Nuestro equipo de profesionales altamente cualificados",
    icon: Users,
    image: "https://images.unsplash.com/photo-1587764379873-97837921fd44",
    details: [
      "Veterinarios especializados",
      "Auxiliares veterinarios",
      "Personal de atención al cliente",
      "Especialistas en comportamiento",
      "Equipo de emergencias"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-transparent">
      <div className="relative h-[300px] bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="h-12 w-12 text-primary" />
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm">{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;