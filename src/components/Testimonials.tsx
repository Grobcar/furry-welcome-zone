const testimonials = [
  {
    name: "Emily Thompson",
    text: "The team at Pawsome Care is amazing! They took such great care of my dog during his surgery.",
    pet: "Max, Golden Retriever",
  },
  {
    name: "James Wilson",
    text: "Professional, caring, and thorough. Best vet clinic I've ever been to!",
    pet: "Luna, Persian Cat",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
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