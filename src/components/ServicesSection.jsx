import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaMobile, FaDatabase, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements."
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud services to optimize your business operations."
  },
  {
    icon: <FaMobile />,
    title: "Mobile App Development",
    description: "Engaging mobile applications for iOS and Android platforms."
  },
  {
    icon: <FaDatabase />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our analytics solutions."
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets."
  },
  {
    icon: <FaChartLine />,
    title: "IT Consulting",
    description: "Expert guidance to align your technology with business goals."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ServicesSection = () => {
  return (
    <motion.section 
      className="section services-section"
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive technology solutions for your business
          </motion.p>
        </div>
        
        <motion.div 
          className="services-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={item}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div 
                className="service-icon"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {service.icon}
              </motion.div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;