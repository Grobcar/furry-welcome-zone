import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Syringe, Microscope, HeartPulse, ShoppingBag, Users, Dog, Rabbit } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { memo } from "react";

const services = [
  {
    title: "Cuidado Preventivo",
    description: "Chequeos regulares y vacunaciones",
    icon: HeartPulse,
    image: "/images/vet.webp",
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
    image: "/images/tratamiento.webp",
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
    description: "Procedimientos quirúrgicos",
    icon: Syringe,
    image: "/images/bienestar.webp",
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
    description: "Productos de calidad",
    icon: ShoppingBag,
    image: "/images/tienda.webp",
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
    description: "Tratamiento de condiciones",
    icon: Stethoscope,
    image: "/images/foto2.webp",
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
    description: "Profesionales cualificados",
    icon: Users,
    image: "/images/mascota.webp",
    details: [
      "Veterinarios especializados",
      "Auxiliares veterinarios",
      "Personal de atención al cliente",
      "Especialistas en comportamiento",
      "Equipo de emergencias"
    ]
  },
  {
    title: "Animales Exóticos",
    description: "Cuidado especializado",
    icon: Rabbit,
    image: "/images/exoticos.webp",
    details: [
      "Atención para aves",
      "Cuidado de reptiles",
      "Pequeños mamíferos",
      "Nutrición específica",
      "Ambiente y hábitat"
    ]
  },
  {
    title: "Bienestar Animal",
    description: "Cuidado integral",
    icon: Dog,
    image: "/images/bienestar.webp",
    details: [
      "Planes nutricionales",
      "Consejos de ejercicio",
      "Evaluación del comportamiento",
      "Programas de bienestar",
      "Seguimiento del desarrollo"
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
      <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/50 backdrop-blur-sm border-primary/10 overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            width="400"
            height="300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <service.icon className="h-8 w-8 mb-2" />
            <h3 className="text-xl font-bold">{service.title}</h3>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-gray-600 mb-4">{service.description}</p>
          <ul className="space-y-2">
            {service.details.map((detail, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-700 animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
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
          <h1 className="text-4xl font-bold text-center animate-fade-down">Nuestros Servicios</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;