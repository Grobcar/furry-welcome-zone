import { Phone } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <div className="bg-red-600 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Phone className="h-4 w-4 animate-pulse" />
        <span className="text-sm font-medium">
          Emergency? Call (555) 123-4567 - Available 24/7
        </span>
      </div>
    </div>
  );
};

export default EmergencyBanner;