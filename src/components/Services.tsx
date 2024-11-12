import { Heart, Stethoscope, Cross, Dog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Preventive Care",
    description: "Regular check-ups and vaccinations to keep your pets healthy",
    icon: Heart,
  },
  {
    title: "Medical Treatment",
    description: "Expert diagnosis and treatment for various conditions",
    icon: Stethoscope,
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency services for urgent medical needs",
    icon: Cross,
  },
  {
    title: "Pet Wellness",
    description: "Nutrition counseling and lifestyle advice for optimal health",
    icon: Dog,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
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