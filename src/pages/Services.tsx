import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Syringe, Microscope, HeartPulse, Cross, Dog } from "lucide-react";

const services = [
  {
    title: "Preventive Care",
    description: "Regular check-ups and vaccinations",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
    details: [
      "Annual wellness examinations",
      "Vaccinations and boosters",
      "Parasite prevention and control",
      "Dental health assessments",
      "Nutritional counseling"
    ]
  },
  {
    title: "Diagnostics",
    description: "Advanced diagnostic testing",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def",
    details: [
      "Digital X-rays and imaging",
      "Laboratory testing",
      "Ultrasound examinations",
      "Blood work analysis",
      "Urinalysis and fecal testing"
    ]
  },
  {
    title: "Surgery",
    description: "Routine and complex surgical procedures",
    icon: Syringe,
    image: "https://images.unsplash.com/photo-1612531822963-3873f7dd3cf1",
    details: [
      "Spaying and neutering",
      "Soft tissue surgery",
      "Dental procedures",
      "Mass removals",
      "Emergency surgery"
    ]
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency services",
    icon: Cross,
    image: "https://images.unsplash.com/photo-1583087253076-6de06c243071",
    details: [
      "Immediate medical attention",
      "Critical care monitoring",
      "Emergency surgery",
      "Pain management",
      "Trauma care"
    ]
  },
  {
    title: "Internal Medicine",
    description: "Treatment of various conditions",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
    details: [
      "Chronic disease management",
      "Endocrine disorders",
      "Gastrointestinal issues",
      "Respiratory conditions",
      "Cardiovascular care"
    ]
  },
  {
    title: "Exotic Pet Care",
    description: "Specialized care for exotic pets",
    icon: Dog,
    image: "https://images.unsplash.com/photo-1587764379873-97837921fd44",
    details: [
      "Birds and reptiles",
      "Small mammals",
      "Specialized nutrition",
      "Environmental consulting",
      "Species-specific health care"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-transparent">
      <div className="relative h-[300px] bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="h-12 w-12 text-primary" />
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm">{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;