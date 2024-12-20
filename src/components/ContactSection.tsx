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
                15009, A Coruña
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
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.1029800184997!2d-8.403005224908865!3d43.35395647173523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c9c3ee48877%3A0x94af300eb7ce1b13!2sCl%C3%ADnica%20Veterinaria%20Gaiteira!5e0!3m2!1ses!2ses!4v1723738537701!5m2!1ses!2ses" 
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
