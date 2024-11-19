import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors } from "lucide-react";

const groomingServices = [
  {
    service: "Basic Bath & Brush",
    price: "$45",
    description: "Includes shampoo, blow dry, brush out, nail trim, ear cleaning",
  },
  {
    service: "Full Grooming",
    price: "$65",
    description: "Includes bath, haircut, style, nail trim, ear cleaning, anal gland expression",
  },
  {
    service: "Deluxe Spa Package",
    price: "$85",
    description: "Full grooming plus teeth brushing, special shampoo treatment, pawdicure",
  },
  {
    service: "Nail Trim",
    price: "$15",
    description: "Professional nail trimming service",
  }
];

const Grooming = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
          alt="Pet grooming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Professional Pet Grooming
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Scissors className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Our Grooming Services</h2>
          <p className="text-gray-600 mb-8">
            Professional grooming services to keep your pets looking and feeling their best.
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
            Call (555) 123-4567
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Grooming;