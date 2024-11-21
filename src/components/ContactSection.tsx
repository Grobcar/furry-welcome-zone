import { MapPin, Clock, Phone, Mail, Car, CreditCard } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-gray-600">
                  123 Pet Care Lane
                  <br />
                  Veterinary District, CA 90210
                  <br />
                  United States
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
                  Saturday: Cerrado
                  <br />
                  Sunday: Cerrado
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Contact</h3>
                <p className="text-gray-600">
                  Phone: (555) 123-4567
                  <br />
                  Emergency: (555) 911-PETS
                  <br />
                  Fax: (555) 123-4568
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">
                  General Inquiries: info@pawsomecare.com
                  <br />
                  Appointments: appointments@pawsomecare.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Car className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Parking</h3>
                <p className="text-gray-600">
                  Free parking available on-site
                  <br />
                  Handicap accessible
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CreditCard className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Payment Methods</h3>
                <p className="text-gray-600">
                  We accept all major credit cards
                  <br />
                  Insurance and payment plans available
                </p>
              </div>
            </div>
          </div>
          <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203640535!2d-118.24368384866867!3d34.05267002569443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd5e4ee617%3A0x55d8c718c801e85c!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1635188000000!5m2!1sen!2sus"
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
