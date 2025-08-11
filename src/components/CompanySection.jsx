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
              To help Small and medium-sized businesses to achieve their online marketing goals and 
              grow their businesses through our expertise in digital marketing services, tailored
              to unique needs of each clients, and to help businesses achieve their full
              potential in the digital landscape
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
              Our vision at Melah Information Technologies is to be the trusted partner for
              businesses seeking ti navigate the complexities of digital marketing. <br />

              We aim to deliver exceptional results, building a long-term relationships,
              and contribute to the growth and success of our clients.
            </p>
          </motion.div>
          
          <motion.div 
            className="values-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Philosophy</h3>

            <p>The Cornerstone of any successful business is its ability to 'listen and learn' with it's customers</p>
            <br />

            <b>At Melah Info Tech we are committed to growing with our clients by:</b>
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