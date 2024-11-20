import { Heart, Stethoscope, ShoppingBag, Dog, Rabbit, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Cuidado Preventivo",
    description: "Chequeos regulares y vacunaciones para mantener a tus mascotas saludables",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
  },
  {
    title: "Tratamiento Médico",
    description: "Diagnóstico y tratamiento experto para diversas condiciones",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def",
  },
  {
    title: "Tienda de Mascotas",
    description: "Productos de calidad para el cuidado de tu mascota",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
  },
  {
    title: "Bienestar Animal",
    description: "Asesoramiento nutricional y consejos de estilo de vida",
    icon: Dog,
    image: "https://images.unsplash.com/photo-1587764379873-97837921fd44",
  },
  {
    title: "Animales Exóticos",
    description: "Cuidado especializado para reptiles, aves y otras mascotas exóticas",
    icon: Rabbit,
    image: "https://images.unsplash.com/photo-1583087253076-6de06c243071",
  },
  {
    title: "Servicio a Domicilio",
    description: "Atención veterinaria profesional en la comodidad de tu hogar",
    icon: Home,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;