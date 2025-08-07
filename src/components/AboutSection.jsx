import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <motion.section 
      className="section about-section"
      id="about"
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
            About Melah Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Leading the way in innovative technology solutions since 2015
          </motion.p>
        </div>
        
        <div className="about-content">
          <motion.div 
            className="about-text fade-in-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Our Story</h3>
            <p>
              Melah Information Technologies CO LTD was founded with a vision to transform businesses 
              through technology. Over the years, we've grown into a trusted partner for companies 
              looking to innovate and stay ahead in the digital landscape.
            </p>
            <p>
              Our team of experts combines technical expertise with business acumen to deliver 
              solutions that drive real results. We believe in building long-term relationships 
              with our clients, understanding their unique challenges, and providing tailored 
              solutions that meet their specific needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-image fade-in-right"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;