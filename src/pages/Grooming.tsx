import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

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
        <div className="max-w-3xl mx-auto text-center">
          <Scissors className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Grooming Services</h2>
          <p className="text-gray-600 mb-8">
            Our professional groomers provide comprehensive grooming services to keep
            your pets looking and feeling their best.
          </p>
          <Button size="lg">Book Appointment</Button>
        </div>
      </div>
    </div>
  );
};

export default Grooming;