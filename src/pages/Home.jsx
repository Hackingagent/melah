import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CompanySection from '../components/CompanySection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="home-page">
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="company">
        <CompanySection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;