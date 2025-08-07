import { motion } from 'framer-motion';

const CompanySection = () => {
  return (
    <motion.section 
      className="section company-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <div className="section-header">
          <h2>Our Company</h2>
          <p>Building the future of technology together</p>
        </div>
        
        <div className="company-content">
          <motion.div 
            className="mission-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Mission</h3>
            <p>
              To empower businesses through innovative technology solutions that drive growth, 
              efficiency, and competitive advantage in an ever-evolving digital landscape.
            </p>
          </motion.div>
          
          <motion.div 
            className="vision-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Vision</h3>
            <p>
              To be recognized globally as a leader in technology innovation, known for our 
              commitment to excellence, integrity, and transformative digital solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="values-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Values</h3>
            <ul>
              <li>Innovation and Creativity</li>
              <li>Client-Centric Approach</li>
              <li>Integrity and Transparency</li>
              <li>Collaboration and Teamwork</li>
              <li>Continuous Learning</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CompanySection;