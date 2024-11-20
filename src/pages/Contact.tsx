import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contacto</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Ubicación</h3>
                    <p className="text-gray-600">
                      123 Calle Principal<br />
                      A Coruña, España
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Horario</h3>
                    <p className="text-gray-600">
                      Lunes - Viernes: 9:00 - 20:00<br />
                      Sábado: 10:00 - 14:00<br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Teléfono</h3>
                    <p className="text-gray-600">
                      +34 981 123 456<br />
                      Emergencias: +34 981 123 457
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-gray-600">
                      info@veterinariagaiteira.com
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.595087353069!2d-8.402800684238001!3d43.37141397913171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7cfcf174574d%3A0x6a47350d095c6d3c!2sA%20Coruña%2C%20Spain!5e0!3m2!1sen!2sus!4v1635188000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <Input required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input type="email" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Teléfono</label>
                <Input type="tel" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Asunto</label>
                <Input required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mensaje</label>
                <Textarea required className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">Enviar Mensaje</Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;