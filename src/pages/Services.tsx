import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Syringe, Microscope, HeartPulse, ShoppingBag, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { memo } from "react";

const services = [
  {
    title: "Cuidado Preventivo",
    description: "Chequeos regulares y vacunaciones",
    icon: HeartPulse,
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

const ServiceCard = memo(({ service, index }: { service: typeof services[0], index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 100
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-500 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur-sm border-primary/10">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <service.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {service.details.map((detail, idx) => (
              <li key={idx} className="flex items-center text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                {detail}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const Services = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-transparent">
      <div 
        ref={headerRef}
        className={`relative h-[200px] bg-gradient-to-r from-primary/10 to-primary/5 transform transition-all duration-700 ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Nuestros Servicios</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;