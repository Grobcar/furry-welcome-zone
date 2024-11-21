const teamMembers = [
  {
    name: "Dra. Silvia Perez Botana",
    role: "Veterinaria",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    description: "15+ years of experience in small animal medicine",
  },
  {
    name: "Dr. Michael Chen",
    role: "Veterinary Surgeon",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    description: "Specialist in advanced surgical procedures",
  },
];

const Team = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
