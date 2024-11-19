import { Star, Heart, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const keyPoints = [
  {
    title: "Exotic Pet Specialists",
    description: "Expert care for all types of exotic animals",
    icon: Star,
  },
  {
    title: "Best Care Quality",
    description: "Compassionate and professional treatment for every pet",
    icon: Heart,
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock emergency veterinary services",
    icon: Clock,
  },
  {
    title: "Trusted Experience",
    description: "Over 15 years of veterinary excellence",
    icon: Shield,
  },
];

const KeyPoints = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyPoints.map((point, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;