import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Gemma",
    text: "Silvia lleva años atendiendo a mis mascotas, y estamos encantados, con su gran dedicación, muy atenta y preocupada, tiene una gran vocación! Solo tengo buenas palabras para ella!",
    pet: "Luna",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  },
  {
    name: "Eduardo",
    text: "Estoy encantado de compartir mi experiencia en la veterinaria Gaiteira. Desde el primer día que llevamos a nuestra perra, allí, hemos recibido un servicio excepcional por parte de Silvia y su equipo. ",
    pet: "Jeju",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-down">
            Nuestros Clientes Opinan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={`Mascota de ${testimonial.name}`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-primary text-sm">Mascota: {testimonial.pet}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;