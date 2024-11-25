import { MapPin, Clock, Phone, Mail, Car, CreditCard } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Visítanos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Localización</h3>
                <p className="text-gray-600">
                  Calle Petín, 3
                  <br />
                15006, A Coruña
                  <br />
                  A Coruña
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Horario</h3>
                <p className="text-gray-600">
                  Lunes - Viernes: 10am - 4pm
                  <br />
                  Sábado: Cerrado
                  <br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Contacto</h3>
                <p className="text-gray-600">
                  Teléfono: 981 135 535
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">
                  clinica.veterinaria.gaiteira@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Car className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Parking</h3>
                <p className="text-gray-600">
                  Parking disponible en los alrededores
                  <br />
                  Plazas de minusválido disponibles
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CreditCard className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Métodos de pago</h3>
                <p className="text-gray-600">
                  Aceptamos pago con tarjeta
                  <br />
                  Seguro de mascotas disponible
                </p>
              </div>
            </div>
          </div>
          <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${43.354100794160665},${-8.400430302581}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
