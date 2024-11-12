import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Caring for Your Pets Like Family
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Welcome to Pawsome Care Veterinary Clinic. We provide comprehensive
              veterinary services with compassion and expertise for your beloved pets.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Calendar className="mr-2 h-5 w-5" /> Book Appointment
            </Button>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
              alt="Happy cat at vet"
              className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;