import React from "react";
import { Heart, Stethoscope, ShoppingBag, Dog, Rabbit, Users, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Definición de los servicios
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
  // Agrega más servicios según sea necesario
];

const ServiceCard = React.memo(({ service }) => (
  <Collapsible key={service.title}>
    <Card className="hover:shadow-lg transition-shadow">
      <CollapsibleTrigger asChild>
        <button className="w-full text-left flex flex-col">
          <CardHeader className="flex items-center justify-between">
            {/* Ícono y contenido alineados */}
            <div className="flex items-center space-x-4">
              <service.icon className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
            {/* Chevron a la derecha */}
            <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[state=open]:rotate-180" />
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

export default Services;
