import Hero from "@/components/Hero";
import Who from "@/components/Who";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import KeyPoints from "@/components/KeyPoints";

const Index = () => {
  return (
    <div className="min-h-screen">
      
      <Hero />  
      <Who /> 
      <Services />
      <Team /> 
      <KeyPoints />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Index;
