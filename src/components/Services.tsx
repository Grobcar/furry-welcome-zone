import React from "react";
import { Heart, Stethoscope, ShoppingBag, Dog, Rabbit, Users, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Definición de los servicios con sus detalles
const services = [
  {
    title: "Cuidado Preventivo",
    description: "Chequeos regulares y vacunaciones para mantener a tus mascotas saludables",
    icon: Heart,
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
    details: [
      "Alimentos premium",
      "Suplementos y vitaminas",
      "Productos de higiene",
      "Juguetes y accesorios",
      "Productos para el cuidado dental",
    ],
  },
  {
    title: "Bienestar Animal",
    description: "Asesoramiento nutricional y consejos de estilo de vida para tu mascota",
    icon: Dog,
    details: [
      "Planes nutricionales personalizados",
      "Consejos de ejercicio",
      "Evaluación del comportamiento",
      "Programas de bienestar",
      "Seguimiento del desarrollo",
    ],
  },
  {
    title: "Animales Exóticos",
    description: "Cuidado especializado para reptiles, aves y otras mascotas exóticas",
    icon: Rabbit,
    details: [
      "Atención especializada para aves",
      "Cuidado de reptiles",
      "Tratamiento de pequeños mamíferos",
      "Nutrición específica",
      "Ambiente y hábitat",
    ],
  },
  {
    title: "Equipo Humano",
    description: "Nuestro equipo de profesionales altamente cualificados",
    icon: Users,
    details: [
      "Veterinarios especializados",
      "Auxiliares veterinarios",
      "La mejor atención al cliente",
      "El mejor trato para tu mascota",
      "Equipo de emergencias",
    ],
  },
];

const ServiceCard = React.memo(({ service }) => (
  <Collapsible key={service.title}>
    <Card className="hover:shadow-lg transition-shadow flex flex-col">
      <CollapsibleTrigger asChild>
        <button className="text-left w-full">
          <CardHeader className="flex items-center justify-between">
            {/* Ícono grande y texto centrado verticalmente */}
            <div className="flex items-center space-x-4 w-full">
              <service.icon className="h-16 w-16 text-primary" />
              <div className="flex flex-col flex-1 items-center">
                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                <p className="text-gray-600 text-sm text-center">{service.description}</p>
              </div>
              {/* Flecha en la esquina derecha */}
              <ChevronDown className="h-8 w-8 text-gray-500 transition-transform duration-300 group-[state=open]:rotate-180" />
            </div>
          </CardHeader>
        </button>
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
));

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
