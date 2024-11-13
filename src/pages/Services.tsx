import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Syringe, Microscope, HeartPulse } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Preventive Care",
      description: "Regular check-ups and vaccinations",
      icon: HeartPulse,
    },
    {
      title: "Diagnostics",
      description: "Advanced diagnostic testing",
      icon: Microscope,
    },
    {
      title: "Surgery",
      description: "Routine and complex surgical procedures",
      icon: Syringe,
    },
    {
      title: "Internal Medicine",
      description: "Treatment of various conditions",
      icon: Stethoscope,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;