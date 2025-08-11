import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { path: '/disclaimer', name: 'Disclaimer' },
    { path: '/grievance', name: 'Grievance' },
    { path: '/privacy-policy', name: 'Privacy Policy' },
    { path: '/terms-of-service', name: 'Terms of Service' },
    { path: '/code-of-business', name: 'Code of Business Conduct' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Melah Information Technologies</h3>
            <p>Innovative solutions for your digital transformation needs.</p>
            <div className="social-links">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <ul>
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link to={link.path}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li><FaPhone /> +237670344547 / +237696013948 </li>
              <li><FaEnvelope /> info@melah.cm</li>
              <li><FaMapMarkerAlt /> Sonac Street Bamenda</li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Melah Information Technologies Co. LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;