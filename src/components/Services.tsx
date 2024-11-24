import React from 'react';
import { Heart, Stethoscope, ShoppingBag, Dog, Rabbit, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Definición de los servicios con sus detalles y optimización de las imágenes
const services = [
  {
    title: "Cuidado Preventivo",
    description: "Chequeos regulares y vacunaciones para mantener a tus mascotas saludables",
    icon: Heart,
    image: "/images/mascota.webp",
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
    image: "/images/tratamiento.webp",
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
    title: "Bienestar Animal",
    description: "Asesoramiento nutricional y consejos de estilo de vida para tu mascota",
    icon: Dog,
    image: "/images/bienestar.webp",
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
    image: "/images/exoticos.webp",
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
    image: "/images/mascota.webp",
    details: [
      "Veterinarios especializados",
      "Auxiliares veterinarios",
      "La mejor atención al cliente",
      "El mejor trato para tu mascota",
      "Equipo de emergencias"
    ]
  },
];

// Componente optimizado con React.memo sin animación de acordeón
const ServiceCard = React.memo(({ service }) => (
  <Card key={service.title} className="hover:shadow-lg transition-shadow flex flex-col">
    <button className="text-left w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <service.icon className="h-12 w-12 text-primary mb-4" />
          <div className="w-16 h-16 rounded-full overflow-hidden">
            {/* Optimización de imágenes usando srcSet y lazy loading */}
            <img
              srcSet={`/images/mascota-small.webp 300w, ${service.image} 800w`}
              sizes="(max-width: 600px) 300px, 800px"
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy" // Lazy loading para optimizar la carga
            />
          </div>
        </div>
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{service.description}</p>
        {/* Mostrar los detalles directamente sin acordeón */}
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
          {service.details.map((detail, idx) => (
            <li key={idx} className="text-sm">{detail}</li>
          ))}
        </ul>
      </CardContent>
    </button>
  </Card>
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
