import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Who = () => {
  return (
        <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Quienes somos
        </h2>
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl">
                        <img
              src="/images/mascota.webp"
              alt="Equipo veterinario en acción"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />

          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            En Veterinaria Gaiteira, nos enorgullece ofrecer un servicio veterinario excepcional 
            respaldado por años de experiencia y dedicación. Nuestro equipo de profesionales 
            altamente cualificados combina la última tecnología con un cuidado compasivo para 
            garantizar que cada mascota reciba la atención que merece. Entendemos que sus 
            mascotas son parte de su familia, y nos comprometemos a tratarlas con el mismo 
            amor y respeto.
          </p>
        </div>
        <h2 className="text-3xl font-bold text-center mb-12">¿Por Qué Elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyPoints.map((point, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
        export default Who;
