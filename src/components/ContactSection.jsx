import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <motion.section 
      className="section contact-section"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
        </div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <FaPhone className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+237670344547  +237696013948</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>info@melah.cm</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Address</h4>
                <p>Sonac Street Bamenda</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaClock className="icon" />
              <div>
                <h4>Working Hours</h4>
                <p>24 hours</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;