import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Who = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          Quienes Somos
        </h2>
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                En Veterinaria Gaiteira, nos enorgullece ofrecer un servicio veterinario excepcional 
                respaldado por años de experiencia y dedicación. Nuestro equipo de profesionales 
                altamente cualificados combina la última tecnología con un cuidado compasivo para 
                garantizar que cada mascota reciba la atención que merece. Entendemos que sus 
                mascotas son parte de su familia, y nos comprometemos a tratarlas con el mismo 
                amor y respeto.
              </p>
              <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl">
                <img
                  src="/images/vet.webp"
                  alt="Equipo veterinario en acción"
                  className="w-full h-64 object-cover sm:h-auto sm:max-h-[300px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Who;
