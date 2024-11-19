import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Syringe, Microscope, HeartPulse, Cross, Dog } from "lucide-react";

const services = [
  {
    title: "Preventive Care",
    description: "Regular check-ups and vaccinations",
    icon: HeartPulse,
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
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
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