import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors } from "lucide-react";

const groomingServices = [
  {
    service: "Baño y Cepillado Básico",
    price: "45€",
    description: "Incluye champú, secado, cepillado, corte de uñas, limpieza de oídos",
  },
  {
    service: "Peluquería Completa",
    price: "65€",
    description: "Incluye baño, corte de pelo, estilizado, corte de uñas, limpieza de oídos, expresión de glándulas anales",
  },
  {
    service: "Paquete Spa de Lujo",
    price: "85€",
    description: "Peluquería completa más cepillado de dientes, tratamiento especial de champú, pedicura",
  },
  {
    service: "Corte de Uñas",
    price: "15€",
    description: "Servicio profesional de corte de uñas",
  }
];

const Grooming = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7"
          alt="Peluquería de mascotas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Peluquería Profesional de Mascotas
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Scissors className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Nuestros Servicios de Peluquería</h2>
          <p className="text-gray-600 mb-8">
            Servicios profesionales de peluquería para mantener a tus mascotas luciendo y sintiéndose lo mejor posible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {groomingServices.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{item.service}</span>
                  <span className="text-primary font-bold">{item.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="default">
            Llama al (555) 123-4567
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Grooming;