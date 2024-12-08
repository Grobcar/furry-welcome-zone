import React, { useState } from "react";
import { Heart, Stethoscope, ShoppingBag, Dog, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    image: "/images/vet.webp",
    details: [
      "Exámenes anuales de bienestar",
      "Vacunas y refuerzos",
      "Prevención y control de parásitos",
      "Evaluaciones de salud dental",
      "Asesoramiento nutricional",
    ],
  },
  {
    title: "Tratamiento Médico",
    description: "Diagnóstico y tratamiento experto para diversas condiciones",
    icon: Stethoscope,
    image: "/images/tratamiento.webp",
    details: [
      "Diagnóstico y tratamiento de enfermedades",
      "Cirugías y procedimientos",
      "Cuidados postoperatorios",
      "Tratamientos especializados",
      "Monitoreo continuo",
    ],
  },
  {
    title: "Tienda de Mascotas",
    description: "Productos de calidad para el cuidado y diversión de tu mascota",
    icon: ShoppingBag,
    image: "/images/tienda.webp",
    details: [
      "Alimentos premium",
      "Suplementos y vitaminas",
      "Productos de higiene",
      "Juguetes y accesorios",
      "Productos para el cuidado dental",
    ],
  },
  {
    title: "Animales Exóticos",
    description: "Cuidado especializado para reptiles, aves y otras mascotas exóticas",
    icon: Dog,
    image: "/images/exoticos.webp",
    details: [
      "Atención especializada para aves",
      "Cuidado de reptiles",
      "Tratamiento de pequeños mamíferos",
      "Nutrición específica",
      "Ambiente y hábitat",
    ],
  },
];

const ServiceCard = React.memo(({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
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
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Ver detalles
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center text-sm text-gray-700 animate-fade-up" 
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
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
    <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
      <div 
        ref={headerRef}
        className={`text-center mb-12 transform transition-all duration-700 ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold mb-4 animate-fade-down">Nuestros Servicios</h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4 animate-fade-up">
          Ofrecemos una amplia gama de servicios veterinarios profesionales para el cuidado integral de tu mascota
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center animate-fade-up">
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Ver todos nuestros servicios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
