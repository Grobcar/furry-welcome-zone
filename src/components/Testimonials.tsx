const testimonials = [
  {
    name: "Gemma",
    text: "Silvia lleva años atendiendo a mis mascotas, y estamos encantados, con su gran dedicación, muy atenta y preocupada, tiene una gran vocación! Solo tengo buenas palabras para ella!",
    pet: "Luna",
  },
  {
    name: "Eduardo",
    text: "Estoy encantado de compartir mi experiencia en la veterinaria Gaiteira. Desde el primer día que llevamos a nuestra perra, allí, hemos recibido un servicio excepcional por parte de Silvia y su equipo. ",
    pet: "Jeju",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Clientes Opinan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-primary text-sm">{testimonial.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
