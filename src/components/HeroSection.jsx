import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section 
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="fade-in-up">Innovative Technology Solutions</h1>
          <p className="fade-in-up delay-1">Empowering your business with cutting-edge digital transformation</p>
          <div className="hero-buttons fade-in-up delay-2">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-outline">Contact Us</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="scroll-hint"
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <FaChevronDown />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;