import { MapPin, Clock, Phone, Mail, Car, CreditCard } from "lucide-react";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-down">Visítanos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { Icon: MapPin, title: "Localización", content: ["Calle Petín, 3", "15009, A Coruña", "A Coruña"] },
                { Icon: Clock, title: "Horario", content: ["Lunes - Viernes: 10am - 4pm", "Sábado: Cerrado", "Domingo: Cerrado"] },
                { Icon: Phone, title: "Contacto", content: ["Teléfono: 981 135 535"] },
                { Icon: Mail, title: "Email", content: ["clinica.veterinaria.gaiteira@gmail.com"] },
                { Icon: Car, title: "Parking", content: ["Parking disponible en los alrededores", "Plazas de minusválido disponibles"] },
                { Icon: CreditCard, title: "Métodos de pago", content: ["Aceptamos pago con tarjeta", "Seguro de mascotas disponible"] }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.Icon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    {item.content.map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[600px] rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl animate-fade-up" style={{ animationDelay: "300ms" }}>
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
      </div>
    </section>
  );
};

export default ContactSection;